import React, { useState } from 'react';

const BudgetPlanner = () => {
    const [budget, setBudget] = useState({
        total: 0,
        categories: {
            venue: 0,
            catering: 0,
            decoration: 0,
            entertainment: 0,
            others: 0,
        },
        thali: {
            costPerThali: 1000, // VIP cost per thali
            numberOfGuests: 0,
            totalCateringCost: 0,
        },
        decoration: {
            mandap: 0,
            floral: 0,
            lighting: 0,
            vipServices: 0, // VIP Services (e.g., luxury decorations, extra catering)
        },
        entertainment: 0,
        discount: 0,
        additionalCharges: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBudget((prevState) => ({
            ...prevState,
            categories: {
                ...prevState.categories,
                [name]: value,
            },
            thali: {
                ...prevState.thali,
                [name]: value,
            },
            decoration: {
                ...prevState.decoration,
                [name]: value,
            },
            entertainment: name === 'entertainment' ? value : prevState.entertainment,
            discount: name === 'discount' ? value : prevState.discount,
            additionalCharges: name === 'additionalCharges' ? value : prevState.additionalCharges,
        }));
    };

    const calculateTotal = () => {
        const totalCategoriesBudget = Object.values(budget.categories).reduce(
            (acc, curr) => acc + Number(curr),
            0
        );

        // Calculate total catering cost based on number of guests and cost per thali
        const cateringCost = budget.thali.costPerThali * budget.thali.numberOfGuests;

        // Calculate total decoration cost
        const totalDecorationCost = Object.values(budget.decoration).reduce(
            (acc, curr) => acc + Number(curr),
            0
        );

        // Total cost including VIP services, discount, and additional charges
        const finalTotal = totalCategoriesBudget + cateringCost + totalDecorationCost + budget.entertainment - budget.discount + parseInt(budget.additionalCharges);

        setBudget((prevState) => ({
            ...prevState,
            total: finalTotal,
            thali: {
                ...prevState.thali,
                totalCateringCost: cateringCost,
            },
            decoration: {
                ...prevState.decoration,
                totalDecorationCost: totalDecorationCost,
            },
        }));
    };

    return (
        <div className="bg-gradient-to-r from-indigo-800 to-purple-800 min-h-screen p-10">
            <div className="container mx-auto text-white rounded-2xl shadow-xl p-8 bg-opacity-90">
                <h2 className="text-4xl font-bold text-center text-yellow-400 mb-6">
                    VIP Wedding Budget Planner
                </h2>
                <p className="text-center text-lg mb-8 text-gray-300">Plan your luxurious wedding with ease and sophistication!</p>

                {/* Categories Input */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.keys(budget.categories).map((category) => (
                        <div
                            key={category}
                            className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all"
                        >
                            <label className="block text-xl font-semibold text-gray-800 mb-2">
                                {category.charAt(0).toUpperCase() + category.slice(1)}:
                            </label>
                            <input
                                type="number"
                                name={category}
                                value={budget.categories[category]}
                                onChange={handleChange}
                                className="w-full p-4 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="Enter amount"
                            />
                        </div>
                    ))}
                </div>

                {/* Catering Section */}
                <div className="bg-white p-6 rounded-xl shadow-xl mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">VIP Catering Budget (Thali)</h3>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold text-gray-800 mb-2">Cost per Thali (₹):</label>
                        <input
                            type="number"
                            name="costPerThali"
                            value={budget.thali.costPerThali}
                            onChange={handleChange}
                            className="w-full p-4 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter cost per thali"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold text-gray-800 mb-2">Number of Guests:</label>
                        <input
                            type="number"
                            name="numberOfGuests"
                            value={budget.thali.numberOfGuests}
                            onChange={handleChange}
                            className="w-full p-4 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter number of guests"
                        />
                    </div>

                    <div className="text-lg font-semibold text-gray-800">
                        <p>Total Catering Cost: ₹{budget.thali.totalCateringCost.toLocaleString()}</p>
                    </div>
                </div>

                {/* Decoration Section */}
                <div className="bg-white p-6 rounded-xl shadow-xl mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Luxury Decoration Budget</h3>
                    {Object.keys(budget.decoration).map((decoration) => (
                        <div key={decoration} className="mb-4">
                            <label className="block text-lg font-semibold text-gray-800 mb-2">{decoration.charAt(0).toUpperCase() + decoration.slice(1)}:</label>
                            <input
                                type="number"
                                name={decoration}
                                value={budget.decoration[decoration]}
                                onChange={handleChange}
                                className="w-full p-4 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="Enter amount"
                            />
                        </div>
                    ))}
                </div>

                {/* Additional Inputs */}
                <div className="bg-white p-6 rounded-xl shadow-xl mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Other Costs</h3>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold text-gray-800 mb-2">Entertainment Costs:</label>
                        <input
                            type="number"
                            name="entertainment"
                            value={budget.entertainment}
                            onChange={handleChange}
                            className="w-full p-4 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter entertainment cost"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold text-gray-800 mb-2">Discount:</label>
                        <input
                            type="number"
                            name="discount"
                            value={budget.discount}
                            onChange={handleChange}
                            className="w-full p-4 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter discount (if any)"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold text-gray-800 mb-2">Additional Charges:</label>
                        <input
                            type="number"
                            name="additionalCharges"
                            value={budget.additionalCharges}
                            onChange={handleChange}
                            className="w-full p-4 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter any additional charges"
                        />
                    </div>
                </div>

                <div className="text-xl font-semibold text-gray-800 mt-8">
                    <p>Total Estimated Wedding Cost: ₹{budget.total.toLocaleString()}</p>
                </div>

                <button
                    onClick={calculateTotal}
                    className="bg-yellow-400 text-white px-6 py-3 rounded-full text-xl mt-6 hover:bg-yellow-300 transition-all"
                >
                    Calculate Total
                </button>
            </div>
        </div>
    );
};

export default BudgetPlanner;
