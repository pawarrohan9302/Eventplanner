import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { saveAs } from 'file-saver';
import { motion, AnimatePresence } from 'framer-motion';

const GuestListManager = () => {
    // State for managing the list of guests
    const [guestList, setGuestList] = useState([]);
    // State for the current guest being added/edited
    const [guestInput, setGuestInput] = useState({ id: null, name: '', email: '', phone: '', role: '', RSVP: '' });
    // State for per-guest budget costs
    const [perGuestCosts, setPerGuestCosts] = useState({
        catering: 2500, // Cost per confirmed guest for high-end catering
        seating: 300,   // Cost per confirmed guest for premium seating/setup
        favors: 150,    // Cost per confirmed guest for wedding favors
        misc: 100,      // Miscellaneous costs per confirmed guest
    });
    // State for search and filter
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All'); // 'All', 'Yes', 'No', 'Maybe'
    // State for confirmation modal
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [guestToDelete, setGuestToDelete] = useState(null);

    // Calculate RSVP counts and confirmed guest count using useMemo for efficiency
    const rsvpCounts = useMemo(() => {
        const counts = { Yes: 0, No: 0, Maybe: 0, Pending: 0 };
        guestList.forEach(guest => {
            if (counts[guest.RSVP] !== undefined) {
                counts[guest.RSVP]++;
            } else {
                counts.Pending++;
            }
        });
        return counts;
    }, [guestList]);

    // Calculate total estimated budget based on confirmed guests
    const totalEstimatedBudget = useMemo(() => {
        const confirmedGuests = rsvpCounts.Yes;
        const costPerConfirmedGuest =
            Number(perGuestCosts.catering) +
            Number(perGuestCosts.seating) +
            Number(perGuestCosts.favors) +
            Number(perGuestCosts.misc);
        return confirmedGuests * costPerConfirmedGuest;
    }, [rsvpCounts.Yes, perGuestCosts]);

    // Handler for changes in guest input fields
    const handleGuestInputChange = (e) => {
        const { name, value } = e.target;
        setGuestInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handler for changes in per-guest cost inputs
    const handleCostChange = (e) => {
        const { name, value } = e.target;
        setPerGuestCosts((prevState) => ({
            ...prevState,
            [name]: Math.max(0, parseFloat(value) || 0), // Ensure non-negative numbers
        }));
    };

    // Add or Update Guest
    const addOrUpdateGuest = () => {
        if (!guestInput.name || !guestInput.RSVP) {
            alert('Guest Name and RSVP Status are required!');
            return;
        }

        if (guestInput.id) {
            // Update existing guest
            setGuestList((prevList) =>
                prevList.map((g) => (g.id === guestInput.id ? guestInput : g))
            );
        } else {
            // Add new guest
            setGuestList((prevList) => [
                ...prevList,
                { ...guestInput, id: Date.now() }, // Assign unique ID
            ]);
        }
        setGuestInput({ id: null, name: '', email: '', phone: '', role: '', RSVP: '' }); // Reset form
    };

    // Edit Guest: Populate form with guest data
    const editGuest = useCallback((guest) => {
        setGuestInput(guest);
        // Scroll to the top to make the form visible if it's off-screen
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Confirm Delete Guest
    const confirmDeleteGuest = (guestId) => {
        setGuestToDelete(guestId);
        setShowConfirmModal(true);
    };

    // Delete Guest
    const deleteGuest = () => {
        if (guestToDelete) {
            setGuestList((prevList) => prevList.filter((g) => g.id !== guestToDelete));
            setGuestToDelete(null);
            setShowConfirmModal(false);
        }
    };

    // Filtered guest list based on search term and RSVP status
    const filteredGuests = useMemo(() => {
        let currentGuests = guestList;

        if (filterStatus !== 'All') {
            currentGuests = currentGuests.filter(guest => guest.RSVP === filterStatus);
        }

        if (searchTerm) {
            const lowerCaseSearch = searchTerm.toLowerCase();
            currentGuests = currentGuests.filter(
                (guest) =>
                    guest.name.toLowerCase().includes(lowerCaseSearch) ||
                    guest.role.toLowerCase().includes(lowerCaseSearch) ||
                    guest.email.toLowerCase().includes(lowerCaseSearch) ||
                    guest.phone.includes(lowerCaseSearch)
            );
        }
        return currentGuests;
    }, [guestList, searchTerm, filterStatus]);

    // Download guest list as CSV
    const downloadGuestList = () => {
        if (guestList.length === 0) {
            alert('Guest list is empty. Add some guests first!');
            return;
        }
        const csvData = [
            ['Name', 'Email', 'Phone', 'Role', 'RSVP Status'],
            ...guestList.map((guest) => [
                guest.name,
                guest.email || '', // Ensure no 'undefined' in CSV
                guest.phone || '',
                guest.role || '',
                guest.RSVP,
            ]),
        ];
        const csvContent = csvData.map((row) => row.join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'wedding_guest_list.csv');
    };

    // RSVP Status color mapping
    const rsvpColor = (status) => {
        switch (status) {
            case 'Yes': return 'bg-green-600';
            case 'No': return 'bg-red-600';
            case 'Maybe': return 'bg-yellow-600';
            case 'Pending': return 'bg-blue-600';
            default: return 'bg-gray-500';
        }
    };

    // Helper to format currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    // Framer Motion variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="bg-gradient-to-br from-gray-950 via-purple-900 to-black min-h-screen p-8 sm:p-12 font-sans text-white">
            <motion.div
                className="container mx-auto bg-gray-800 bg-opacity-70 rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-14 border border-gray-700"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h2
                    className="text-4xl sm:text-5xl font-extrabold text-center text-yellow-400 mb-4 tracking-tight"
                    variants={itemVariants}
                >
                    Your Elite Guest List Manager
                </motion.h2>
                <motion.p
                    className="text-center text-lg sm:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    variants={itemVariants}
                >
                    Effortlessly manage your wedding invitations, track RSVPs, and estimate costs with precision.
                </motion.p>

                {/* Guest Input and Per-Guest Costs Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700" variants={itemVariants}>
                        <h3 className="text-3xl font-bold text-yellow-300 mb-6">Add/Edit Guest</h3>
                        <form className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-xl font-semibold text-gray-200 mb-2">Guest Name <span className="text-red-500">*</span>:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={guestInput.name}
                                    onChange={handleGuestInputChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., Mr. Raj Singh"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xl font-semibold text-gray-200 mb-2">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={guestInput.email}
                                    onChange={handleGuestInputChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., raj.singh@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-xl font-semibold text-gray-200 mb-2">Phone:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={guestInput.phone}
                                    onChange={handleGuestInputChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., +919876543210"
                                />
                            </div>
                            <div>
                                <label htmlFor="role" className="block text-xl font-semibold text-gray-200 mb-2">Role/Relationship:</label>
                                <input
                                    type="text"
                                    id="role"
                                    name="role"
                                    value={guestInput.role}
                                    onChange={handleGuestInputChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., Groom's Uncle, Bride's Friend"
                                />
                            </div>
                            <div>
                                <label htmlFor="RSVP" className="block text-xl font-semibold text-gray-200 mb-2">RSVP Status <span className="text-red-500">*</span>:</label>
                                <select
                                    id="RSVP"
                                    name="RSVP"
                                    value={guestInput.RSVP}
                                    onChange={handleGuestInputChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
                                    required
                                >
                                    <option value="">Select RSVP status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Maybe">Maybe</option>
                                </select>
                            </div>
                            <button
                                type="button"
                                onClick={addOrUpdateGuest}
                                className="w-full px-8 py-3 bg-yellow-500 text-gray-900 rounded-full font-bold text-xl shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1"
                            >
                                {guestInput.id ? 'Update Guest' : 'Add Guest'}
                            </button>
                        </form>
                    </motion.div>

                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700" variants={itemVariants}>
                        <h3 className="text-3xl font-bold text-yellow-300 mb-6">Budget & Overview</h3>
                        <div className="space-y-6 mb-8">
                            <h4 className="text-2xl font-bold text-gray-200">Per Guest Estimated Costs (for 'Yes' RSVPs):</h4>
                            {Object.keys(perGuestCosts).map((costType) => (
                                <div key={costType} className="flex flex-col">
                                    <label htmlFor={costType} className="block text-xl font-semibold text-gray-200 mb-2">
                                        {costType.charAt(0).toUpperCase() + costType.slice(1)} Cost (₹):
                                    </label>
                                    <input
                                        type="number"
                                        id={costType}
                                        name={costType}
                                        value={perGuestCosts[costType]}
                                        onChange={handleCostChange}
                                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                        placeholder="Enter amount"
                                    />
                                    <span className="text-gray-400 text-sm mt-1">Cost per guest for {costType}.</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-2xl font-bold text-gray-200 mb-4">RSVP Summary:</h4>
                            {Object.entries(rsvpCounts).map(([status, count]) => (
                                <div key={status} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-sm">
                                    <span className={`text-xl font-semibold text-white px-3 py-1 rounded-full ${rsvpColor(status)}`}>
                                        {status}:
                                    </span>
                                    <span className="text-2xl font-bold text-yellow-300">{count} guests</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-700">
                            <p className="text-3xl font-bold text-gray-200 mb-2">Total Guests: <span className="text-yellow-400">{guestList.length}</span></p>
                            <p className="text-3xl font-extrabold text-yellow-400">
                                Estimated Cost for Confirmed Guests: <span className="text-purple-400">{formatCurrency(totalEstimatedBudget)}</span>
                            </p>
                            <p className="text-gray-400 text-sm mt-2">
                                (Based on guests with 'Yes' RSVP status and per-guest cost estimates)
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Guest List Display and Actions */}
                <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700" variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-yellow-300 mb-6">Your Guest List</h3>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="Search guests by name, role, email, phone..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full sm:w-2/3 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                        />
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="w-full sm:w-1/3 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
                        >
                            <option value="All">All RSVPs</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Maybe">Maybe</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>

                    {filteredGuests.length === 0 ? (
                        <p className="text-center text-xl text-gray-400 py-8">No guests found. Try adjusting your search or filters.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-gray-800 rounded-lg shadow-lg">
                                <thead>
                                    <tr className="bg-gray-700 text-gray-200 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Name</th>
                                        <th className="py-3 px-6 text-left hidden sm:table-cell">Contact</th>
                                        <th className="py-3 px-6 text-left">Role</th>
                                        <th className="py-3 px-6 text-center">RSVP</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300 text-lg font-light">
                                    <AnimatePresence mode='popLayout'>
                                        {filteredGuests.map((guestItem) => (
                                            <motion.tr
                                                key={guestItem.id}
                                                className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: -50 }}
                                                layout
                                            >
                                                <td className="py-4 px-6 whitespace-nowrap">{guestItem.name}</td>
                                                <td className="py-4 px-6 hidden sm:table-cell">
                                                    {guestItem.email && <p>{guestItem.email}</p>}
                                                    {guestItem.phone && <p>{guestItem.phone}</p>}
                                                </td>
                                                <td className="py-4 px-6">{guestItem.role || '-'}</td>
                                                <td className="py-4 px-6 text-center">
                                                    <span className={`py-1 px-3 rounded-full text-xs font-semibold ${rsvpColor(guestItem.RSVP)}`}>
                                                        {guestItem.RSVP}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-center">
                                                    <div className="flex items-center justify-center space-x-3">
                                                        <button
                                                            onClick={() => editGuest(guestItem)}
                                                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                                            title="Edit Guest"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L15.232 5.232z" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={() => confirmDeleteGuest(guestItem.id)}
                                                            className="text-red-400 hover:text-red-300 transition-colors duration-200"
                                                            title="Delete Guest"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </AnimatePresence>
                                </tbody>
                            </table>
                        </div>
                    )}

                    <div className="mt-8 text-center">
                        <button
                            onClick={downloadGuestList}
                            className="px-8 py-3 bg-green-500 text-white rounded-full font-bold text-xl shadow-lg hover:bg-green-400 transition transform hover:-translate-y-1"
                        >
                            Download Guest List (CSV)
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Confirmation Modal */}
            <AnimatePresence>
                {showConfirmModal && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-gray-800 p-8 rounded-2xl shadow-2xl text-center border border-gray-700 max-w-sm w-full"
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Confirm Deletion</h3>
                            <p className="text-lg text-gray-300 mb-6">Are you sure you want to delete this guest?</p>
                            <div className="flex justify-center space-x-4">
                                <button
                                    onClick={() => setShowConfirmModal(false)}
                                    className="px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-500 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={deleteGuest}
                                    className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GuestListManager;