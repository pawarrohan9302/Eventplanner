import React, { useState, useEffect } from "react"; // Import useEffect
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaGlobe } from "react-icons/fa";
import { useLocation } from "react-router-dom"; // Import useLocation

const AboutUs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get current location

    // Effect to open modal automatically if routed to /about-us
    useEffect(() => {
        if (location.pathname === "/about-us") {
            setIsOpen(true);
        }
    }, [location.pathname]); // Re-run if location changes

    // Stop body scrolling when the modal is open
    useEffect(() => { // Changed to useEffect from React.useEffect
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset'; // Clean up on unmount
        };
    }, [isOpen]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 sm:p-8 relative overflow-hidden">
            {/* Background elements for visual interest */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>

            {/* Main content section - A sleek card introducing the company */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-2xl shadow-3xl border border-gray-700 p-8 max-w-3xl w-full text-center relative z-10 hover:shadow-yellow-500/20 transition-shadow duration-500"
            >
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-4 animate-fadeInUp">
                    Welcome to WeddingWonders ✨
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                    At WeddingWonders, we believe every love story deserves a magical beginning. We're dedicated to transforming your dream wedding into a flawless reality with our comprehensive planning tools, trusted vendor network, and inspiring decor ideas.
                </p>
                {/* This button will still work if someone directly navigates to /about-us and closes the modal,
                    allowing them to reopen it from the page itself. */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold rounded-full shadow-lg hover:shadow-yellow-400/40 transform hover:scale-105 transition-all duration-300 ease-in-out text-xl tracking-wide uppercase"
                >
                    Discover Our Story
                </button>
            </motion.div>


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-xl z-50 p-4"
                        onClick={() => setIsOpen(false)} // Close when clicking on the overlay
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-3xl border border-yellow-700 max-w-4xl w-full text-center relative overflow-hidden transform-gpu"
                            onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing the modal
                            style={{
                                backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url('https://source.unsplash.com/1200x800/?wedding-decor,lights')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundBlendMode: 'multiply'
                            }}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Close"
                                className="absolute top-5 right-5 text-yellow-400 hover:text-white transition-colors duration-300 text-3xl font-light leading-none z-10"
                            >
                                ×
                            </button>

                            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-6 drop-shadow-lg animate-fadeIn">
                                Our Story: Crafting Unforgettable Moments
                            </h1>

                            <div className="grid md:grid-cols-2 gap-8 text-left z-10 relative">
                                <div className="text-gray-200 space-y-4">
                                    <p>
                                        WeddingWonders was born from a passion for celebrating love and simplifying the intricate journey of wedding planning. We understand that organizing a wedding can be overwhelming, filled with endless choices and decisions. Our mission is to transform this complexity into an exciting, enjoyable, and effortless experience for every couple.
                                    </p>
                                    <p>
                                        From stunning decor themes and unique floral arrangements to a curated network of top-tier vendors like photographers, caterers, and venues, we provide all the resources you need. Our intuitive planning tools, including budget planners and guest list managers, ensure every detail is meticulously handled.
                                    </p>
                                </div>
                                <div>
                                    <img
                                        src="https://source.unsplash.com/800x600/?indian-wedding,couple-portrait"
                                        alt="A joyful wedding couple"
                                        className="w-full h-auto rounded-xl shadow-xl border border-gray-700 object-cover transform hover:scale-102 transition-transform duration-300"
                                    />
                                    <p className="mt-4 text-sm text-gray-400 italic">
                                        "Every moment, beautifully crafted."
                                    </p>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className="mt-10 pt-6 border-t border-gray-700 bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-md rounded-xl p-6 shadow-inner-lg">
                                <h2 className="text-3xl font-bold text-yellow-400 mb-4 animate-scaleIn">Connect With Us</h2>
                                <p className="text-gray-300 mb-6">
                                    We're here to help make your wedding planning journey smooth and delightful.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
                                    <ContactInfo icon={FaEnvelope} text="support@weddingwonders.com" link="mailto:support@weddingwonders.com" />
                                    <ContactInfo icon={FaPhoneAlt} text="+91 9302909397" link="tel:+919302909397" />
                                    <ContactInfo icon={FaMapMarkerAlt} text="Burhanpur, MP, India" link="https://maps.app.goo.gl/your-location-link" />
                                    <ContactInfo icon={FaGlobe} text="weddingwonders.com" link="https://weddingwonders.com" />
                                </div>
                                <a
                                    href="https://wa.me/919302909397"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-full font-bold shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 text-xl tracking-wide uppercase"
                                >
                                    <FaWhatsapp className="text-2xl" /> Chat on WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Helper component for contact info (no change)
const ContactInfo = ({ icon: Icon, text, link }) => (
    <motion.a
        href={link}
        target={link.startsWith('http') || link.startsWith('mailto') || link.startsWith('tel') ? "_blank" : "_self"}
        rel={link.startsWith('http') ? "noopener noreferrer" : ""}
        className="flex items-center justify-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300 p-3 rounded-lg hover:bg-white hover:bg-opacity-10 backdrop-filter backdrop-blur-sm cursor-pointer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
    >
        <Icon className="text-yellow-400 text-xl" />
        <span className="text-sm sm:text-base">{text}</span>
    </motion.a>
);

export default AboutUs;