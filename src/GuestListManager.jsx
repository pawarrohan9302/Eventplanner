import React, { useState } from 'react';
import { saveAs } from 'file-saver'; // For downloading the CSV

const GuestListManager = () => {
    const [guestList, setGuestList] = useState([]);
    const [guest, setGuest] = useState({ name: '', role: '', RSVP: '' });
    const [budget, setBudget] = useState({
        catering: 500, // Cost per guest for catering
        seating: 100,  // Cost per guest for seating
        others: 50,    // Other costs per guest
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGuest((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const addGuest = () => {
        if (guest.name && guest.role && guest.RSVP) {
            setGuestList((prevState) => [...prevState, guest]);
            setGuest({ name: '', role: '', RSVP: '' }); // Reset input fields
            updateBudget();
        }
    };

    const updateBudget = () => {
        const totalGuests = guestList.length + 1; // Adding the newly added guest
        const totalCost =
            (budget.catering + budget.seating + budget.others) * totalGuests;
        setBudget((prevState) => ({
            ...prevState,
            total: totalCost,
        }));
    };

    const downloadGuestList = () => {
        const csvData = [
            ['Name', 'Role', 'RSVP Status'],
            ...guestList.map((guest) => [guest.name, guest.role, guest.RSVP]),
        ];
        const csvContent = csvData
            .map((row) => row.join(','))
            .join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'guest_list.csv');
    };

    const rsvpColor = (status) => {
        switch (status) {
            case 'Yes':
                return 'bg-green-500';
            case 'No':
                return 'bg-red-500';
            case 'Maybe':
                return 'bg-yellow-500';
            default:
                return 'bg-gray-300';
        }
    };

    return (
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-yellow-500 text-center">Guest List Manager</h2>
            <div className="mt-6">
                <form className="space-y-6">
                    <div className="mb-4">
                        <label className="block text-lg text-gray-800 font-medium">Guest Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={guest.name}
                            onChange={handleChange}
                            className="mt-2 p-4 w-full rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Enter guest name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg text-gray-800 font-medium">Role:</label>
                        <input
                            type="text"
                            name="role"
                            value={guest.role}
                            onChange={handleChange}
                            className="mt-2 p-4 w-full rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Enter guest's role"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg text-gray-800 font-medium">RSVP Status:</label>
                        <select
                            name="RSVP"
                            value={guest.RSVP}
                            onChange={handleChange}
                            className="mt-2 p-4 w-full rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            <option value="">Select RSVP status</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Maybe">Maybe</option>
                        </select>
                    </div>
                    <button
                        type="button"
                        onClick={addGuest}
                        className="px-6 py-3 w-full bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                        Add Guest
                    </button>
                </form>

                <div className="mt-6">
                    <h3 className="text-2xl text-gray-800 font-semibold">Guest List:</h3>
                    <ul className="mt-4 space-y-3">
                        {guestList.map((guest, index) => (
                            <li key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
                                <div className="flex items-center space-x-4">
                                    <span className="text-lg font-medium text-gray-800">{guest.name} ({guest.role})</span>
                                    <span className={`text-white px-4 py-1 rounded-full ${rsvpColor(guest.RSVP)}`}>
                                        {guest.RSVP}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-xl text-gray-800">Total Budget: ₹{budget.total}</p>
                    <button
                        onClick={downloadGuestList}
                        className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        Download Guest List as CSV
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GuestListManager;
