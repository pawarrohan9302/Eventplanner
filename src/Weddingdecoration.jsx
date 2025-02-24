import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMagic, faPlayCircle, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Weddingdecoration = () => {
    return (
        <div className="bg-black text-white min-h-screen w-full flex flex-col items-center overflow-x-hidden">
            {/* Hero Section */}
            <div
                className="relative w-full h-screen flex flex-col justify-center items-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/luxury-wedding-bg.jpg')" }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-extrabold text-yellow-400 text-center"
                >
                    Luxury Wedding Decoration
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-4 text-xl text-center px-4"
                >
                    A Royal Experience for Your Dream Wedding
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-full shadow-lg text-lg font-semibold"
                >
                    Explore Themes
                </motion.button>
            </div>

            {/* Decoration Features */}
            <div className="container mx-auto py-16 px-6 grid md:grid-cols-3 gap-10 w-full">
                <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-lg text-center shadow-xl">
                    <FontAwesomeIcon icon={faMagic} className="text-yellow-400 text-4xl" />
                    <h3 className="mt-4 text-xl font-bold">AI-Powered Theme Selection</h3>
                    <p className="mt-2">Get personalized wedding decoration themes based on your preferences.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-lg text-center shadow-xl">
                    <FontAwesomeIcon icon={faPlayCircle} className="text-yellow-400 text-4xl" />
                    <h3 className="mt-4 text-xl font-bold">360° Virtual Tour</h3>
                    <p className="mt-2">Experience our luxurious wedding decor in a virtual reality tour.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-lg text-center shadow-xl">
                    <FontAwesomeIcon icon={faLightbulb} className="text-yellow-400 text-4xl" />
                    <h3 className="mt-4 text-xl font-bold">Custom Lighting Designs</h3>
                    <p className="mt-2">Add beautiful lighting to enhance the wedding ambiance.</p>
                </motion.div>
            </div>

            {/* WhatsApp Chat Button */}
            <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center text-lg font-bold"
            >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-2xl" /> VIP Chat
            </motion.a>
        </div>
    );
};

export default Weddingdecoration;
