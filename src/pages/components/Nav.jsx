import { useState } from "react";
import {
    CircleUserRoundIcon,
    LogInIcon,
    MailIcon,
    Phone,
    Search,
    ShoppingCartIcon,
    X
} from "lucide-react";
import logo from "../img/logo.jpg";
import './About-dropdown.css';

function Nav() {
    const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);

    const toggleSearchBox = () => setIsSearchBoxOpen(!isSearchBoxOpen);
    const closeSearchBox = () => setIsSearchBoxOpen(false);
    const submitSearch = () => {
        const searchInput = document.getElementById('searchInput').value;
        alert('Searching for: ' + searchInput);
    };

    return (
        <>
            {/* Top Navigation Bar */}
            <div className="flex justify-between items-center h-[50px] bg-[#843135] text-white text-[15px] px-10 2xl:px-[570px]">
                <div className="flex gap-5 max-sm:hidden">
                    <span className="flex gap-2 items-center">
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
                    <div className="flex gap-2 items-center cursor-pointer">
                        <CircleUserRoundIcon size={16} />
                        Login
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer">
                        <LogInIcon size={16} />
                        Register
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer">
                        <ShoppingCartIcon size={16} />
                        Cart
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className="flex justify-between items-center relative">
                <div className="max-w-[150px] h-full py-2 ml-10">
                    <img src={logo} alt="Company Logo" />
                </div>

                {/* Navigation Links */}
                <div className="flex gap-6">
                    <a href="#" className="hover:text-[#843135]">Home</a>
                    <a href="#" className="hover:text-[#843135]">Products</a>
                    <div className="dropdown">
                        <a href="#" className="dropbtn hover:text-[#843135]">
                            About Us &#xf078;
                        </a>
                        <div className="dropdown-content">
                            <a href="#">Introduction</a>
                            <a href="#">Board of Directors</a>
                            <a href="#">Management Team</a>
                            <a href="#">Services</a>
                            <a href="#">Career</a>
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
                    <div className="relative flex justify-end">
                        <div className={`boxsearch ${isSearchBoxOpen ? 'active' : ''}`}>
                            <div
                                className="search cursor-pointer p-2"
                                aria-label="Search"
                                onClick={toggleSearchBox}
                            >
                                <Search size={16} />
                            </div>
                            <div
                                className={`searchbox absolute top-[-8px] left-[-155px] border-b-[4px] border-[#843135] p-[5px_10px_8px_10px] shadow-[0px_0px_8px_rgb(190,190,190)] bg-white z-[100] flex w-[320px] items-center gap-[9px] ${isSearchBoxOpen ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-200 ease-in-out`}
                            >
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    id="searchInput"
                                    className="border-none outline-none flex-grow"
                                />
                                <div
                                    className="searchicon cursor-pointer p-[9px_12px] bg-[#843135]"
                                    aria-label="Submit search"
                                    onClick={submitSearch}
                                >
                                    <Search size={16} className="text-white" />
                                </div>
                                <div
                                    className="time cursor-pointer mr-[7px]"
                                    aria-label="Close search"
                                    onClick={closeSearchBox}
                                >
                                    <X size={20} className="text-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="flex items-center justify-center border border-[#843135] h-[35px] w-[110px] text-[#843135] hover:bg-[#843135] hover:text-white hover:pl-3 transition-all duration-300 z-[10]"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
                
        </>
    );
}

export default Nav;
