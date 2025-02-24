import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaGlobe } from 'react-icons/fa';

const AboutUs = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
            <button
                onClick={() => setIsOpen(true)}
                className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
            >
                About Us
            </button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-md"
                >
                    <div className="bg-gray-900 p-6 rounded-xl shadow-2xl border border-yellow-500 max-w-2xl w-full text-center relative">
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-yellow-500 text-xl">&times;</button>
                        <h1 className="text-4xl font-extrabold text-yellow-400 animate-pulse">About WeddingWonders</h1>
                        <p className="mt-4 text-lg text-gray-300">WeddingWonders aapke sapno ki shaadi ko asaan aur yaadgaar banane ke liye ek all-in-one platform hai.</p>
                        <img src="https://source.unsplash.com/800x400/?wedding,ceremony" alt="Wedding" className="mt-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300" />

                        {/* Contact Section */}
                        <div className="mt-6 bg-gray-800 p-4 rounded-lg border border-yellow-500">
                            <h2 className="text-2xl font-semibold text-yellow-400">Contact Us</h2>
                            <p className="text-gray-300 mt-2">Reach out to us for any queries or assistance.</p>
                            <div className="mt-3 space-y-2">
                                <p className="flex items-center justify-center gap-2 text-gray-300"><FaEnvelope className="text-yellow-400" /> support@weddingwonders.com</p>
                                <p className="flex items-center justify-center gap-2 text-gray-300"><FaPhoneAlt className="text-yellow-400" /> +91 9302909397</p>
                                <p className="flex items-center justify-center gap-2 text-gray-300"><FaMapMarkerAlt className="text-yellow-400" /> Burhanpur, MP, India</p>
                                <p className="flex items-center justify-center gap-2 text-gray-300"><FaGlobe className="text-yellow-400" /> <a href="https://weddingwonders.com" className="text-blue-400 hover:underline">weddingwonders.com</a></p>
                            </div>
                            <a href="https://wa.me/919302909397" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-black rounded-full font-semibold hover:bg-green-600 transition">
                                <FaWhatsapp className="text-white" /> Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default AboutUs;
