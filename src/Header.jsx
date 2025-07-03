import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClipboardList, faUsers, faDollarSign, faStore, faGlobe, faHashtag,
    faHome, faPaintBrush, faUserTie, faFemale, faNewspaper, faTasks,
    faListCheck, faUserFriends, faMoneyCheckAlt, faBuilding, faEarth, faTag,
    faCouch, faCameraRetro, faMusic, faConciergeBell, faGift, faHotel,
    faHeart, faShoppingCart, faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Ref for the entire header to detect clicks outside for closing dropdowns
    const headerRef = useRef(null);
    // Ref to manage the timeout for closing dropdowns on mouse leave
    const leaveTimeoutRef = useRef(null); // This needs to be available to Header's handlers

    useEffect(() => {
        // Function to close dropdown on click outside header
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup function for event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            // Also clear any pending timeouts when the component unmounts
            if (leaveTimeoutRef.current) {
                clearTimeout(leaveTimeoutRef.current);
            }
        };
    }, []);

    // Refresh logic for invalid routes (no change)
    useEffect(() => {
        const validRoutes = [
            "/", "/about-us", "/decor-themes", "/floral-designs", "/mandap-decor",
            "/planning-tools/budget-planner", "/planning-tools/guest-list-manager",
            "/wedding-vendors/photographers", "/wedding-vendors/caterers", "/wedding-vendors/music-dj",
            "/wedding-vendors/venues", "/brides/bridal-dresses", "/brides/makeup-artists",
            "/brides/jewelry", "/grooms/groom-outfits", "/grooms/wedding-accessories",
            "/blogs/latest-trends", "/blogs/wedding-stories"
        ];

        if (!validRoutes.includes(location.pathname)) {
            navigate("/");
        }
    }, [location.pathname, navigate]);

    // Function to handle opening a dropdown (clears any pending close timeout)
    const handleDropdownMouseEnter = (label) => {
        if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current);
            leaveTimeoutRef.current = null;
        }
        setActiveDropdown(label);
    };

    // Function to handle leaving a dropdown area (sets a delay before closing)
    const handleDropdownMouseLeave = () => {
        // Set a timeout to close the dropdown after 200ms
        leaveTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200); // This delay is crucial for smooth interaction
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50" ref={headerRef}>
            <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm border-b border-white border-opacity-15 shadow-md">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    {/* Logo */}
                    <Link to="/" className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:scale-105 transition-transform duration-300">
                        WeddingWonders ✨
                    </Link>

                    {/* Navigation with Enhanced Dropdowns */}
                    <nav className="flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <Dropdown
                                key={index}
                                label={item.label}
                                icon={item.icon}
                                options={item.options}
                                activeDropdown={activeDropdown}
                                setActiveDropdown={setActiveDropdown} // Keep this for click-to-close behavior on mobile or if you add it
                                onMouseEnterHandler={handleDropdownMouseEnter}
                                onMouseLeaveHandler={handleDropdownMouseLeave}
                            />
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

// Dropdown Component - Fixed for stable hover behavior
const Dropdown = ({ label, icon, activeDropdown, setActiveDropdown, options, onMouseEnterHandler, onMouseLeaveHandler }) => {
    const isOpen = activeDropdown === label;

    return (
        <div
            className="relative inline-block"
            // Use the handlers passed from the parent Header component
            onMouseEnter={() => onMouseEnterHandler(label)}
            onMouseLeave={onMouseLeaveHandler}
        >
            <span className="flex items-center text-white text-lg font-semibold uppercase cursor-pointer tracking-wide transition-all duration-300 hover:text-yellow-300 hover:scale-105">
                <FontAwesomeIcon icon={icon} className="mr-2 text-yellow-400" />
                {label}
                {options && options.length > 0 && (
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`ml-2 text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                )}
            </span>

            {isOpen && options && options.length > 0 && (
                <div
                    className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-72 rounded-xl shadow-2xl bg-white bg-opacity-15 backdrop-filter backdrop-blur-xl text-white border border-white border-opacity-20 overflow-hidden transition-all duration-300 ease-out origin-top"
                    style={{
                        animation: 'fadeInScale 0.3s ease-out forwards',
                    }}
                >
                    <div className="py-2">
                        {options.map((item, index) => (
                            <Link
                                key={index}
                                to={item.to}
                                className="flex items-center px-4 py-3 hover:bg-yellow-500 hover:bg-opacity-20 hover:text-white transition-all duration-300 text-base font-medium"
                                // On click, immediately close the dropdown and clear any pending timeouts
                                onClick={() => {
                                    setActiveDropdown(null);
                                    // Make sure to clear the timeout when a link is clicked,
                                    // otherwise, it might close after navigating.
                                    if (leaveTimeoutRef.current) { // Access directly or pass down
                                        clearTimeout(leaveTimeoutRef.current);
                                        leaveTimeoutRef.current = null;
                                    }
                                }}
                            >
                                <FontAwesomeIcon icon={item.icon} className="mr-3 text-yellow-400" />
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// Updated Menu Items (keeping as is)
const menuItems = [
    {
        label: "Home",
        icon: faHome,
        options: [
            { to: "/", label: "Homepage", icon: faHome },
            { to: "/AboutUs", label: "About Us", icon: faGlobe }
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