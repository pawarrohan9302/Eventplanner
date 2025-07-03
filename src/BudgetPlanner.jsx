import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const BudgetPlanner = () => {
    // Initialize state with more structured and default values
    const [budget, setBudget] = useState({
        // Top-level categories
        venue: 0,
        catering: {
            costPerPlate: 2500, // Changed to costPerPlate, often more common, but can revert to thali
            numberOfGuests: 100, // Default guests for initial calculation
            total: 0,
        },
        decoration: {
            mandap: 0,
            floral: 0,
            lighting: 0,
            vipServices: 0, // Luxury additions
            total: 0,
        },
        entertainment: 0,
        photographyVideography: 0, // Added common large category
        attireJewelry: 0, // Added common large category
        invitationsStationery: 0,
        giftsFavors: 0,
        transportation: 0,
        makeupHair: 0,
        others: 0,
        contingency: 0 // Crucial for luxury budgets (e.g., 10-15% of total)
    });

    const [discounts, setDiscounts] = useState(0);
    const [additionalCharges, setAdditionalCharges] = useState(0);

    // Calculate totals automatically using useMemo for performance
    const calculatedTotals = useMemo(() => {
        // Calculate Catering Total
        const cateringTotal = budget.catering.costPerPlate * budget.catering.numberOfGuests;

        // Calculate Decoration Total
        const decorationTotal =
            Number(budget.decoration.mandap) +
            Number(budget.decoration.floral) +
            Number(budget.decoration.lighting) +
            Number(budget.decoration.vipServices);

        // Sum up all individual budget items and sub-totals
        let subtotal = 0;
        subtotal += Number(budget.venue);
        subtotal += cateringTotal;
        subtotal += decorationTotal;
        subtotal += Number(budget.entertainment);
        subtotal += Number(budget.photographyVideography);
        subtotal += Number(budget.attireJewelry);
        subtotal += Number(budget.invitationsStationery);
        subtotal += Number(budget.giftsFavors);
        subtotal += Number(budget.transportation);
        subtotal += Number(budget.makeupHair);
        subtotal += Number(budget.others);

        // Calculate Contingency based on subtotal (e.g., 10%)
        const contingencyAmount = subtotal * (Number(budget.contingency) / 100);

        // Final Total
        const finalTotal = subtotal + contingencyAmount + Number(additionalCharges) - Number(discounts);

        return {
            catering: { ...budget.catering, total: cateringTotal },
            decoration: { ...budget.decoration, total: decorationTotal },
            subtotal,
            contingencyAmount,
            finalTotal,
        };
    }, [budget, discounts, additionalCharges]); // Recalculate only when relevant state changes

    // Update the budget state with calculated sub-totals when inputs change
    useEffect(() => {
        setBudget(prevBudget => ({
            ...prevBudget,
            catering: {
                ...prevBudget.catering,
                total: calculatedTotals.catering.total
            },
            decoration: {
                ...prevBudget.decoration,
                total: calculatedTotals.decoration.total
            }
        }));
    }, [calculatedTotals.catering.total, calculatedTotals.decoration.total]);


    // Generic handler for top-level budget items and direct numbers
    const handleBudgetChange = (e) => {
        const { name, value } = e.target;
        setBudget((prev) => ({
            ...prev,
            [name]: Math.max(0, parseFloat(value) || 0), // Ensure non-negative numbers
        }));
    };

    // Handler for nested catering budget items
    const handleCateringChange = (e) => {
        const { name, value } = e.target;
        setBudget((prev) => ({
            ...prev,
            catering: {
                ...prev.catering,
                [name]: Math.max(0, parseFloat(value) || 0),
            },
        }));
    };

    // Handler for nested decoration budget items
    const handleDecorationChange = (e) => {
        const { name, value } = e.target;
        setBudget((prev) => ({
            ...prev,
            decoration: {
                ...prev.decoration,
                [name]: Math.max(0, parseFloat(value) || 0),
            },
        }));
    };

    // Handler for discounts and additional charges
    const handleExtraChange = (setter) => (e) => {
        setter(Math.max(0, parseFloat(e.target.value) || 0));
    };


    // Function to format numbers as Indian Rupees
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0, // No decimal places for whole rupees
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="bg-gradient-to-br from-gray-950 via-purple-900 to-black min-h-screen p-8 sm:p-12 font-sans text-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto bg-gray-800 bg-opacity-70 rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-14 border border-gray-700"
            >
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-yellow-400 mb-4 tracking-tight">
                    Your Personalized Wedding Budget Planner
                </h2>
                <p className="text-center text-lg sm:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Plan your dream celebration with precision. This tool helps you allocate funds effectively across all categories, ensuring a seamless and spectacular event.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Core Categories Section */}
                    <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700">
                        <h3 className="text-3xl font-bold text-yellow-300 mb-6">Core Wedding Elements</h3>
                        <div className="space-y-6">
                            {/* Venue */}
                            <div className="flex flex-col">
                                <label htmlFor="venue" className="text-xl font-semibold text-gray-200 mb-2">Venue Cost:</label>
                                <input
                                    type="number"
                                    id="venue"
                                    name="venue"
                                    value={budget.venue}
                                    onChange={handleBudgetChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., 5,00,000"
                                />
                                <span className="text-gray-400 text-sm mt-1">Approximate cost for your chosen wedding venue.</span>
                            </div>

                            {/* Catering */}
                            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 shadow-inner">
                                <h4 className="text-2xl font-bold text-yellow-300 mb-4">Catering (Per Plate Basis)</h4>
                                <div className="space-y-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="costPerPlate" className="text-lg font-semibold text-gray-200 mb-2">Cost per Plate (₹):</label>
                                        <input
                                            type="number"
                                            id="costPerPlate"
                                            name="costPerPlate"
                                            value={budget.catering.costPerPlate}
                                            onChange={handleCateringChange}
                                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                            placeholder="e.g., 2500"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="numberOfGuests" className="text-lg font-semibold text-gray-200 mb-2">Number of Guests:</label>
                                        <input
                                            type="number"
                                            id="numberOfGuests"
                                            name="numberOfGuests"
                                            value={budget.catering.numberOfGuests}
                                            onChange={handleCateringChange}
                                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                            placeholder="e.g., 250"
                                        />
                                    </div>
                                    <p className="text-xl font-bold text-yellow-400 mt-4">
                                        Total Catering: {formatCurrency(calculatedTotals.catering.total)}
                                    </p>
                                </div>
                            </div>

                            {/* Decoration */}
                            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 shadow-inner">
                                <h4 className="text-2xl font-bold text-yellow-300 mb-4">Decoration & Styling</h4>
                                <div className="space-y-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="mandap" className="text-lg font-semibold text-gray-200 mb-2">Mandap Decor:</label>
                                        <input
                                            type="number"
                                            id="mandap"
                                            name="mandap"
                                            value={budget.decoration.mandap}
                                            onChange={handleDecorationChange}
                                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                            placeholder="e.g., 1,50,000"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="floral" className="text-lg font-semibold text-gray-200 mb-2">Floral Arrangements:</label>
                                        <input
                                            type="number"
                                            id="floral"
                                            name="floral"
                                            value={budget.decoration.floral}
                                            onChange={handleDecorationChange}
                                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                            placeholder="e.g., 2,00,000"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="lighting" className="text-lg font-semibold text-gray-200 mb-2">Lighting & Ambiance:</label>
                                        <input
                                            type="number"
                                            id="lighting"
                                            name="lighting"
                                            value={budget.decoration.lighting}
                                            onChange={handleDecorationChange}
                                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                            placeholder="e.g., 75,000"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="vipServices" className="text-lg font-semibold text-gray-200 mb-2">Luxury Decor/VIP Services:</label>
                                        <input
                                            type="number"
                                            id="vipServices"
                                            name="vipServices"
                                            value={budget.decoration.vipServices}
                                            onChange={handleDecorationChange}
                                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                            placeholder="e.g., 1,00,000"
                                        />
                                        <span className="text-gray-400 text-sm mt-1">Bespoke elements, exotic flowers, custom installations.</span>
                                    </div>
                                    <p className="text-xl font-bold text-yellow-400 mt-4">
                                        Total Decoration: {formatCurrency(calculatedTotals.decoration.total)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Important Categories & Summary */}
                    <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700">
                        <h3 className="text-3xl font-bold text-yellow-300 mb-6">Additional Essentials</h3>
                        <div className="space-y-6">
                            {/* Entertainment */}
                            <div className="flex flex-col">
                                <label htmlFor="entertainment" className="text-xl font-semibold text-gray-200 mb-2">Entertainment:</label>
                                <input
                                    type="number"
                                    id="entertainment"
                                    name="entertainment"
                                    value={budget.entertainment}
                                    onChange={handleBudgetChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., 1,20,000"
                                />
                                <span className="text-gray-400 text-sm mt-1">DJ, live band, performers, emcee.</span>
                            </div>

                            {/* Photography & Videography */}
                            <div className="flex flex-col">
                                <label htmlFor="photographyVideography" className="text-xl font-semibold text-gray-200 mb-2">Photography & Videography:</label>
                                <input
                                    type="number"
                                    id="photographyVideography"
                                    name="photographyVideography"
                                    value={budget.photographyVideography}
                                    onChange={handleBudgetChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., 1,80,000"
                                />
                                <span className="text-gray-400 text-sm mt-1">Capturing every precious moment.</span>
                            </div>

                            {/* Attire & Jewelry */}
                            <div className="flex flex-col">
                                <label htmlFor="attireJewelry" className="text-xl font-semibold text-gray-200 mb-2">Attire & Jewelry:</label>
                                <input
                                    type="number"
                                    id="attireJewelry"
                                    name="attireJewelry"
                                    value={budget.attireJewelry}
                                    onChange={handleBudgetChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., 3,00,000"
                                />
                                <span className="text-gray-400 text-sm mt-1">Wedding outfits, accessories, and jewelry.</span>
                            </div>

                            {/* Invitations & Stationery */}
                            <div className="flex flex-col">
                                <label htmlFor="invitationsStationery" className="text-xl font-semibold text-gray-200 mb-2">Invitations & Stationery:</label>
                                <input
                                    type="number"
                                    id="invitationsStationery"
                                    name="invitationsStationery"
                                    value={budget.invitationsStationery}
                                    onChange={handleBudgetChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., 50,000"
                                />
                                <span className="text-gray-400 text-sm mt-1">Designer invites, thank you cards, programs.</span>
                            </div>

                            {/* Makeup & Hair */}
                            <div className="flex flex-col">
                                <label htmlFor="makeupHair" className="text-xl font-semibold text-gray-200 mb-2">Makeup & Hair:</label>
                                <input
                                    type="number"
                                    id="makeupHair"
                                    name="makeupHair"
                                    value={budget.makeupHair}
                                    onChange={handleBudgetChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., 40,000"
                                />
                                <span className="text-gray-400 text-sm mt-1">Professional bridal and groom styling.</span>
                            </div>

                            {/* Gifts & Favors */}
                            <div className="flex flex-col">
                                <label htmlFor="giftsFavors" className="text-xl font-semibold text-gray-200 mb-2">Gifts & Favors:</label>
                                <input
                                    type="number"
                                    id="giftsFavors"
                                    name="giftsFavors"
                                    value={budget.giftsFavors}
                                    onChange={handleBudgetChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., 60,000"
                                />
                                <span className="text-gray-400 text-sm mt-1">Thoughtful tokens for your guests.</span>
                            </div>

                            {/* Transportation */}
                            <div className="flex flex-col">
                                <label htmlFor="transportation" className="text-xl font-semibold text-gray-200 mb-2">Transportation:</label>
                                <input
                                    type="number"
                                    id="transportation"
                                    name="transportation"
                                    value={budget.transportation}
                                    onChange={handleBudgetChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., 30,000"
                                />
                                <span className="text-gray-400 text-sm mt-1">Guest shuttles, luxury car for couple.</span>
                            </div>

                            {/* Others */}
                            <div className="flex flex-col">
                                <label htmlFor="others" className="text-xl font-semibold text-gray-200 mb-2">Miscellaneous/Others:</label>
                                <input
                                    type="number"
                                    id="others"
                                    name="others"
                                    value={budget.others}
                                    onChange={handleBudgetChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., 50,000"
                                />
                                <span className="text-gray-400 text-sm mt-1">Unforeseen expenses, vendor tips, permits.</span>
                            </div>

                            {/* Contingency */}
                            <div className="flex flex-col">
                                <label htmlFor="contingency" className="text-xl font-semibold text-gray-200 mb-2">Contingency (e.g., 10%):</label>
                                <input
                                    type="number"
                                    id="contingency"
                                    name="contingency"
                                    value={budget.contingency}
                                    onChange={handleBudgetChange}
                                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                    placeholder="e.g., 10"
                                    min="0"
                                    max="100"
                                />
                                <span className="text-gray-400 text-sm mt-1">Recommended 10-15% of your total budget for unforeseen costs.</span>
                            </div>

                            {/* Discounts & Additional Charges */}
                            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 shadow-inner">
                                <h4 className="text-2xl font-bold text-yellow-300 mb-4">Adjustments</h4>
                                <div className="space-y-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="discounts" className="text-lg font-semibold text-gray-200 mb-2">Discounts (₹):</label>
                                        <input
                                            type="number"
                                            id="discounts"
                                            name="discounts"
                                            value={discounts}
                                            onChange={handleExtraChange(setDiscounts)}
                                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                            placeholder="e.g., 20,000"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="additionalCharges" className="text-lg font-semibold text-gray-200 mb-2">Additional Charges (₹):</label>
                                        <input
                                            type="number"
                                            id="additionalCharges"
                                            name="additionalCharges"
                                            value={additionalCharges}
                                            onChange={handleExtraChange(setAdditionalCharges)}
                                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-lg"
                                            placeholder="e.g., 15,000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-12 bg-yellow-400 p-8 rounded-2xl shadow-2xl text-gray-900 text-center border border-yellow-500"
                >
                    <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">Your Estimated Wedding Budget</h3>
                    <p className="text-2xl sm:text-3xl font-bold mb-2">
                        Subtotal (before contingency): <span className="text-purple-800">{formatCurrency(calculatedTotals.subtotal)}</span>
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold mb-2">
                        Contingency ({budget.contingency}%): <span className="text-purple-800">{formatCurrency(calculatedTotals.contingencyAmount)}</span>
                    </p>
                    <div className="border-t-2 border-gray-700 my-4 pt-4">
                        <p className="text-4xl sm:text-5xl font-extrabold">
                            Grand Total: <span className="text-purple-900">{formatCurrency(calculatedTotals.finalTotal)}</span>
                        </p>
                    </div>
                    <p className="text-gray-700 text-lg sm:text-xl mt-6">
                        This is an estimated budget. For a precise quotation and personalized consultation, please connect with our team.
                    </p>
                    <a
                        href="/contact-us" // Replace with your actual contact page path
                        className="mt-8 inline-block px-10 py-4 bg-purple-700 text-white rounded-full font-bold text-xl shadow-lg hover:bg-purple-800 transition transform hover:-translate-y-1"
                        target="_blank" rel="noopener noreferrer"
                    >
                        Request a Personalized Quote
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default BudgetPlanner;