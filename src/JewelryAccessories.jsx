import React from 'react';
import { motion } from 'framer-motion';

const JewelryAccessories = () => {
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
                    Your Bridal Jewels & Accessories
                </motion.h1>
                <motion.p
                    className="text-center text-lg sm:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    variants={itemVariants}
                >
                    Elevate your bridal ensemble with breathtaking jewelry and accessories. We help you choose pieces that perfectly complement your attire and sparkle with unforgettable elegance.
                </motion.p>

                {/* Exclusive Offer Section */}
                <motion.div
                    className="bg-yellow-400 p-6 sm:p-8 rounded-2xl shadow-2xl text-gray-900 text-center border border-yellow-500 mb-12 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    variants={itemVariants}
                >
                    <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 flex items-center justify-center gap-3">
                        <span className="text-red-600 animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                        </span>
                        Exclusive Offer!
                        <span className="text-red-600 animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </h3>
                    <p className="text-xl sm:text-2xl font-semibold mb-4">
                        Purchase your **wedding jewelry and accessories through us** and receive:
                    </p>
                    <p className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-6 drop-shadow-lg">
                        A Flat 5% Discount
                    </p>
                    <p className="text-xl sm:text-2xl font-semibold">
                        OR
                    </p>
                    <p className="text-4xl sm:text-5xl font-extrabold text-purple-800 mt-4 mb-6 drop-shadow-lg">
                        Complimentary Luxury Gifts!
                    </p>
                    <p className="text-lg text-gray-800 italic">
                        (Terms and conditions apply. Offer valid on selected partners and minimum purchase value.)
                    </p>
                </motion.div>

                {/* Section 1: Types of Bridal Jewelry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700" variants={itemVariants}>
                        <h3 className="text-3xl font-bold text-yellow-300 mb-4">The Essence of Indian Bridal Jewelry</h3>
                        <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                            From head to toe, Indian brides are adorned with magnificent pieces, each with its own significance:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                            <li>
                                <strong className="text-yellow-200">Necklaces:</strong> Choker, Rani Haar, multi-layered sets in gold, diamonds, Kundan, or Polki.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Earrings:</strong> Jhumkas, Chandbalis, studs, or elegant drops, often matching the necklace.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Bangles & Kadas:</strong> A stack of traditional bangles (chura) or ornate kadas, symbolizing prosperity.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Maang Tikka & Matha Patti:</strong> Forehead ornaments that frame the face beautifully.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Nath (Nose Ring):</strong> A classic bridal element, ranging from delicate studs to large, ornate rings.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Haath Phool:</strong> Hand harnesses that adorn the back of the hand and fingers.
                            </li>
                        </ul>
                        <p className="text-gray-400 text-sm mt-4">
                            We help you navigate through traditional and contemporary designs.
                        </p>
                    </motion.div>

                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700 flex items-center justify-center" variants={itemVariants}>
                        {/* Placeholder for an image of intricate Indian bridal jewelry set */}
                        <img
                            src="https://via.placeholder.com/600x400?text=Exquisite+Indian+Bridal+Jewelry" // Replace with actual image
                            alt="Exquisite Indian Bridal Jewelry"
                            className="rounded-xl shadow-lg border border-gray-600 w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                </div>

                {/* Section 2: Selecting Your Pieces */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700 flex items-center justify-center" variants={itemVariants}>
                        {/* Placeholder for an image of a hand adorned with bangles or a bride wearing accessories */}
                        <img
                            src="https://via.placeholder.com/600x400?text=Styling+Bridal+Accessories" // Replace with actual image
                            alt="Styling Bridal Accessories"
                            className="rounded-xl shadow-lg border border-gray-600 w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700" variants={itemVariants}>
                        <h3 className="text-3xl font-bold text-yellow-300 mb-4">Expert Guidance for Your Perfect Sparkle</h3>
                        <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                            Choosing wedding jewelry can be overwhelming. We simplify the process:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                            <li>
                                <strong className="text-yellow-200">Harmonize with Attire:</strong> We help you select jewelry that perfectly complements your bridal outfit's neckline, embroidery, and color.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Quality Assurance:</strong> We connect you with trusted jewelers renowned for their craftsmanship and authentic materials.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Budgeting & Value:</strong> Get advice on how to allocate your budget effectively for maximum impact and long-term value.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Styling Beyond the Wedding:</strong> Choose versatile pieces you can cherish and wear on future occasions.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Personalized Recommendations:</strong> Our experts offer tailored suggestions based on your personal style and family traditions.
                            </li>
                        </ul>
                        <p className="text-gray-400 text-sm mt-4">
                            Let us guide you to your dazzling dream pieces.
                        </p>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    className="mt-12 bg-purple-700 p-8 rounded-2xl shadow-2xl text-white text-center border border-purple-800"
                    variants={itemVariants}
                >
                    <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to adorn your wedding day with brilliance?</h3>
                    <p className="text-xl sm:text-2xl mb-6">
                        Contact us to explore our exclusive partnerships and unlock your special offer on bridal jewelry and accessories.
                    </p>
                    <a
                        href="/contact-us" // Replace with your actual contact page path
                        className="mt-8 inline-block px-10 py-4 bg-yellow-400 text-gray-900 rounded-full font-bold text-xl shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1"
                        target="_blank" rel="noopener noreferrer"
                    >
                        Claim Your Exclusive Offer
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default JewelryAccessories;