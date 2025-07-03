import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaArrowLeft, FaCheckCircle } from "react-icons/fa";

const thaliMenu = [
    {
        id: 1,
        name: "Shahi Thali",
        price: "₹500",
        glow: "from-yellow-500 to-orange-500",
        image: "shahi_thali.jpg",
        dishes: ["Paneer Butter Masala", "Shahi Biryani", "Dal Makhani", "Tandoori Roti", "Gulab Jamun", "Jeera Rice", "Raita", "Salad"],
    },
    {
        id: 2,
        name: "Veg Thali",
        price: "₹400",
        glow: "from-green-400 to-green-700",
        image: "veg_thali.jpg",
        dishes: ["Veg Biryani", "Dal Tadka", "Shimla Mirch Sabzi", "Tandoori Roti", "Gajar Halwa", "Naan", "Papad"],
    },
    {
        id: 3,
        name: "Non-Veg Thali",
        price: "₹700",
        glow: "from-red-500 to-red-700",
        image: "nonveg_thali.jpg",
        dishes: ["Butter Chicken", "Mutton Rogan Josh", "Veg Biryani", "Dal Tadka", "Tandoori Roti", "Gulab Jamun", "Jeera Rice", "Raita"],
    },
];

const Caterers = () => {
    const [selectedThali, setSelectedThali] = useState(null);

    return (
        <div className="bg-black min-h-screen text-white py-12 px-6 flex flex-col items-center bg-cover bg-center" style={{ backgroundImage: "url('wedding_bg.jpg')" }}>
            <motion.h1 className="text-6xl font-extrabold text-yellow-500 mb-10 drop-shadow-xl" whileHover={{ scale: 1.1 }}>
                Luxury Wedding Catering
            </motion.h1>

            {!selectedThali ? (
                <div className="grid md:grid-cols-3 gap-8">
                    {thaliMenu.map((thali) => (
                        <motion.div
                            key={thali.id}
                            className={`bg-gradient-to-r ${thali.glow} p-6 rounded-xl shadow-2xl text-center transition-all duration-300 transform hover:scale-110 relative overflow-hidden`}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedThali(thali)}
                        >
                            <img src={thali.image} alt={thali.name} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">{thali.name}</h2>
                            <p className="text-2xl font-semibold">{thali.price}</p>
                            <motion.button
                                className="mt-4 bg-black text-yellow-400 px-6 py-3 rounded-full text-lg shadow-md hover:bg-yellow-500 hover:text-black transition-all"
                            >
                                Select Thali
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <motion.div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-2xl">
                    <div className="flex justify-between items-center mb-6">
                        <motion.button
                            onClick={() => setSelectedThali(null)}
                            className="text-yellow-400 text-3xl hover:text-yellow-300"
                            whileHover={{ scale: 1.1 }}
                        >
                            <FaArrowLeft />
                        </motion.button>
                        <h2 className="text-4xl font-bold text-yellow-500 drop-shadow-lg">{selectedThali.name}</h2>
                    </div>
                    <img src={selectedThali.image} alt={selectedThali.name} className="w-full h-60 object-cover rounded-md mb-4" />
                    <ul className="grid grid-cols-2 gap-4 text-xl text-gray-300">
                        {selectedThali.dishes.map((dish, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <FaCheckCircle className="text-green-400" /> {dish}
                            </li>
                        ))}
                    </ul>
                    <motion.button
                        className="mt-6 w-full bg-yellow-500 text-black px-6 py-3 rounded-full text-xl font-bold shadow-lg hover:bg-yellow-400 transition-all"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => alert("Thali Confirmed!")}
                    >
                        Confirm Selection
                    </motion.button>
                </motion.div>
            )}
        </div>
    );
};

export default Caterers;
