import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Floral designs data - Expanded with more details
const floralDesigns = [
    {
        title: "Royal Rose Arch",
        description: "A grand, opulent entrance adorned with lush, velvety red roses and cascading golden drapes, symbolizing eternal love and regal celebration.",
        image: "/Eventplanner/floral canapy.jpg",
        details: [
            "Thousands of fresh, premium red and deep crimson roses.",
            "Hand-draped silk and velvet fabrics in gold and maroon.",
            "Intricate carving details on the arch structure.",
            "Subtle uplighting to enhance texture and color.",
            "Can be customized with specific rose varieties or additional floral accents."
        ],
        usp: "Creates a breathtaking, majestic first impression for your guests, setting the tone for a truly royal event.",
        blooms: ["Red Roses", "Crimson Roses", "Gold Leaf Accents"],
        style: "Classic, Opulent, Grand"
    },
    {
        title: "Blossom Canopy of Dreams",
        description: "A dreamy, ethereal floral canopy featuring an abundance of fresh orchids, delicate jasmine, and twinkling fairy lights for a truly magical ambiance.",
        image: "/Eventplanner/blossomconopyimage.jpg",
        details: [
            "Hundreds of pristine white and purple orchids with their natural cascading beauty.",
            "Fragrant jasmine strings intertwined for an intoxicating aroma.",
            "Soft, warm fairy lights woven throughout the canopy for a star-lit effect.",
            "Can be adapted for mandaps, dining areas, or walkway coverages.",
            "Optional crystal or glass elements for added sparkle."
        ],
        usp: "Envelops your celebration in a romantic, whimsical glow, perfect for creating an intimate and enchanting atmosphere.",
        blooms: ["White Orchids", "Purple Orchids", "Jasmine", "Baby's Breath"],
        style: "Ethereal, Romantic, Whimsical"
    },
    {
        title: "Golden Petal Pathway",
        description: "An elegant, glittering walkway covered with shimmering golden petals, flanked by tall floral chandeliers and illuminated by soft, romantic light.",
        image: "/Eventplanner/golden petal pathway.jpg", // ✅ Image path updated
        details: [
            "Thousands of meticulously placed golden petals for a luxurious carpet effect.",
            "Tall, ornate pedestals topped with grand floral arrangements (e.g., lilies, hydrangeas).",
            "Crystal and gold-accented chandeliers suspended above the pathway.",
            "Strategic downlighting to make the petals sparkle.",
            "Ideal for bridal entrances, aisle ways, or transition zones."
        ],
        usp: "Transforms a simple path into a radiant journey, providing stunning photo opportunities and an unforgettable entrance.",
        blooms: ["White Lilies", "Hydrangeas", "Tulips", "Gold-sprayed Greens"],
        style: "Glamorous, Elegant, Luxurious"
    },
    {
        title: "Lush Greenery Wall with Accents",
        description: "A vibrant living wall of assorted lush greenery, subtly enhanced with pops of white florals or elegant lighting, perfect for photo backdrops or dividing spaces.",
        image: "/Eventplanner/greenery-wall.jpg", // Placeholder
        details: [
            "Variety of realistic artificial and/or fresh foliage (e.g., ferns, eucalyptus, ivy).",
            "Customizable with specific floral clusters (roses, peonies) or LED strip lighting.",
            "Ideal for photo booths, welcome areas, or as a stage backdrop.",
            "Available in various sizes to fit your venue needs.",
            "Can be paired with custom neon signs or monograms."
        ],
        usp: "Brings the freshness of nature indoors, offering a versatile and captivating backdrop for memorable moments.",
        blooms: ["Eucalyptus", "Ferns", "White Roses", "Hydrangeas"],
        style: "Modern, Natural, Chic"
    },
    {
        title: "Cascading Orchid Centerpieces",
        description: "Tall, dramatic centerpieces featuring elegant cascading orchids and crystal elements, creating an air of sophistication and grandeur for dining tables.",
        image: "/Eventplanner/orchid-centerpiece.jpg", // Placeholder
        details: [
            "Long-stemmed Phalaenopsis orchids in white or purple.",
            "Clear crystal stands or suspended glass vases for a floating effect.",
            "Subtle floral accents at the base (e.g., hydrangeas, moss).",
            "Integrated LED lighting within the centerpiece for evening ambiance.",
            "Available in various heights to suit different table layouts."
        ],
        usp: "Adds a touch of unparalleled luxury and vertical elegance to your reception tables, captivating every guest.",
        blooms: ["Phalaenopsis Orchids", "Cymbidium Orchids", "Hydrangeas"],
        style: "Sophisticated, Dramatic, Elegant"
    }
    // Add many more floral designs here, expanding the data similarly.
];

const FloralDesign = () => {
    const [selectedDesign, setSelectedDesign] = useState(null);

    const openModal = (design) => {
        setSelectedDesign(design);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setSelectedDesign(null);
        document.body.style.overflow = 'unset'; // Re-enable scrolling
    };

    // Animation variants for the content sections
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

    // Animation variants for text and image within sections
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
                Our Signature Floral Designs
            </motion.h2>
            <motion.p
                className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto px-6 leading-relaxed"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                From breathtaking arches to delicate centerpieces, our floral arrangements are crafted with fresh, premium blooms and artistic flair, adding elegance and charm to every facet of your celebration.
            </motion.p>

            <div className="container mx-auto px-6 space-y-28">
                {floralDesigns.map((design, index) => {
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
                                    src={design.image}
                                    alt={design.title}
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
                                    {design.title}
                                </motion.h3>
                                <motion.p
                                    className="text-lg text-gray-300 mb-6 leading-relaxed"
                                    variants={isEven ? { ...itemVariants.hiddenLeft, transition: { delay: 0.1 } } : { ...itemVariants.hiddenRight, transition: { delay: 0.1 } }}
                                    animate={isEven ? itemVariants.visibleLeft : itemVariants.visibleRight}
                                >
                                    {design.description}
                                </motion.p>
                                <motion.button
                                    className="px-8 py-3 bg-yellow-500 text-black rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 text-lg"
                                    variants={isEven ? { ...itemVariants.hiddenLeft, transition: { delay: 0.2 } } : { ...itemVariants.hiddenRight, transition: { delay: 0.2 } }}
                                    animate={isEven ? itemVariants.visibleLeft : itemVariants.visibleRight}
                                    onClick={() => openModal(design)}
                                >
                                    View Details
                                </motion.button>
                            </div>
                        </motion.section>
                    );
                })}
            </div>

            <AnimatePresence>
                {selectedDesign && (
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
                                {selectedDesign.title}
                            </h2>
                            <motion.img
                                src={selectedDesign.image}
                                alt={selectedDesign.title}
                                className="mt-6 w-full h-80 object-cover rounded-lg border border-gray-700 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            />
                            <p className="mt-6 text-xl text-gray-300 leading-relaxed">{selectedDesign.description}</p>

                            {selectedDesign.details && (
                                <div className="mt-6">
                                    <h3 className="text-2xl font-bold text-yellow-300 mb-3">Key Floral Elements & Features:</h3>
                                    <ul className="list-disc list-inside text-lg text-gray-400 space-y-2">
                                        {selectedDesign.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {selectedDesign.blooms && (
                                <div className="mt-6">
                                    <h3 className="text-xl font-bold text-yellow-300 mb-2">Primary Blooms:</h3>
                                    <p className="text-lg text-gray-400">{selectedDesign.blooms.join(", ")}</p>
                                </div>
                            )}

                            {selectedDesign.style && (
                                <div className="mt-4 pt-4 border-t border-gray-700">
                                    <h3 className="text-xl font-bold text-yellow-300 mb-2">Style Profile:</h3>
                                    <p className="text-lg text-gray-400">{selectedDesign.style}</p>
                                </div>
                            )}

                            {selectedDesign.usp && (
                                <p className="mt-6 text-xl font-semibold text-yellow-200 border-t border-gray-700 pt-4">
                                    **Our Unique Touch**: {selectedDesign.usp}
                                </p>
                            )}

                            <p className="mt-8 text-center text-lg text-gray-400">
                                Ready to infuse your celebration with these exquisite floral designs?
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                                <button
                                    onClick={closeModal}
                                    className="px-8 py-3 bg-yellow-500 text-black rounded-full font-bold shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 text-lg tracking-wide"
                                >
                                    Explore More Floral Designs
                                </button>
                                <a
                                    href="/contact-us" // Replace with your actual contact page path
                                    className="px-8 py-3 bg-white text-black rounded-full font-bold shadow-lg hover:bg-gray-200 transition transform hover:-translate-y-1 text-lg text-center tracking-wide"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    Request a Floral Consultation
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloralDesign;