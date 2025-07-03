import React, { useState } from "react";
import { motion } from "framer-motion";

// Floral designs data
const floralDesigns = [
    {
        title: "Royal Rose Arch",
        description: "A grand entrance with lush red roses and golden drapes.",
        image: "/Eventplanner/floral canapy.jpg",
    },
    {
        title: "Blossom Canopy",
        description: "A dreamy floral canopy with fresh orchids and jasmine for a magical ambiance.",
        image: "/Eventplanner/blossomconopyimage.jpg",
    },
    {
        title: "Golden Petal Pathway",
        description: "An elegant walkway covered with golden petals and floral chandeliers.",
        image: "/Eventplanner/golden petal pathway.jpg", // ✅ Image path updated
    }
];

const FloralDesign = () => {
    const [selectedDesign, setSelectedDesign] = useState(null);

    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 min-h-screen">
            <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-8">Luxury Floral Designs</h2>
            <div className="container mx-auto grid md:grid-cols-3 gap-12 px-6">
                {floralDesigns.map((design, index) => (
                    <motion.div
                        key={index}
                        className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        onClick={() => setSelectedDesign(design)}
                    >
                        <img src={design.image} alt={design.title} className="w-full h-80 object-cover" loading="lazy" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-center">
                            <h3 className="text-2xl font-bold text-yellow-300">{design.title}</h3>
                            <p className="mt-2 text-gray-300">{design.description}</p>
                            <button
                                className="mt-4 px-5 py-2 bg-yellow-400 text-black rounded-full shadow-lg font-semibold hover:bg-yellow-500 transition"
                            >
                                View Details
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedDesign && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="bg-white rounded-lg max-w-lg w-full p-6">
                        <h2 className="text-3xl font-bold text-yellow-500">{selectedDesign.title}</h2>
                        <p className="mt-4 text-lg text-gray-800">{selectedDesign.description}</p>
                        <img
                            src={selectedDesign.image}
                            alt={selectedDesign.title}
                            className="mt-6 w-full h-64 object-cover rounded-lg"
                        />
                        <button
                            onClick={() => setSelectedDesign(null)}
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

export default FloralDesign;
