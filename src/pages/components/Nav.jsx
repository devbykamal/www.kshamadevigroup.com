import { CircleUserRoundIcon, LogInIcon, Mail, MailIcon, Phone, ShoppingCartIcon } from "lucide-react";

function Nav() {
    return (
        <>
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

        </>
    );

}
export default Nav