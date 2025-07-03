import React from "react";
import { motion } from "framer-motion";

const mandapDecorations = [
    {
        title: "Maharaja Mandap",
        description: "A regal mandap with gold-plated pillars and intricate carvings.",
        image: "/Eventplanner/crystal-mandap-01.jpg",
    },
    {
        title: "Divine Lotus Mandap",
        description: "A spiritual setup with a grand lotus theme and divine aura.",
        image: "/Eventplanner/lotus-shaped-mandap-dome.jpg",
    },
    {
        title: "Celestial Pearl Mandap",
        description: "A luxurious mandap with pearl white drapes and starry lighting.",
        image: "/Eventplanner/red-pearl-mandap.jpg", // ✅ Updated Path
    }
];

const MandapDecoration = () => {
    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16">
            <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-8">Exclusive Mandap Decorations</h2>
            <div className="container mx-auto grid md:grid-cols-3 gap-12 px-6">
                {mandapDecorations.map((mandap, index) => (
                    <motion.div
                        key={index}
                        className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                    >
                        <img src={mandap.image} alt={mandap.title} className="w-full h-80 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-center">
                            <h3 className="text-2xl font-bold text-yellow-300">{mandap.title}</h3>
                            <p className="mt-2 text-gray-300">{mandap.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MandapDecoration;
