import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mandapDecorations = [
    {
        title: "Maharaja Mandap",
        description: "A regal mandap inspired by ancient palaces, featuring magnificent gold-plated pillars, intricate carvings, and rich traditional fabrics that exude royal grandeur.",
        image: "/Eventplanner/crystal-mandap-01.jpg",
        details: [
            "Hand-carved pillars with gold-leaf accents.",
            "Luxurious velvet and silk drapes in deep jewel tones like maroon and emerald.",
            "Traditional Indian motifs and detailing on all structural elements.",
            "Antique-style chandeliers and ambient golden lighting.",
            "Comfortable, low seating for the couple with plush cushions.",
            "Elaborate floral garlands and traditional adornments."
        ],
        usp: "Step into a world of unparalleled royal splendor, creating an opulent and unforgettable ceremony setting.",
        style: "Traditional, Regal, Opulent",
        colors: ["Gold", "Maroon", "Emerald Green", "Ivory"],
        materials: ["Gold-plated metal", "Carved wood", "Velvet", "Silk"]
    },
    {
        title: "Divine Lotus Mandap",
        description: "A spiritual and serene mandap designed with a magnificent lotus theme, featuring graceful petal structures and soft, ethereal lighting that creates a divine aura.",
        image: "/Eventplanner/lotus-shaped-mandap-dome.jpg",
        details: [
            "Large, blooming lotus structures forming the mandap's canopy or pillars.",
            "Soft pastel drapes in shades of pink, white, and lavender.",
            "Delicate floral arrangements of lotus flowers, roses, and jasmine.",
            "Subtle, warm LED lighting within the lotus petals for a glowing effect.",
            "Water features or floating candles for added tranquility.",
            "Seating designed to blend with the organic, serene aesthetic."
        ],
        usp: "Embrace a tranquil and sacred ambiance, symbolizing purity, beauty, and spiritual grace for your union.",
        style: "Spiritual, Ethereal, Serene",
        colors: ["Pastel Pink", "White", "Lavender", "Soft Gold"],
        materials: ["Fiberglass", "Soft fabric", "Fresh flowers", "LED lighting"]
    },
    {
        title: "Celestial Pearl Mandap",
        description: "A luxurious and enchanting mandap adorned with shimmering pearl-white drapes, twinkling starry lighting, and crystal elements for an otherworldly, magical ceremony.",
        image: "/Eventplanner/red-pearl-mandap.jpg",
        details: [
            "Flowing pearl-white and silver drapes with subtle sheen.",
            "Hundreds of suspended crystals and pearl strings creating a dazzling effect.",
            "Integrated fairy lights and LED constellations for a starry night illusion.",
            "Sleek, modern structural elements in silver or white.",
            "Delicate floral accents in white, silver, or light blue.",
            "Mirrored flooring to amplify the celestial glow."
        ],
        usp: "Exchange your vows under a canopy of stars and pearls, creating a truly magical and glamorous experience that will mesmerize your guests.",
        style: "Glamorous, Modern, Ethereal",
        colors: ["Pearl White", "Silver", "Icy Blue", "Crystal"],
        materials: ["Shimmer fabric", "Crystals", "LED lights", "Metal structure"]
    },
    {
        title: "Rustic Vineyard Mandap",
        description: "An earthy and charming mandap crafted from natural wood, draped with soft fabrics, and adorned with lush greenery and rustic florals, perfect for outdoor or farmhouse venues.",
        image: "/Eventplanner/rustic-mandap.jpg", // Placeholder
        details: [
            "Mandap structure made from reclaimed wood or natural branches.",
            "Loose, flowing fabrics like burlap, linen, or lace in earthy tones.",
            "Abundant use of eucalyptus, ferns, wildflowers, and pampas grass.",
            "Edison bulb string lights or lanterns for a warm glow.",
            "Seating with wooden benches or cushioned hay bales.",
            "Wine barrels or vintage crates as decorative elements."
        ],
        usp: "Infuse your ceremony with the organic beauty and laid-back charm of nature, creating a warm and inviting atmosphere.",
        style: "Rustic, Bohemian, Natural",
        colors: ["Wood Brown", "Sage Green", "Cream", "Terracotta"],
        materials: ["Natural wood", "Burlap", "Linen", "Wildflowers"]
    },
    {
        title: "Contemporary Geometric Mandap",
        description: "A sleek and artistic mandap design featuring bold geometric shapes, clean lines, and metallic finishes, ideal for modern and minimalist weddings.",
        image: "/Eventplanner/geometric-mandap.jpg", // Placeholder
        details: [
            "Metallic geometric structures (gold, silver, or black matte).",
            "Minimalist floral arrangements strategically placed within the geometry.",
            "Clean white or monochrome drapes.",
            "Uplighting and downlighting to highlight architectural forms.",
            "Acrylic elements for signage or decorative panels.",
            "Modern, structured seating for the couple."
        ],
        usp: "A statement-making mandap that combines modern artistry with traditional significance, perfect for the contemporary couple.",
        style: "Modern, Minimalist, Artistic",
        colors: ["White", "Black", "Gold", "Silver"],
        materials: ["Metal", "Acrylic", "Monochrome fabric", "Clean florals"]
    }
    // Add many more mandap designs here, expanding the data similarly.
];

const MandapDecoration = () => {
    const [selectedMandap, setSelectedMandap] = useState(null);

    const openModal = (mandap) => {
        setSelectedMandap(mandap);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedMandap(null);
        document.body.style.overflow = 'unset';
    };

    // Animation variants (reused from previous components for consistency)
    const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        },
    };

    const itemVariants = {
        hiddenLeft: { opacity: 0, x: -80 },
        visibleLeft: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
        hiddenRight: { opacity: 0, x: 80 },
        visibleRight: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
        imageHidden: { opacity: 0, scale: 0.8 },
        imageVisible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9, y: "0%" },
        visible: { opacity: 1, scale: 1, y: "0%", transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, scale: 0.9, y: "0%", transition: { duration: 0.3, ease: "easeIn" } }
    };

    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-20 min-h-screen font-sans overflow-hidden">
            <motion.h2
                className="text-5xl font-extrabold text-center text-yellow-400 mb-6 tracking-wide drop-shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Our Exclusive Mandap Designs
            </motion.h2>
            <motion.p
                className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto px-6 leading-relaxed"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                Discover our meticulously crafted mandaps, each a sacred space designed to perfection, blending traditional significance with breathtaking aesthetics for your cherished wedding ceremony.
            </motion.p>

            <div className="container mx-auto px-6 space-y-28">
                {mandapDecorations.map((mandap, index) => {
                    const isEven = index % 2 === 0; // Check if index is even for left image layout

                    return (
                        <motion.section
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-12 py-8 lg:py-12 px-0`}
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div
                                className={`w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 ${isEven ? 'md:order-1' : 'md:order-2'}`}
                                variants={itemVariants}
                                initial="imageHidden"
                                animate="imageVisible"
                                whileHover={{ scale: 1.03 }}
                            >
                                <img
                                    src={mandap.image}
                                    alt={mandap.title}
                                    className="w-full h-96 object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            </motion.div>

                            <div className={`w-full md:w-1/2 flex flex-col items-start text-left ${isEven ? 'md:order-2 pl-0 md:pl-12' : 'md:order-1 pr-0 md:pr-12'}`}>
                                <motion.h3
                                    className="text-4xl font-bold text-yellow-300 mb-4 leading-tight"
                                    variants={isEven ? itemVariants.hiddenLeft : itemVariants.hiddenRight}
                                    animate={isEven ? itemVariants.visibleLeft : itemVariants.visibleRight}
                                >
                                    {mandap.title}
                                </motion.h3>
                                <motion.p
                                    className="text-lg text-gray-300 mb-6 leading-relaxed"
                                    variants={isEven ? { ...itemVariants.hiddenLeft, transition: { delay: 0.1 } } : { ...itemVariants.hiddenRight, transition: { delay: 0.1 } }}
                                    animate={isEven ? itemVariants.visibleLeft : itemVariants.visibleRight}
                                >
                                    {mandap.description}
                                </motion.p>
                                <motion.button
                                    className="px-8 py-3 bg-yellow-500 text-black rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 text-lg"
                                    variants={isEven ? { ...itemVariants.hiddenLeft, transition: { delay: 0.2 } } : { ...itemVariants.hiddenRight, transition: { delay: 0.2 } }}
                                    animate={isEven ? itemVariants.visibleLeft : itemVariants.visibleRight}
                                    onClick={() => openModal(mandap)}
                                >
                                    View Details
                                </motion.button>
                            </div>
                        </motion.section>
                    );
                })}
            </div>

            <AnimatePresence>
                {selectedMandap && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 p-4 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="bg-gray-900 text-white rounded-2xl max-w-3xl w-full p-8 relative shadow-2xl border border-yellow-600 my-8 overflow-y-auto max-h-[90vh]"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white text-4xl font-light leading-none transition-colors duration-300"
                            >
                                &times;
                            </button>
                            <h2 className="text-4xl font-extrabold text-yellow-400 mb-4 text-center pb-4 border-b border-gray-700">
                                {selectedMandap.title}
                            </h2>
                            <motion.img
                                src={selectedMandap.image}
                                alt={selectedMandap.title}
                                className="mt-6 w-full h-80 object-cover rounded-lg border border-gray-700 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            />
                            <p className="mt-6 text-xl text-gray-300 leading-relaxed">{selectedMandap.description}</p>

                            {selectedMandap.details && (
                                <div className="mt-6">
                                    <h3 className="text-2xl font-bold text-yellow-300 mb-3">Key Elements & Features:</h3>
                                    <ul className="list-disc list-inside text-lg text-gray-400 space-y-2">
                                        {selectedMandap.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {selectedMandap.style && (
                                <div className="mt-6">
                                    <h3 className="text-xl font-bold text-yellow-300 mb-2">Style Profile:</h3>
                                    <p className="text-lg text-gray-400">{selectedMandap.style}</p>
                                </div>
                            )}

                            {selectedMandap.colors && (
                                <div className="mt-4">
                                    <h3 className="text-xl font-bold text-yellow-300 mb-2">Key Colors:</h3>
                                    <p className="text-lg text-gray-400">{selectedMandap.colors.join(", ")}</p>
                                </div>
                            )}

                            {selectedMandap.materials && (
                                <div className="mt-4 pt-4 border-t border-gray-700">
                                    <h3 className="text-xl font-bold text-yellow-300 mb-2">Primary Materials:</h3>
                                    <p className="text-lg text-gray-400">{selectedMandap.materials.join(", ")}</p>
                                </div>
                            )}

                            {selectedMandap.usp && (
                                <p className="mt-6 text-xl font-semibold text-yellow-200 border-t border-gray-700 pt-4">
                                    **Our Unique Touch**: {selectedMandap.usp}
                                </p>
                            )}

                            <p className="mt-8 text-center text-lg text-gray-400">
                                Envision your sacred ceremony in one of these magnificent mandaps?
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                                <button
                                    onClick={closeModal}
                                    className="px-8 py-3 bg-yellow-500 text-black rounded-full font-bold shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 text-lg tracking-wide"
                                >
                                    Explore More Mandap Designs
                                </button>
                                <a
                                    href="/contact-us"
                                    className="px-8 py-3 bg-white text-black rounded-full font-bold shadow-lg hover:bg-gray-200 transition transform hover:-translate-y-1 text-lg text-center tracking-wide"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    Book a Mandap Consultation
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MandapDecoration;