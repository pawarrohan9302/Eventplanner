import React from 'react';
import { motion } from 'framer-motion';

const BridalDresses = () => {
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
                    Your Dream Bridal Ensemble
                </motion.h1>
                <motion.p
                    className="text-center text-lg sm:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    variants={itemVariants}
                >
                    Discover the perfect bridal dress that encapsulates your unique style and vision for your special day. From timeless classics to modern marvels, find the attire that tells your love story.
                </motion.p>

                {/* Section 1: Bridal Attire Styles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700" variants={itemVariants}>
                        <h3 className="text-3xl font-bold text-yellow-300 mb-4">Iconic Indian Bridal Styles</h3>
                        <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                            Indian bridal wear is a vibrant spectrum of tradition and artistry. Here are some of the most cherished styles:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                            <li>
                                <strong className="text-yellow-200">Lehenga Choli:</strong> The quintessential bridal attire, featuring a voluminous skirt, a fitted blouse, and a gracefully draped dupatta. Perfect for grand ceremonies.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Bridal Saree:</strong> A timeless choice, offering unparalleled grace and elegance. Available in myriad fabrics and embellishments, from Kanjeevaram to Banarasi.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Anarkali Suit:</strong> A floor-length, flowing gown-like silhouette, ideal for pre-wedding functions or a more contemporary bridal look.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Gowns & Fusion Wear:</strong> For the modern bride, embracing Western silhouettes with Indian embroidery or fusion elements creates a unique statement.
                            </li>
                        </ul>
                        <p className="text-gray-400 text-sm mt-4">
                            Each style can be customized with various embroideries like Zardozi, Aari, Gota Patti, and Kundan work.
                        </p>
                    </motion.div>

                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700 flex items-center justify-center" variants={itemVariants}>
                        {/* Placeholder for an image of a beautifully embroidered bridal lehenga */}
                        <img
                            src="https://via.placeholder.com/600x400?text=Exquisite+Bridal+Lehenga" // Replace with actual image
                            alt="Exquisite Indian Bridal Lehenga"
                            className="rounded-xl shadow-lg border border-gray-600 w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                </div>

                {/* Section 2: Choosing Your Dress */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700 flex items-center justify-center" variants={itemVariants}>
                        {/* Placeholder for an image of a bride at a fitting or choosing fabrics */}
                        <img
                            src="https://via.placeholder.com/600x400?text=Bridal+Consultation" // Replace with actual image
                            alt="Bridal Consultation"
                            className="rounded-xl shadow-lg border border-gray-600 w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                    <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700" variants={itemVariants}>
                        <h3 className="text-3xl font-bold text-yellow-300 mb-4">Finding Your Perfect Match</h3>
                        <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                            The journey to your dream dress is as special as the wedding itself. Consider these aspects:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                            <li>
                                <strong className="text-yellow-200">Start Early:</strong> Begin your search 6-9 months before your wedding to allow for design, production, and fittings.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Research & Inspiration:</strong> Explore different designers, collections, and styles online. Create a mood board to narrow down your preferences.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Budget Allocation:</strong> Determine a realistic budget for your bridal attire, including accessories and alterations.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Consultation & Fittings:</strong> Schedule appointments with reputable bridal boutiques. Be open to trying different silhouettes, and trust the experts during fittings.
                            </li>
                            <li>
                                <strong className="text-yellow-200">Comfort & Movement:</strong> Ensure your dress allows for comfortable movement, as you'll be wearing it for long hours.
                            </li>
                        </ul>
                        <p className="text-gray-400 text-sm mt-4">
                            We can connect you with top bridal designers and stylists in India.
                        </p>
                    </motion.div>
                </div>

                {/* Section 3: Luxury Fabrics & Embellishments */}
                <motion.div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700 mb-12" variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-yellow-300 mb-4 text-center">Luxurious Fabrics & Exquisite Embellishments</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-gray-300 text-lg">
                        <div>
                            <h4 className="font-semibold text-yellow-200 mb-2">Fabrics:</h4>
                            <p>Silk (Raw, Tussar, Banarasi), Velvet, Georgette, Organza, Net, Chiffon.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-yellow-200 mb-2">Embellishments:</h4>
                            <p>Zardozi, Aari, Gota Patti, Dabka, Resham, Mirror Work, Sequins, Kundan.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-yellow-200 mb-2">Details:</h4>
                            <p>Intricate embroidery, handcrafted motifs, crystal work, pearl detailing, custom drapes.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="mt-12 bg-yellow-400 p-8 rounded-2xl shadow-2xl text-gray-900 text-center border border-yellow-500"
                    variants={itemVariants}
                >
                    <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to find your bridal masterpiece?</h3>
                    <p className="text-xl sm:text-2xl mb-6">
                        Connect with our expert stylists and designers to begin your bespoke bridal journey.
                    </p>
                    <a
                        href="/contact-us" // Replace with your actual contact page path
                        className="mt-8 inline-block px-10 py-4 bg-purple-700 text-white rounded-full font-bold text-xl shadow-lg hover:bg-purple-800 transition transform hover:-translate-y-1"
                        target="_blank" rel="noopener noreferrer"
                    >
                        Schedule a Bridal Consultation
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default BridalDresses;