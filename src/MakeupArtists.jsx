import React from 'react';
import { motion } from 'framer-motion';

const MakeupArtists = () => {
    // Animation variants for Framer Motion
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
                <motion.h1
                    className="text-4xl sm:text-5xl font-extrabold text-center text-yellow-400 mb-4 tracking-tight"
                    variants={itemVariants}
                >
                    Elite Bridal Makeup Artists
                </motion.h1>
                <motion.p
                    className="text-center text-lg sm:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    variants={itemVariants}
                >
                    Entrust your bridal glow to the hands of highly skilled and renowned makeup artists. We partner with the best to ensure your wedding day look is nothing short of perfection.
                </motion.p>

                {/* Section 1: The Art of Bridal Makeup */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700" variants={itemVariants}>
                        <h3 className="text-3xl font-bold text-yellow-300 mb-4">Crafting Your Signature Look</h3>
                        <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                            Indian bridal makeup is a beautiful blend of traditional artistry and modern finesse. Our artists are adept at creating a diverse range of looks:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                            <li>
                                <strong className="text-yellow-200">Traditional Glam:</strong> Rich hues, intricate eye makeup, and bold lips that perfectly complement your vibrant Indian bridal attire.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Contemporary Chic:</strong> Softer tones, subtle contouring, and a focus on glowing skin for a modern, elegant appeal.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Minimalist Sophistication:</strong> "No-makeup" makeup that enhances your natural features for an understated yet polished look.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Regional Specializations:</strong> Artists skilled in specific regional bridal looks, from South Indian to Punjabi, Bengali, and more.
                            </li>
                        </ul>
                        <p className="text-gray-400 text-sm mt-4">
                            Each look is personalized to your skin tone, facial features, and wedding theme.
                        </p>
                    </motion.div>

                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700 flex items-center justify-center" variants={itemVariants}>
                        {/* Placeholder for an image of a beautifully made-up Indian bride */}
                        <img
                            src="https://via.placeholder.com/600x400?text=Stunning+Bridal+Makeup" // Replace with actual image
                            alt="Stunning Indian Bridal Makeup"
                            className="rounded-xl shadow-lg border border-gray-600 w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                </div>

                {/* Section 2: The Bridal Makeup Journey */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700 flex items-center justify-center" variants={itemVariants}>
                        {/* Placeholder for an image of a makeup artist working on a bride */}
                        <img
                            src="https://via.placeholder.com/600x400?text=Makeup+Artist+at+Work" // Replace with actual image
                            alt="Makeup Artist at Work"
                            className="rounded-xl shadow-lg border border-gray-600 w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700" variants={itemVariants}>
                        <h3 className="text-3xl font-bold text-yellow-300 mb-4">Your Path to Flawless Beauty</h3>
                        <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                            We guide you through the process of securing your ideal bridal makeup artist:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                            <li>
                                <strong className="text-yellow-200">Curated Selection:</strong> We recommend top-tier makeup artists based on their expertise, portfolio, and understanding of diverse bridal needs.
                            </li>
                            <li>
                                <strong className="text-yellow-200">The Essential Trial:</strong> A pre-wedding makeup trial is crucial. It's your opportunity to finalize your look, discuss preferences, and ensure comfort.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Skin Prep Guidance:</strong> Our artists often provide advice on pre-wedding skincare regimes to ensure your canvas is perfectly prepared for makeup.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Long-Lasting Techniques:</strong> For long Indian wedding ceremonies and multiple events, artists use specialized techniques and products for durability.
                            </li>
                            <li>
                                <strong className="text-yellow-200">On-Site Services:</strong> Many artists offer convenient on-site services, bringing their expertise directly to your venue or home.
                            </li>
                        </ul>
                        <p className="text-gray-400 text-sm mt-4">
                            We ensure a seamless and stress-free experience for your bridal beauty.
                        </p>
                    </motion.div>
                </div>

                {/* Section 3: Why Choose Our Recommended Artists */}
                <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700 mb-12" variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-yellow-300 mb-4 text-center">Why Our Artists Stand Out</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-gray-300 text-lg">
                        <div>
                            <h4 className="font-semibold text-yellow-200 mb-2">Expertise:</h4>
                            <p>Years of experience with diverse Indian bridal looks and skin types.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-yellow-200 mb-2">Premium Products:</h4>
                            <p>Use of high-quality, long-lasting, and skin-friendly international and professional-grade makeup.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-yellow-200 mb-2">Personalized Approach:</h4>
                            <p>Dedicated consultations to understand your vision, preferences, and comfort levels.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="mt-12 bg-yellow-400 p-8 rounded-2xl shadow-2xl text-gray-900 text-center border border-yellow-500"
                    variants={itemVariants}
                >
                    <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to book your bridal beauty expert?</h3>
                    <p className="text-xl sm:text-2xl mb-6">
                        Contact us today for a personalized consultation and connect with your perfect wedding makeup artist.
                    </p>
                    <a
                        href="/contact-us" // Replace with your actual contact page path
                        className="mt-8 inline-block px-10 py-4 bg-purple-700 text-white rounded-full font-bold text-xl shadow-lg hover:bg-purple-800 transition transform hover:-translate-y-1"
                        target="_blank" rel="noopener noreferrer"
                    >
                        Find Your Bridal Artist
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default MakeupArtists;