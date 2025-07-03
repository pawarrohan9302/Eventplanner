import React, { useState } from "react";
import { motion } from "framer-motion";

// Decor themes data
const themes = [
    {
        title: "Royal Floral Design",
        description: "Experience the grandeur of a luxurious floral theme with exquisite flower arrangements and artistic elegance.",
        image: "/Eventplanner/royalrosh.png", // ✅ Updated Path
    },
    {
        title: "Majestic Mandap Decoration",
        description: "Step into a majestic wedding with intricately designed mandaps featuring premium drapes and gold embellishments.",
        image: "/Eventplanner/majestic mandap decoration.jpg",
    },
    {
        title: "Celestial Wedding Theme",
        description: "A mesmerizing theme with cosmic-inspired lighting and dreamy floral arrangements.",
        image: "/Eventplanner/celestialweddingtheme.jpg",
    },

];

const DecorThemes = () => {
    const [selectedTheme, setSelectedTheme] = useState(null);

    const openModal = (theme) => {
        setSelectedTheme(theme);
    };

    const closeModal = () => {
        setSelectedTheme(null);
    };

    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 min-h-screen">
            <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-8">
                Exclusive Wedding Decor Themes
            </h2>
            <div className="container mx-auto grid md:grid-cols-3 gap-12 px-6">
                {themes.map((theme, index) => (
                    <motion.div
                        key={index}
                        className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                    >
                        <img src={theme.image} alt={theme.title} className="w-full h-80 object-cover" loading="lazy" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-center">
                            <h3 className="text-2xl font-bold text-yellow-300">{theme.title}</h3>
                            <p className="mt-2 text-gray-300">{theme.description}</p>
                            <button
                                className="mt-4 px-5 py-2 bg-yellow-400 text-black rounded-full shadow-lg font-semibold hover:bg-yellow-500 transition"
                                onClick={() => openModal(theme)}
                            >
                                View Details
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedTheme && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="bg-white rounded-lg max-w-lg w-full p-6">
                        <h2 className="text-3xl font-bold text-yellow-500">{selectedTheme.title}</h2>
                        <p className="mt-4 text-lg text-gray-800">{selectedTheme.description}</p>
                        <img
                            src={selectedTheme.image}
                            alt={selectedTheme.title}
                            className="mt-6 w-full h-64 object-cover rounded-lg"
                        />
                        <button
                            onClick={closeModal}
                            className="mt-4 px-5 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DecorThemes;
