import { useState, useEffect } from "react";
import { ArrowBigLeftDashIcon, ArrowBigRightDashIcon, ChevronsRight } from "lucide-react";
import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.png";
import logo3 from "./img/logo3.png";
import logo4 from "./img/logo4.png";
import logo5 from "./img/logo5.png";
import products7 from "./img/products7.jpg";

function Products() {
  const logos = [logo1, logo2, logo3, logo4, logo5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? logos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === logos.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change images every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const visibleLogos = [
    logos[currentIndex],
    logos[(currentIndex + 1) % logos.length],
    logos[(currentIndex + 2) % logos.length],
  ];

  return (
    <>
      <div className="flex flex-wrap mx-4 sm:mx-10 gap-6">
        {/* Optional Empty Div for Future Content */}
        <div className="hidden"></div>

        {/* Featured Products Section */}
        <div className="bg-white mt-7 flex flex-col p-6 sm:w-full max-w-auto mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-[#843135] text-lg sm:text-xl">Featured Product</h2>
            <div className="flex mt-2 md:mt-0">
              <button
                onClick={handlePrev}
                className="mr-2 sm:mr-4 border-2 border-[#843135] text-[#843135] w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out hover:bg-[#843135] group"
              >
                <ArrowBigLeftDashIcon className="w-5 sm:w-6 h-5 sm:h-6 transition-colors duration-300 ease-in-out group-hover:text-white" />
              </button>
              <button
                onClick={handleNext}
                className="border-2 border-[#843135] text-[#843135] w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out hover:bg-[#843135] group"
              >
                <ArrowBigRightDashIcon className="w-5 sm:w-6 h-5 sm:h-6 transition-colors duration-300 ease-in-out group-hover:text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            <div className="bg-gray-200 h-[330px] relative shadow-sm hover:shadow-xl">
              <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
                Code : GH2525
              </span>
              <div className="overflow-hidden">
                <img
                  src={products7}
                  alt="Product"
                  className="h-[280px] w-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div>
                <span className="flex flex-col ">
                  <a href="#" className="bg-white p-2 hover:text-[#843135]">
                    FOUR POLE RCCB
                  </a>
                  <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">
                    FOUR POLE RCCB
                  </span>
                </span>
              </div>
            </div>
            <div className="bg-gray-200 h-[330px] relative shadow-sm hover:shadow-xl max-sm:mt-5">
              <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
                Code : GH2525
              </span>
              <div className="overflow-hidden">
                <img
                  src={products7}
                  alt="Product"
                  className="h-[280px] w-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div>
                <span className="flex flex-col">
                  <a href="#" className="bg-white p-2 hover:text-[#843135]">
                    FOUR POLE RCCB
                  </a>
                  <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">
                    FOUR POLE RCCB
                  </span>
                </span>
              </div>
            </div>
            <div className="bg-gray-200 h-[330px] relative shadow-sm hover:shadow-xl max-sm:mt-5">
              <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
                Code : GH2525
              </span>
              <div className="overflow-hidden">
                <img
                  src={products7}
                  alt="Product"
                  className="h-[280px] w-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div>
                <span className="flex flex-col">
                  <a href="#" className="bg-white p-2 hover:text-[#843135]">
                    FOUR POLE RCCB
                  </a>
                  <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">
                    FOUR POLE RCCB
                  </span>
                </span>
              </div>
            </div>
            {/* Repeat for other products */}
          </div>
        </div>
      </div>
      <div className="bg-white mt-7 flex flex-col p-4 sm:w-full max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <h2 className="text-lg sm:text-xl font-semibold text-[#843135]">Our Brands</h2>
          <div className="flex mt-2 md:mt-0">
            <button
              onClick={handlePrev}
              className="mr-3 sm:mr-6 border-2 border-[#843135] text-[#843135] w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out hover:bg-[#843135] group"
            >
              <ArrowBigLeftDashIcon className="w-6 sm:w-8 h-6 sm:h-8 transition-colors duration-300 ease-in-out group-hover:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="border-2 border-[#843135] text-[#843135] w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out hover:bg-[#843135] group"
            >
              <ArrowBigRightDashIcon className="w-6 sm:w-8 h-6 sm:h-8 transition-colors duration-300 ease-in-out group-hover:text-white" />
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-[100px] overflow-hidden mt-7 mb-7 px-5 md:px-10">
          {visibleLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo${index + 1}`}
              className="h-[50px] sm:h-[60px] md:h-[70px] w-auto transition-transform duration-500 hover:scale-110"
            />
          ))}
        </div>
      </div>
      <div className="bg-white mt-7 flex flex-col p-4 max-w-[1000px] mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-[#843135] font-bold">Other Products</h2>
          <a
            href="#"
            className="flex items-center text-[#843135] transition-transform duration-300 hover:translate-x-2 mr-3 font-bold"
          >
            View More
            <ChevronsRight className="ml-2 mt-1 transition-transform duration-300" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          <div className="bg-gray-200 h-[330px] relative shadow-xl hover:shadow-2xl">
            <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
              Code : GH2525
            </span>
            <div className="overflow-hidden">
              <img src={products7} alt="" className="h-[250px] w-full transition-transform duration-500 hover:scale-110" />
            </div>
            <div>
              <span className="flex flex-col">
                <a href="#" className="bg-white p-2 hover:text-[#843135]">FOUR POLE RCCB</a>
                <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">FOUR POLE RCCB</span>
              </span>
            </div>
          </div>
          <div className="bg-gray-200 h-[330px] relative shadow-xl hover:shadow-2xl">
            <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
              Code : GH2525
            </span>
            <div className="overflow-hidden">
              <img src={products7} alt="" className="h-[250px] w-full transition-transform duration-500 hover:scale-110" />
            </div>
            <div>
              <span className="flex flex-col">
                <a href="#" className="bg-white p-2 hover:text-[#843135]">FOUR POLE RCCB</a>
                <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">FOUR POLE RCCB</span>
              </span>
            </div>
          </div>
          <div className="bg-gray-200 h-[330px] relative shadow-xl hover:shadow-2xl">
            <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
              Code : GH2525
            </span>
            <div className="overflow-hidden">
              <img src={products7} alt="" className="h-[250px] w-full transition-transform duration-500 hover:scale-110" />
            </div>
            <div>
              <span className="flex flex-col">
                <a href="#" className="bg-white p-2 hover:text-[#843135]">FOUR POLE RCCB</a>
                <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">FOUR POLE RCCB</span>
              </span>
            </div>
          </div>
          <div className="bg-gray-200 h-[330px] relative shadow-xl hover:shadow-2xl">
            <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
              Code : GH2525
            </span>
            <div className="overflow-hidden">
              <img src={products7} alt="" className="h-[250px] w-full transition-transform duration-500 hover:scale-110" />
            </div>
            <div>
              <span className="flex flex-col">
                <a href="#" className="bg-white p-2 hover:text-[#843135]">FOUR POLE RCCB</a>
                <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">FOUR POLE RCCB</span>
              </span>
            </div>
          </div>
          <div className="bg-gray-200 h-[330px] relative shadow-xl hover:shadow-2xl">
            <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
              Code : GH2525
            </span>
            <div className="overflow-hidden">
              <img src={products7} alt="" className="h-[250px] w-full transition-transform duration-500 hover:scale-110" />
            </div>
            <div>
              <span className="flex flex-col">
                <a href="#" className="bg-white p-2 hover:text-[#843135]">FOUR POLE RCCB</a>
                <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">FOUR POLE RCCB</span>
              </span>
            </div>
          </div>
          <div className="bg-gray-200 h-[330px] relative shadow-xl hover:shadow-2xl">
            <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
              Code : GH2525
            </span>
            <div className="overflow-hidden">
              <img src={products7} alt="" className="h-[250px] w-full transition-transform duration-500 hover:scale-110" />
            </div>
            <div>
              <span className="flex flex-col">
                <a href="#" className="bg-white p-2 hover:text-[#843135]">FOUR POLE RCCB</a>
                <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">FOUR POLE RCCB</span>
              </span>
            </div>
          </div>
          <div className="bg-gray-200 h-[330px] relative shadow-xl hover:shadow-2xl">
            <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
              Code : GH2525
            </span>
            <div className="overflow-hidden">
              <img src={products7} alt="" className="h-[250px] w-full transition-transform duration-500 hover:scale-110" />
            </div>
            <div>
              <span className="flex flex-col">
                <a href="#" className="bg-white p-2 hover:text-[#843135]">FOUR POLE RCCB</a>
                <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">FOUR POLE RCCB</span>
              </span>
            </div>
          </div>
          <div className="bg-gray-200 h-[330px] relative shadow-xl hover:shadow-2xl">
            <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
              Code : GH2525
            </span>
            <div className="overflow-hidden">
              <img src={products7} alt="" className="h-[250px] w-full transition-transform duration-500 hover:scale-110" />
            </div>
            <div>
              <span className="flex flex-col">
                <a href="#" className="bg-white p-2 hover:text-[#843135]">FOUR POLE RCCB</a>
                <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">FOUR POLE RCCB</span>
              </span>
            </div>
          </div>
          <div className="bg-gray-200 h-[330px] relative shadow-xl hover:shadow-2xl">
            <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
              Code : GH2525
            </span>
            <div className="overflow-hidden">
              <img src={products7} alt="" className="h-[250px] w-full transition-transform duration-500 hover:scale-110" />
            </div>
            <div>
              <span className="flex flex-col">
                <a href="#" className="bg-white p-2 hover:text-[#843135]">FOUR POLE RCCB</a>
                <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">FOUR POLE RCCB</span>
              </span>
            </div>
          </div>
          <div className="bg-gray-200 h-[330px] relative shadow-xl hover:shadow-2xl">
            <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
              Code : GH2525
            </span>
            <div className="overflow-hidden">
              <img src={products7} alt="" className="h-[250px] w-full transition-transform duration-500 hover:scale-110" />
            </div>
            <div>
              <span className="flex flex-col">
                <a href="#" className="bg-white p-2 hover:text-[#843135]">FOUR POLE RCCB</a>
                <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">FOUR POLE RCCB</span>
              </span>
            </div>
          </div>
          <div className="bg-gray-200 h-[330px] relative shadow-xl hover:shadow-2xl">
            <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
              Code : GH2525
            </span>
            <div className="overflow-hidden">
              <img src={products7} alt="" className="h-[250px] w-full transition-transform duration-500 hover:scale-110" />
            </div>
            <div>
              <span className="flex flex-col">
                <a href="#" className="bg-white p-2 hover:text-[#843135]">FOUR POLE RCCB</a>
                <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">FOUR POLE RCCB</span>
              </span>
            </div>
          </div>
          <div className="bg-gray-200 h-[330px] relative shadow-xl hover:shadow-2xl">
            <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
              Code : GH2525
            </span>
            <div className="overflow-hidden">
              <img src={products7} alt="" className="h-[250px] w-full transition-transform duration-500 hover:scale-110" />
            </div>
            <div>
              <span className="flex flex-col">
                <a href="#" className="bg-white p-2 hover:text-[#843135]">FOUR POLE RCCB</a>
                <span className="bg-[#f5f5f5] hover:text-[#843135] p-2">FOUR POLE RCCB</span>
              </span>
            </div>
          </div>
          {/* Repeat for other products */}
        </div>
      </div>
    </>
  );
}

export default Products;
