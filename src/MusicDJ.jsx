import React from 'react';
import { FaMusic, FaHeadphones, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MusicDJ = () => {
    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 min-h-screen flex flex-col items-center">
            <motion.h1
                className="text-6xl font-extrabold text-yellow-400 mb-8 tracking-wide drop-shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <FaMusic className="inline-block mr-4 animate-pulse" /> VIP Music & DJ Experience
            </motion.h1>

            <motion.p
                className="text-xl text-gray-300 text-center max-w-3xl mb-12 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
            >
                Elevate your event with pulsating beats, dynamic DJs, and a euphoric sound experience that will leave you mesmerized!
            </motion.p>

            <motion.div
                className="grid md:grid-cols-3 gap-12 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
            >
                {['Elite DJ', 'Star Performer', 'Luxury Beats'].map((category, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 rounded-3xl p-8 text-center shadow-2xl transform hover:scale-110 transition-all duration-500 border border-yellow-400 hover:border-yellow-500"
                        whileHover={{ scale: 1.15, rotate: 2 }}
                    >
                        <FaHeadphones className="text-6xl text-yellow-400 mb-5 mx-auto animate-spin-slow" />
                        <h3 className="text-3xl font-bold text-yellow-300 mb-3 drop-shadow-md tracking-wide">{category}</h3>
                        <p className="text-lg text-gray-400 leading-relaxed">Experience exclusive DJ performances and high-energy beats tailored for your grand event.</p>
                        <motion.button
                            className="mt-6 px-7 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 text-lg"
                            whileHover={{ scale: 1.1 }}
                        >
                            Book Now
                        </motion.button>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default MusicDJ;
