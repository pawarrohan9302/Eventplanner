import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useScroll, useTransform } from "framer-motion"; // Added useScroll, useTransform for parallax
import { FaCameraRetro, FaUtensils, FaMusic, FaGifts, FaFacebook, FaInstagram, FaTwitter, FaHeart, FaChevronRight, FaStar, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Added FaEnvelope, FaPhoneAlt for footer

// Ensure these paths are correct and these images exist in your assets folder
import HeroImage1 from "./assets/Image1.png";
import HeroImage2 from "./assets/Image2.png";
import HeroImage3 from "./assets/Image3.png";

const Home = () => {
    const [coupleName] = useState("Rohan & Priya"); // Static for now, could be dynamic
    const [currentSlide, setCurrentSlide] = useState(0);

    // For hero parallax effect
    const { scrollYProgress } = useScroll();
    const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Adjust as needed

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        pauseOnHover: false,
    };

    const headerTexts = [
        "Your Dream Wedding, Perfectly Crafted.",
        "Unforgettable Moments, Designed for You.",
        "Where Every Detail Sparkles with Love.",
    ];

    const taglineTexts = [
        "Experience the Grand Celebration 🎉",
        "Creating Timeless Memories 💖",
        "A Royal Journey Awaits You ✨",
    ];

    const services = [
        { name: "Photography & Videography", icon: <FaCameraRetro />, description: "Capture every precious moment with our expert lens and cinematic storytelling." },
        { name: "Exquisite Decor & Themes", icon: <FaGifts />, description: "Transform your venue into a breathtaking wonderland tailored to your vision." },
        { name: "Gourmet Catering Experiences", icon: <FaUtensils />, description: "Delight your guests with an unforgettable culinary journey and diverse menus." },
        { name: "Dynamic Music & Entertainment", icon: <FaMusic />, description: "Set the perfect mood with top DJs, vibrant music, and engaging performances." },
    ];

    const testimonials = [
        {
            quote: "WeddingWonders turned our chaotic planning into pure joy! Every detail was perfect, truly magical.",
            author: "Anjali & Vikram",
            rating: 5
        },
        {
            quote: "Professional, creative, and utterly dedicated. Our wedding was everything we dreamed of and more.",
            author: "Sneha & Rahul",
            rating: 5
        },
        {
            quote: "From decor to coordination, they handled it all flawlessly. Highly recommend for a stress-free wedding!",
            author: "Pooja & Sameer",
            rating: 5
        }
    ];

    const cardVariants = {
        offscreen: { y: 50, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.4, duration: 1 }
        }
    };

    const sectionHeaderVariants = {
        offscreen: { opacity: 0, y: 50 },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7 }
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-950 to-black text-white min-h-screen font-poppins relative overflow-x-hidden"> {/* Added overflow-x-hidden for better parallax */}

            {/* --- Hero Section --- */}
            <section className="relative h-screen overflow-hidden">
                {/* Parallax background images */}
                <motion.div
                    style={{ translateY }} // Apply parallax effect
                    className="absolute inset-0 z-0"
                >
                    <Slider {...sliderSettings}>
                        {[HeroImage1, HeroImage2, HeroImage3].map((image, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={image}
                                    alt={`Wedding Scene ${index + 1}`}
                                    className="w-full h-screen object-cover object-center"
                                />
                                {/* Overlay to darken image and make text pop */}
                                <div className="absolute inset-0 bg-black opacity-40"></div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4 bg-gradient-to-t from-black/30 to-transparent">
                    <motion.h1
                        key={currentSlide} // Key prop to re-trigger animation on slide change
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-yellow-400 drop-shadow-lg leading-tight"
                    >
                        {headerTexts[currentSlide]}
                    </motion.h1>
                    <motion.p
                        key={`tagline-${currentSlide}`} // Key prop for tagline animation
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl md:text-3xl mt-4 text-gray-200 italic max-w-2xl mx-auto"
                    >
                        {taglineTexts[currentSlide]}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-xl md:text-2xl mt-6 text-yellow-200 font-semibold"
                    >
                        Celebrating the timeless love of **{coupleName}**
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 120 }}
                    >
                        <Link
                            to="/planning-tools/budget-planner" // Suggesting a direct CTA to a planning tool
                            className="mt-10 inline-block px-12 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 text-xl font-bold rounded-full shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                        >
                            Start Your Journey <FaChevronRight className="inline-block ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* --- Our Vision/Story Section --- */}
            <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-center px-6">
                <motion.h2
                    variants={sectionHeaderVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-8 drop-shadow-lg"
                >
                    Where Dreams Take Flight
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10"
                >
                    At **WeddingWonders**, we don't just plan events; we craft **timeless experiences**.
                    Your wedding is a unique chapter in your love story, and we're here to ensure every page
                    is filled with joy, beauty, and seamless perfection.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <Link
                        to="/about-us"
                        className="inline-block px-10 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 text-lg font-semibold rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-md hover:shadow-yellow-500/40"
                    >
                        Learn More About Us
                    </Link>
                </motion.div>
            </section>

            {/* --- Featured Services Section --- */}
            <section id="services" className="py-20 bg-gray-900 px-6">
                <motion.h2
                    variants={sectionHeaderVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-12 text-center drop-shadow-lg"
                >
                    Our Signature Services
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-102 hover:shadow-yellow-500/30"
                        >
                            <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 text-gray-900 rounded-full flex items-center justify-center mb-6 text-5xl shadow-lg">
                                {service.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-yellow-300 mb-3">{service.name}</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        to="/decor-themes" // Example link to another relevant section
                        className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 text-lg font-bold rounded-full shadow-lg hover:shadow-yellow-400/40 transform hover:scale-105 transition-all duration-300 uppercase"
                    >
                        View All Services
                    </Link>
                </div>
            </section>

            {/* --- Testimonials Section --- */}
            <section className="py-20 bg-gradient-to-b from-gray-900 to-black px-6">
                <motion.h2
                    variants={sectionHeaderVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-12 text-center drop-shadow-lg"
                >
                    Hear From Our Happy Couples
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-102 hover:shadow-yellow-500/30"
                        >
                            <p className="text-gray-200 text-lg italic mb-4">"{testimonial.quote}"</p>
                            <div className="flex items-center mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-xl mr-1" />
                                ))}
                            </div>
                            <p className="text-yellow-300 font-semibold text-xl">- {testimonial.author}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- Call to Action Section (Simplified and direct) --- */}
            <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600 text-center px-6">
                <motion.h2
                    variants={sectionHeaderVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-lg"
                >
                    Ready to Plan Your Perfect Day?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto mb-10"
                >
                    Let's connect and make your wedding vision a reality. Get a free, personalized consultation today!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <Link
                        to="/contact-us" // Assuming you'll have a contact us page
                        className="inline-block px-12 py-5 bg-gray-900 text-yellow-400 text-xl font-bold rounded-full shadow-2xl hover:shadow-gray-700/50 transform hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                    >
                        Schedule Your Consultation <FaHeart className="inline-block ml-2 text-red-500" />
                    </Link>
                </motion.div>
            </section>


            {/* --- Footer Section --- */}
            <footer className="bg-gray-950 text-gray-400 py-12 mt-10 text-center border-t border-gray-800">
                <h3 className="text-4xl font-extrabold text-yellow-400 mb-4">Wedding Wonders</h3>
                <p className="mt-3 text-lg italic text-gray-500 mb-8">Making your dream wedding a reality!</p>
                <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-lg mb-8">
                    <div className="flex items-center justify-center gap-3">
                        <FaEnvelope className="text-yellow-500 text-2xl" />
                        <a href="mailto:info@weddingwonders.com" className="hover:text-yellow-400 transition-colors duration-300">info@weddingwonders.com</a>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <FaPhoneAlt className="text-yellow-500 text-2xl" />
                        <a href="tel:+919876543210" className="hover:text-yellow-400 transition-colors duration-300">+91 98765 43210</a>
                    </div>
                </div>
                <div className="mt-8 flex justify-center space-x-7">
                    <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transform hover:scale-125 transition-transform duration-300"><FaFacebook size={30} /></a>
                    <a href="https://www.instagram.com/_rohan_pawar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transform hover:scale-125 transition-transform duration-300"><FaInstagram size={30} /></a>
                    <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transform hover:scale-125 transition-transform duration-300"><FaTwitter size={30} /></a>
                </div>
                <p className="mt-8 text-md text-gray-600">&copy; {new Date().getFullYear()} Wedding Wonders. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;