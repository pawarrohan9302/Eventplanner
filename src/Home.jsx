import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaCameraRetro, FaUtensils, FaMusic, FaGifts, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image1 from "./assets/Image1.png";
import Image2 from "./assets/Image2.png";
import Image3 from "./assets/Image3.png";

const Home = () => {
    const [coupleName, setCoupleName] = useState("Rohan & Priya");
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };

    const headerTexts = [
        "Experience the Grand Wedding Celebration 🎉",
        "Creating Unforgettable Moments 💖",
        "A Royal Wedding Awaits You ✨",
    ];

    const services = [
        { name: "Photography", icon: <FaCameraRetro size={40} /> },
        { name: "Venue Decoration", icon: <FaGifts size={40} /> },
        { name: "Catering", icon: <FaUtensils size={40} /> },
        { name: "Music & DJ", icon: <FaMusic size={40} /> },
    ];

    return (
        <div className="bg-black text-white min-h-screen font-[Poppins]">
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <Slider {...settings}>
                    {[Image1, Image2, Image3].map((image, index) => (
                        <div key={index} className="relative">
                            <img src={image} alt={`Wedding Scene ${index + 1}`} className="w-full h-screen object-cover opacity-90" />
                        </div>
                    ))}
                </Slider>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center z-10"
                >
                    <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-2xl animate-pulse">
                        {headerTexts[currentSlide]}
                    </h1>
                    <p className="text-2xl mt-4 text-gray-300 italic">
                        Celebrate the love of {coupleName}
                    </p>
                    <motion.a
                        href="#services"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 inline-block px-12 py-4 bg-yellow-500 text-black text-xl font-semibold rounded-full shadow-lg hover:bg-yellow-400"
                    >
                        Explore Services
                    </motion.a>
                </motion.div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 text-center">
                <h2 className="text-5xl font-bold text-yellow-400 mb-10">Our Exclusive Wedding Services</h2>
                <div className="mt-12 flex justify-center gap-10 flex-wrap">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="w-64 bg-gray-800 p-6 rounded-2xl shadow-xl border-4 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all flex flex-col items-center"
                        >
                            <div className="w-20 h-20 bg-yellow-500 text-black rounded-full flex items-center justify-center mb-4 text-4xl">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold">{service.name}</h3>
                            <p className="mt-2 text-gray-300 text-sm">Making your special day unforgettable</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-gray-300 py-10 mt-10 text-center">
                <h3 className="text-4xl font-extrabold text-yellow-400">Wedding Wonders</h3>
                <p className="mt-2 text-lg italic">Making your dream wedding a reality!</p>
                <div className="mt-6 flex justify-center space-x-6">
                    <a href="https://www.facebook.com/yourprofile" className="text-gray-400 hover:text-yellow-500"><FaFacebook size={28} /></a>
                    <a href="https://www.instagram.com/_rohan_pawar" className="text-gray-400 hover:text-yellow-500"><FaInstagram size={28} /></a>
                </div>
                <p className="mt-6 text-sm">&copy; 2025 Wedding Wonders. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
