import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaImages } from 'react-icons/fa';

const WeddingVenues = () => {
  const venueList = [
    { name: "Royal Palace", location: "Jaipur, India", rating: 5, image: "/royal-palace.jpg" },
    { name: "Beachside Bliss", location: "Goa, India", rating: 4.8, image: "/beachside-bliss.jpg" },
    { name: "Garden of Dreams", location: "Udaipur, India", rating: 4.9, image: "/garden-of-dreams.jpg" }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-20 flex flex-col items-center">
      <motion.h1
        className="text-6xl font-extrabold text-yellow-400 mb-6 tracking-wide drop-shadow-lg border-b-4 border-yellow-500 pb-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Wedding Venues
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 text-center max-w-3xl mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        Discover breathtaking venues for your dream wedding, where elegance meets perfection.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-12 px-6">
        {venueList.map((venue, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <img src={venue.image} alt={venue.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-yellow-300 flex items-center justify-center gap-2">
              <FaImages /> {venue.name}
            </h3>
            <p className="mt-2 text-gray-400 flex items-center justify-center gap-2">
              <FaMapMarkerAlt /> {venue.location}
            </p>
            <p className="mt-2 text-yellow-400 flex items-center justify-center gap-2">
              <FaStar /> {venue.rating}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="mt-12 px-7 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 text-lg"
        whileHover={{ scale: 1.1 }}
      >
        Explore More Venues
      </motion.button>
    </div>
  );
};

export default WeddingVenues;
