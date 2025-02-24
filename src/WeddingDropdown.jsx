import React, { useState } from "react";
import { Link } from "react-router-dom";

const WeddingDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold shadow-lg"
            >
                Wedding Services
            </button>
            {isOpen && (
                <div
                    className="absolute mt-2 w-56 bg-white shadow-lg rounded-lg"
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <Link to="/wedding-decoration" className="block px-4 py-2 hover:bg-gray-200">Wedding Decoration</Link>
                    <Link to="/planning-tools" className="block px-4 py-2 hover:bg-gray-200">Planning Tools</Link>
                    <Link to="/wedding-venues" className="block px-4 py-2 hover:bg-gray-200">Wedding Venues</Link>
                    <Link to="/wedding-vendors" className="block px-4 py-2 hover:bg-gray-200">Wedding Vendors</Link>
                    <Link to="/brides" className="block px-4 py-2 hover:bg-gray-200">Bridal Makeup</Link>
                    <Link to="/blogs" className="block px-4 py-2 hover:bg-gray-200">Wedding Blogs</Link>
                </div>
            )}
        </div>
    );
};

export default WeddingDropdown;
