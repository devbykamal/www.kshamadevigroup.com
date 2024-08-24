import React, { useState, useEffect, useRef } from 'react';
import {
    AlignJustify,
    CircleUserRoundIcon,
    LogInIcon,
    MailIcon,
    Phone,
    Search,
    ShoppingCartIcon,
    X,
    ChevronDown
} from "lucide-react";
import logo from "../img/logo.jpg";
import { Link } from 'react-router-dom';

function Nav() {
    const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const searchBoxRef = useRef(null);

    const toggleSearchBox = () => setIsSearchBoxOpen(prev => !prev);
    const closeSearchBox = () => setIsSearchBoxOpen(false);

    const submitSearch = () => {
        const searchInput = document.getElementById('searchInput').value;
        alert('Searching for: ' + searchInput);
    };

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
    const closeDropdown = () => setIsDropdownOpen(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
            if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
                closeSearchBox();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className='bg-[#F1F1F1]'>
            {/* Top Navigation Bar */}
            <div className="flex justify-between items-center h-[50px] bg-[#843135] text-white text-[15px] px-10 2xl:px-[570px]">
                <div className="flex gap-5 max-sm:hidden">
                    <span className="flex gap-2 items-center ml-4">
                        <Phone size={16} />
                        01-6633306/6632137
                        <span className="max-lg:hidden">| Contact</span>
                    </span>
                    <span className="flex gap-2 items-center">
                        <MailIcon size={15} />
                        <span className="max-lg:hidden">Email:</span>
                        info@kshamadevigroup.com
                    </span>
                </div>
                <div className="flex gap-10 max-lg:gap-3">
                    <Link to="/login" className="flex gap-2 items-center cursor-pointer">
                        <CircleUserRoundIcon size={16} />
                        Login
                    </Link>

                    <Link to="/register" className="flex gap-2 items-center cursor-pointer">
                        <LogInIcon size={16} />
                        Register
                    </Link>

                    <Link to="/cart" className="flex gap-2 items-center cursor-pointer">
                        <ShoppingCartIcon size={16} />
                        Cart
                    </Link>

                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className="flex justify-between items-center relative bg-white pb-14">
                <div className="max-w-[150px] h-full py-2 ml-10 max-sm:ml-9 max-sm:h-14 max-sm:w-28">
                    <img src={logo} alt="Company Logo" />
                </div>

                {/* Navigation Links */}
                <div className="flex gap-6 max-lg:hidden items-center justify-center">
                    <a href="/" className="hover:text-[#843135]">Home</a>
                    <Link to="/products" className="hover:text-[#843135]">Products</Link>
                    <div ref={dropdownRef} className="relative flex items-center">
                        <a
                            href="#"
                            className="hover:text-[#843135] cursor-pointer flex items-center"
                            onClick={toggleDropdown}
                        >
                            About Us
                            <ChevronDown
                                size={16}
                                className={`ml-1 mt-1 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </a>
                        <div
                            className={`absolute bg-[#f1f1f1] shadow-lg z-10 rounded-[8px] mt-[250px] w-52 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 translate-y-5 invisible'
                                }`}
                            style={{ left: '50%', transform: 'translateX(-50%)' }}
                        >
                            <a href="#" className="block px-4 py-2 hover:bg-[#843135] hover:text-white transition-colors duration-300">
                                Introduction
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-[#843135] hover:text-white transition-colors duration-300">
                                Board of Directors
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-[#843135] hover:text-white transition-colors duration-300">
                                Management Team
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-[#843135] hover:text-white transition-colors duration-300">
                                Services
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-[#843135] hover:text-white transition-colors duration-300">
                                Career
                            </a>
                        </div>
                    </div>
                    <a href="#" className="hover:text-[#843135]">Projects</a>
                    <a href="#" className="hover:text-[#843135]">Contact Us</a>
                    <a href="#" className="hover:text-[#843135]">Dealers</a>
                    <a href="#" className="hover:text-[#843135]">CSR</a>
                    <a href="#" className="hover:text-[#843135]">Gallery</a>
                </div>

                {/* Search and Shop Now Buttons */}
                <div className="flex items-center gap-3 mr-10 relative">
                    <div ref={searchBoxRef} className="relative flex justify-end max-lg:hidden">
                        <div className={`boxsearch ${isSearchBoxOpen ? 'active' : ''}`}>
                            <div className="cursor-pointer p-2" onClick={toggleSearchBox}>
                                <Search size={16} />
                            </div>
                            <div
                                className={`absolute top-[-8px] left-[-155px] border-b-[4px] border-[#843135] p-[5px_10px_8px_10px] shadow-[0px_0px_8px_rgb(190,190,190)] bg-white z-[100] flex w-[320px] items-center gap-[9px] ${isSearchBoxOpen ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-200 ease-in-out`}
                            >
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    id="searchInput"
                                    className="border-none outline-none flex-grow"
                                />
                                <div className="cursor-pointer p-[9px_12px] bg-[#843135]" onClick={submitSearch}>
                                    <Search size={16} className="text-white" />
                                </div>
                                <div className="cursor-pointer mr-[7px]" onClick={closeSearchBox}>
                                    <X size={20} className="text-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <AlignJustify />
                    </div>
                    <a
                        href="#"
                        className="flex items-center justify-center border border-[#843135] h-[35px] w-[110px] text-[#843135] hover:bg-[#843135] hover:text-white hover:pl-3 transition-all duration-300 z-[10] max-lg:hidden"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Nav;
