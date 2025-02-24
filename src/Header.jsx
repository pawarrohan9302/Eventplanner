import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faUsers, faDollarSign, faStore, faGlobe, faHashtag, faHome, faPaintBrush, faUserTie, faFemale, faNewspaper, faTasks, faListCheck, faUserFriends, faMoneyCheckAlt, faBuilding, faEarth, faTag, faCouch, faCameraRetro, faMusic, faConciergeBell, faGift, faHotel, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="bg-black bg-opacity-50 backdrop-blur-lg shadow-2xl border-b-2 border-yellow-400">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    {/* Logo */}
                    <h1 className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300">
                        WeddingWonders ✨
                    </h1>

                    {/* Navigation with Enhanced Dropdowns */}
                    <nav className="flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <Dropdown key={index} label={item.label} icon={item.icon} options={item.options}
                                activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

// **Dropdown Component**
const Dropdown = ({ label, icon, activeDropdown, setActiveDropdown, options }) => {
    const isOpen = activeDropdown === label;

    return (
        <div className="relative inline-block"
            onMouseEnter={() => setActiveDropdown(label)}
            onClick={() => setActiveDropdown(isOpen ? null : label)}
        >
            <span className="flex items-center text-white text-lg font-semibold uppercase cursor-pointer tracking-wide transition-all duration-300 hover:text-yellow-400">
                <FontAwesomeIcon icon={icon} className="mr-2 text-yellow-400" />
                {label}
            </span>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-72 rounded-md shadow-xl bg-black bg-opacity-90 text-white border border-yellow-500 transition-all duration-300"
                    onMouseEnter={() => setActiveDropdown(label)}
                >
                    <div className="py-2">
                        {options.map((item, index) => (
                            <Link key={index} to={item.to} className="flex items-center px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300">
                                <FontAwesomeIcon icon={item.icon} className="mr-2 text-yellow-400" />
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// **Updated Menu Items with "About Us" inside Home**
const menuItems = [
    {
        label: "Home",
        icon: faHome,
        options: [
            { to: "/", label: "Homepage", icon: faHome },
            { to: "/about-us", label: "About Us", icon: faGlobe }
        ]
    },
    {
        label: "Wedding Decoration",
        icon: faPaintBrush,
        options: [
            { to: "/decor-themes", label: "Decor Themes", icon: faCouch },
            { to: "/floral-designs", label: "Floral Designs", icon: faHashtag },
            { to: "/mandap-decor", label: "Mandap Decoration", icon: faGift }
        ]
    },
    {
        label: "Planning Tools",
        icon: faClipboardList,
        options: [
            { to: "/planning-tools/budget-planner", label: "Budget Planner", icon: faMoneyCheckAlt },
            { to: "/planning-tools/guest-list-manager", label: "Guest List Manager", icon: faUserFriends }
        ]
    },
    {
        label: "Wedding Vendors",
        icon: faStore,
        options: [
            { to: "/wedding-vendors/photographers", label: "Photographers", icon: faCameraRetro },
            { to: "/wedding-vendors/caterers", label: "Caterers", icon: faConciergeBell },
            { to: "/wedding-vendors/music-dj", label: "Music & DJ", icon: faMusic },
            { to: "/wedding-vendors/venues", label: "Wedding Venues", icon: faHotel }
        ]
    },
    {
        label: "Brides",
        icon: faFemale,
        options: [
            { to: "/brides/bridal-dresses", label: "Bridal Dresses", icon: faStore },
            { to: "/brides/makeup-artists", label: "Makeup Artists", icon: faUserTie },
            { to: "/brides/jewelry", label: "Jewelry & Accessories", icon: faTag }
        ]
    },
    {
        label: "Grooms",
        icon: faUserTie,
        options: [
            { to: "/grooms/groom-outfits", label: "Groom Outfits", icon: faBuilding },
            { to: "/grooms/wedding-accessories", label: "Wedding Accessories", icon: faShoppingCart }
        ]
    },
    {
        label: "Blogs",
        icon: faNewspaper,
        options: [
            { to: "/blogs/latest-trends", label: "Latest Trends", icon: faTag },
            { to: "/blogs/wedding-stories", label: "Wedding Stories", icon: faHeart }
        ]
    }
];

export default Header;
