import { CircleUserRoundIcon, LogInIcon, Mail, MailIcon, Phone, Search, SearchCheck, ShoppingCartIcon } from "lucide-react";
import logo from "../img/logo.jpg";
import './About-dropdown.css';

function Nav() {
    return (
        <>
            {/* navigation bar */}
            {/* top navigation bar */}
            <div class="flex justify-between items-center h-[50px] bg-[#843135] text-white text-[15px] 2xl:pl-[570px] 2xl:pr-[570px] 2xl:h-[50px]">
                {/* <!-- Left side: Contacts --> */}
                <div class="flex gap-5 max-lg:gap-5 ml-10 max-sm:hidden max-sm:gap-4 max-[768]:gap-1 ">

                    <span class="flex gap-2"><Phone size={16} className=" mt-0.5 " />01-6633306/6632137
                        <span className="max-lg:hidden">| Contact</span></span>
                    <span class="flex  items-center gap-2 max-lg:gap-1 "><MailIcon size={15} className="mt-0.5 " /><span className="max-lg:hidden">Email:</span>
                        <span> info@kshamadevigroup.com</span> </span>

                </div>

                {/* <!-- Right side: Icons --> */}
                <div class="flex gap-10  max-lg:gap-3 mr-10 max-sm:ml-7 ">

                    {/* <!-- Login Icon --> */}
                    <div className="flex  items-center gap-2"><CircleUserRoundIcon size={16} />Login</div>

                    {/* <!-- Register Icon --> */}
                    <div className="flex  items-center gap-2"><LogInIcon size={16} />Register</div>
                    {/* <!-- Cart Icon --> */}
                    <div className="flex  items-center gap-2"><ShoppingCartIcon size={16} fill="white" />Cart</div>

                </div>
            </div>
            {/* complete top navigation bar */}











            {/* second navigation bar */}
            <div className="flex justify-between items-center relative">

                <div className="w-full max-w-[150px] h-full py-2 ml-10">
                    <img src={logo} alt="logo" />
                </div>
                {/* logo */}
                <div className="flex gap-6">
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <div className="dropdown">
                        <a class="dropbtn" href="#">About Us &#xf078;</a>
                        <div class="dropdown-content">
                            <a href="#">Introduction</a>
                            <a href="#">Board of Directors</a>
                            <a href="#">Management Team</a>
                            <a href="#">Services</a>
                            <a href="#">Career</a>
                        </div>
                    </div>
                    <a href="">Projects</a>
                    <a href="">Contact Us</a>
                    <a href="">Dealers</a>
                    <a href="">CSR</a>
                    <a href="">Gallery</a>
                </div>

                <div className="flex mr-10 gap-3 items-center justify-center">
                    <div className="">
                        <Search size={20} />
                    </div>

                    <div className="">
                        <a className="flex items-center justify-center border border-[#843135] hover:bg-[#843135] hover:text-[white] h-[35px] w-[110px] text-[#843135] hover:pl-4 transition-all duration-300 ease-in-out " href="">
                            <span className="flex items-center justify-center ">Shop Now</span>
                        </a>
                    </div>

                </div>


            </div >
        </>
    );

}
export default Nav