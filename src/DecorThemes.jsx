import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Decor themes data - Extended for demonstration
const themes = [
    {
        title: "Royal Floral Design",
        description: "Experience the grandeur of a luxurious floral theme with exquisite flower arrangements, artistic elegance, and a touch of regal charm. Perfect for couples dreaming of a fairy-tale wedding.",
        image: "/Eventplanner/royalrosh.png",
        details: [
            "Lush arrangements of exotic flowers like orchids, roses, and lilies.",
            "Elegant drapery in rich fabrics such as velvet and silk.",
            "Grand entrance arches adorned with floral cascades.",
            "Ambient lighting to enhance the royal feel.",
            "Customized floral pathways and stage backdrops.",
            "Personalized floral motifs on event stationery."
        ],
        usp: "Transform your venue into a palatial garden with our signature floral artistry, unparalleled in detail and scale.",
        mood: "Opulent, Classic, Grand",
        colors: ["Gold", "Deep Red", "Cream", "Emerald Green"]
    },
    {
        title: "Celestial Wedding Theme",
        description: "A mesmerizing theme with cosmic-inspired lighting, dreamy floral arrangements, and ethereal elements that create an otherworldly ambiance. Ideal for a magical, starlit celebration.",
        image: "/Eventplanner/celestialweddingtheme.jpg",
        details: [
            "Starry night projections and dynamic LED constellations across the venue.",
            "Hanging crystal elements, meteor-like installations, and delicate fairy lights.",
            "Soft, flowing fabrics in muted celestial tones (deep blues, purples, silvers).",
            "Delicate floral arrangements with glowing accents and bioluminescent effects.",
            "Illuminated pathways and moon-inspired decor elements.",
            "Personalized cosmic motifs for backdrops and photo booths."
        ],
        usp: "Let your love story shine under a canopy of stars, creating a truly magical and unforgettable experience for all.",
        mood: "Magical, Dreamy, Ethereal",
        colors: ["Midnight Blue", "Silver", "Lavender", "Starlight White"]
    },
    {
        title: "Majestic Mandap Decoration",
        description: "Step into a majestic wedding with intricately designed mandaps featuring premium drapes, shimmering gold embellishments, and traditional motifs. A perfect blend of tradition and opulence.",
        image: "/Eventplanner/majestic mandap decoration.jpg",
        details: [
            "Hand-carved wooden mandap structures with intricate detailing.",
            "Rich fabrics in traditional colors with elaborate embroidery and zardozi work.",
            "Glimmering gold accents and bespoke crystal chandeliers.",
            "Comfortable and aesthetically pleasing seating arrangements for the couple and priests.",
            "Traditional floral garlands, sacred elements, and auspicious decor.",
            "Integrated sound and lighting design for ceremonies."
        ],
        usp: "Our mandaps are not merely structures; they are sacred spaces designed with cultural authenticity and breathtaking beauty.",
        mood: "Traditional, Sacred, Luxurious",
        colors: ["Maroon", "Gold", "Ivory", "Bronze"]
    },
    {
        title: "Bohemian Rhapsody",
        description: "A free-spirited and artistic theme featuring natural textures, earthy tones, macrame, and an abundance of relaxed, flowing fabrics.",
        image: "/Eventplanner/bohemian-rhapsody.jpg", // Placeholder
        details: [
            "Macrame hangings and dreamcatcher installations.",
            "Low seating arrangements with floor cushions and rugs.",
            "Earthy color palette: terracotta, sage, ivory, natural wood.",
            "Abundant pampas grass, dried florals, and wild greenery.",
            "Warm string lights and hurricane lamps.",
            "Personalized signage on repurposed wood."
        ],
        usp: "Embrace a relaxed yet elegant vibe, celebrating love with artistic freedom and natural beauty.",
        mood: "Relaxed, Artistic, Free-spirited",
        colors: ["Terracotta", "Sage Green", "Ivory", "Brown"]
    },
    {
        title: "Emerald Elegance & Gold",
        description: "A sophisticated theme combining the richness of emerald green with luxurious gold accents, creating an ambiance of timeless glamour.",
        image: "/Eventplanner/emerald-elegance.jpg", // Placeholder
        details: [
            "Deep emerald green velvet drapes and linens.",
            "Polished gold geometric accents and metallic tableware.",
            "White and cream floral arrangements with touches of gold leaves.",
            "Crystal chandeliers casting a soft, warm glow.",
            "Mirrored surfaces to amplify light and space.",
            "Custom emerald and gold stationery suite."
        ],
        usp: "Exquisite sophistication, perfect for couples seeking a truly glamorous and high-end celebration.",
        mood: "Glamorous, Sophisticated, Luxurious",
        colors: ["Emerald Green", "Gold", "Cream", "Black"]
    },
    {
        title: "Vintage Grandeur",
        description: "Transport your guests to a bygone era with antique furniture, lace, pearls, and soft, nostalgic lighting for a celebration steeped in history and romance.",
        image: "/Eventplanner/vintage-grandeur.jpg", // Placeholder
        details: [
            "Ornate vintage mirrors and classic chandeliers.",
            "Lace tablecloths, antique china, and crystal glassware.",
            "Soft, diffused lighting with candelabras and fairy lights.",
            "Floral arrangements with classic roses, peonies, and hydrangeas.",
            "Repurposed antique props like typewriters, gramophones, and trunks.",
            "Personalized vintage-style invitations and favors."
        ],
        usp: "A timeless and enchanting atmosphere, weaving the charm of the past into your present celebration.",
        mood: "Romantic, Nostalgic, Classic",
        colors: ["Pastel Pink", "Ivory", "Gold", "Antique White"]
    }
];

const DecorThemes = () => {
    const [selectedTheme, setSelectedTheme] = useState(null);

    const openModal = (theme) => {
        setSelectedTheme(theme);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedTheme(null);
        document.body.style.overflow = 'unset';
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
                staggerChildren: 0.2 // Reduced stagger for a slightly faster reveal
            }
        },
    };

    // Animation variants for text and image within sections
    const itemVariants = {
        hiddenLeft: { opacity: 0, x: -80 }, // Increased x for more prominent slide-in
        visibleLeft: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
        hiddenRight: { opacity: 0, x: 80 }, // Increased x for more prominent slide-in
        visibleRight: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
        imageHidden: { opacity: 0, scale: 0.8 },
        imageVisible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } } // Slightly longer image animation
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9, y: "0%" }, // Start from current Y, not -50% for smoother feel
        visible: { opacity: 1, scale: 1, y: "0%", transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, scale: 0.9, y: "0%", transition: { duration: 0.3, ease: "easeIn" } }
    };

    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-20 min-h-screen font-sans overflow-hidden"> {/* Added overflow-hidden to prevent horizontal scroll from animations */}
            <motion.h2
                className="text-5xl font-extrabold text-center text-yellow-400 mb-6 tracking-wide drop-shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Discover Your Dream Wedding Decor Theme
            </motion.h2>
            <motion.p
                className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto px-6 leading-relaxed"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                Immerse yourself in our curated collection of **over 50 exquisite decor themes**, each a masterpiece designed to transform your wedding into an unforgettable celebration. From classic grandeur to modern minimalism, find the perfect aesthetic that resonates with your unique love story.
            </motion.p>

            <div className="container mx-auto px-6 space-y-28"> {/* Increased vertical space between sections further */}
                {themes.map((theme, index) => {
                    const isEven = index % 2 === 0;

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
                                whileHover={{ scale: 1.03 }} // Subtle scale on hover
                            >
                                <img
                                    src={theme.image}
                                    alt={theme.title}
                                    className="w-full h-96 object-cover" // Increased image height
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div> {/* Slightly stronger gradient */}
                            </motion.div>

                            <div className={`w-full md:w-1/2 flex flex-col items-start text-left ${isEven ? 'md:order-2 pl-0 md:pl-12' : 'md:order-1 pr-0 md:pr-12'}`}> {/* Adjusted padding based on order */}
                                <motion.h3
                                    className="text-4xl font-bold text-yellow-300 mb-4 leading-tight"
                                    variants={isEven ? itemVariants.hiddenLeft : itemVariants.hiddenRight}
                                    animate={isEven ? itemVariants.visibleLeft : itemVariants.visibleRight}
                                >
                                    {theme.title}
                                </motion.h3>
                                <motion.p
                                    className="text-lg text-gray-300 mb-6 leading-relaxed"
                                    variants={isEven ? { ...itemVariants.hiddenLeft, transition: { delay: 0.1 } } : { ...itemVariants.hiddenRight, transition: { delay: 0.1 } }}
                                    animate={isEven ? itemVariants.visibleLeft : itemVariants.visibleRight}
                                >
                                    {theme.description}
                                </motion.p>
                                <motion.button
                                    className="px-8 py-3 bg-yellow-500 text-black rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 text-lg"
                                    variants={isEven ? { ...itemVariants.hiddenLeft, transition: { delay: 0.2 } } : { ...itemVariants.hiddenRight, transition: { delay: 0.2 } }}
                                    animate={isEven ? itemVariants.visibleLeft : itemVariants.visibleRight}
                                    onClick={() => openModal(theme)}
                                >
                                    View Details
                                </motion.button>
                            </div>
                        </motion.section>
                    );
                })}
            </div>

            <AnimatePresence>
                {selectedTheme && (
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
                                {selectedTheme.title}
                            </h2>
                            <motion.img
                                src={selectedTheme.image}
                                alt={selectedTheme.title}
                                className="mt-6 w-full h-80 object-cover rounded-lg border border-gray-700 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            />
                            <p className="mt-6 text-xl text-gray-300 leading-relaxed">{selectedTheme.description}</p>

                            {selectedTheme.details && (
                                <div className="mt-6">
                                    <h3 className="text-2xl font-bold text-yellow-300 mb-3">Key Elements & Features:</h3>
                                    <ul className="list-disc list-inside text-lg text-gray-400 space-y-2">
                                        {selectedTheme.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {selectedTheme.mood && selectedTheme.colors && (
                                <div className="mt-6 pt-4 border-t border-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-yellow-300 mb-2">Mood:</h3>
                                        <p className="text-lg text-gray-400">{selectedTheme.mood}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-yellow-300 mb-2">Key Colors:</h3>
                                        <p className="text-lg text-gray-400">{selectedTheme.colors.join(", ")}</p>
                                    </div>
                                </div>
                            )}

                            {selectedTheme.usp && (
                                <p className="mt-6 text-xl font-semibold text-yellow-200 border-t border-gray-700 pt-4">
                                    **Our Unique Touch**: {selectedTheme.usp}
                                </p>
                            )}

                            <p className="mt-8 text-center text-lg text-gray-400">
                                Inspired? Let's discuss how we can bring this vision to life for your special day!
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                                <button
                                    onClick={closeModal}
                                    className="px-8 py-3 bg-yellow-500 text-black rounded-full font-bold shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 text-lg tracking-wide"
                                >
                                    Continue Exploring Themes
                                </button>
                                <a
                                    href="/contact-us"
                                    className="px-8 py-3 bg-white text-black rounded-full font-bold shadow-lg hover:bg-gray-200 transition transform hover:-translate-y-1 text-lg text-center tracking-wide"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    Book a Personalized Consultation
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DecorThemes;