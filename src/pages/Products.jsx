import { useState, useEffect } from "react";
import { AppWindow, AreaChart, ArrowBigLeftDashIcon, ArrowBigRightDashIcon, ChevronsRight } from "lucide-react";
import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.png";
import logo3 from "./img/logo3.png";
import logo4 from "./img/logo4.png";
import logo5 from "./img/logo5.png";
import products7 from "./img/products7.jpg";
import products8 from "./img/products8.jpg";
import products9 from "./img/products9.jpg";
import products10 from "./img/products10.jpg";
import products11 from "./img/products11.jpg";
import products12 from "./img/products12.jpg";
import products13 from "./img/products13.jpg";
import products14 from "./img/products14.jpg";
import products15 from "./img/products15.jpg";
import app from "./img/app.png";
import './components/dropright.css';

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
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleLogos = [
    logos[currentIndex],
    logos[(currentIndex + 1) % logos.length],
    logos[(currentIndex + 2) % logos.length],
  ];

  const renderProduct = (product, code) => (
    <div className="bg-gray-200 h-[330px] relative shadow-sm hover:shadow-xl max-sm:mt-5">
      <span className="bg-[#843135] p-1 text-[12px] text-white absolute top-0 right-0">
        Code : {code}
      </span>
      <div className="overflow-hidden">
        <img
          src={product}
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
  );

  return (
    <>
      <div className="flex mx-4 sm:mx-10 gap-6 justify-between ">

        <div id="all_select" className="category max-lg:hidden">
          <div className="header">
            <h3 className="bg-[#843135] max-w-[240px] p-2 mb-1 box-border">Categories</h3>
          </div>
          <div className="parent text-left ">
            <span className="flex justify-between"> Light <ArrowBigRightDashIcon /> </span>
            <div className="child">
              <div className="child_parent">
                <span className="flex justify-between"> KSD LIGHT <ArrowBigRightDashIcon /> </span>
                <div className="child_parent_child">
                  <div className="child_item">Child's Child 1</div>
                  <div className="child_item">Child's Child 2</div>
                  <div className="child_item">Child's Child 3</div>
                </div>
              </div>
              <div className="child_parent">
                <span className="flex justify-between"> L & T <ArrowBigRightDashIcon /> </span>
                <div className="child_parent_child">
                  <div className="child_item">Child's Child 1</div>
                  <div className="child_item">Child's Child 2</div>
                  <div className="child_item">Child's Child 3</div>
                </div>
              </div>
              <div className="child_parent">
                <span className="flex justify-between"> OTHER LIGHT <ArrowBigRightDashIcon /> </span>
                <div className="child_parent_child">
                  <div className="child_item">Child's Child 1</div>
                  <div className="child_item">Child's Child 2</div>
                  <div className="child_item">Child's Child 3</div>
                </div>
              </div>
              <div className="child_parent">
                KSD FAN

              </div>
              <div className="child_parent">
                KSD switch

              </div>
            </div>
          </div>

          <div className="parent text-left">
            <span className="flex justify-between">  BUILDING MATERIALS <ArrowBigRightDashIcon /> </span>
            <div className="child">
              <div className="child_parent">
                Child 1
                <div className="child_parent_child">
                  <div className="child_item">Child's Child 1</div>
                  <div className="child_item">Child's Child 2</div>
                  <div className="child_item">Child's Child 3</div>
                </div>
              </div>
              <div className="child_parent">
                Child 2
                <div className="child_parent_child">
                  <div className="child_item">Child's 2 Child 1</div>
                  <div className="child_item">Child's 2 Child 2</div>
                  <div className="child_item">Child's 2 Child 3</div>
                </div>
              </div>
              <div className="child_parent">
                Child 3
                <div className="child_parent_child">
                  <div className="child_item">Child's 3 Child 1</div>
                  <div className="child_item">Child's 3 Child 2</div>
                  <div className="child_item">Child's 3 Child 3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="parent text-left">
            <span className="flex justify-between">        TILES AND MARBLES  <ArrowBigRightDashIcon /> </span>
            <div className="child">
              <div className="child_parent">
                Child 1
                <div className="child_parent_child">
                  <div className="child_item">Child's Child 1</div>
                  <div className="child_item">Child's Child 2</div>
                  <div className="child_item">Child's Child 3</div>
                </div>
              </div>
              <div className="child_parent">
                Child 2
                <div className="child_parent_child">
                  <div className="child_item">Child's 2 Child 1</div>
                  <div className="child_item">Child's 2 Child 2</div>
                  <div className="child_item">Child's 2 Child 3</div>
                </div>
              </div>
              <div className="child_parent">
                Child 3
                <div className="child_parent_child">
                  <div className="child_item">Child's 3 Child 1</div>
                  <div className="child_item">Child's 3 Child 2</div>
                  <div className="child_item">Child's 3 Child 3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="parent text-left">
            <span className="flex justify-between">       HARDWARE <ArrowBigRightDashIcon /> </span>
            <div className="child">
              <div className="child_parent">Child 1</div>
              <div className="child_parent">Child 2</div>
              <div className="child_parent">
                Child 3
                <div className="child_parent_child">
                  <div className="child_item">Child's 3 Child 1</div>
                  <div className="child_item">Child's 3 Child 2</div>
                  <div className="child_item">Child's 3 Child 3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="parent text-left">
            <span className="flex justify-between">   INTERIOR  <ArrowBigRightDashIcon /> </span>
            <div className="child">
              <div className="child_parent">Child 1</div>
              <div className="child_parent">Child 2</div>
              <div className="child_parent">
                Child 3
                <div className="child_parent_child">
                  <div className="child_item">Child's 3 Child 1</div>
                  <div className="child_item">Child's 3 Child 2</div>
                  <div className="child_item">Child's 3 Child 3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="parent text-left">
            <span className="flex justify-between">         CONSTRUCTION  <ArrowBigRightDashIcon /> </span>
            <div className="child">
              <div className="child_parent">Child 1</div>
              <div className="child_parent">Child 2</div>
              <div className="child_parent">
                Child 3
                <div className="child_parent_child">
                  <div className="child_item">Child's 3 Child 1</div>
                  <div className="child_item">Child's 3 Child 2</div>
                  <div className="child_item">Child's 3 Child 3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="parent text-left">
            <span className="flex justify-between">  CONSTRUCTION MART <ArrowBigRightDashIcon /> </span>
            <div className="child">
              <div className="child_parent">Child 1</div>
              <div className="child_parent">Child 2</div>
              <div className="child_parent">
                Child 3
                <div className="child_parent_child">
                  <div className="child_item">Child's 3 Child 1</div>
                  <div className="child_item">Child's 3 Child 2</div>
                  <div className="child_item">Child's 3 Child 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
            {renderProduct(products8, "GH2525")}
            {renderProduct(products9, "GH2525")}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt p-4">
          {renderProduct(products11, "GH2525")}
          {renderProduct(products10, "GH2525")}
          {renderProduct(products12, "GH2525")}
          {renderProduct(products13, "GH2525")}
          {renderProduct(products14, "GH2525")}
          {renderProduct(products15, "GH2525")}
          {renderProduct(products7, "GH2525")}
          {renderProduct(products8, "GH2525")}
          {renderProduct(products9, "GH2525")}
          {renderProduct(products10, "GH2525")}
          {renderProduct(products11, "GH2525")}
          {renderProduct(products12, "GH2525")}
        </div>
      </div>
      <div className='bg-white flex flex-col md:flex-row items-center md:items-start p-5 md:p-10 md:pb-0 mt-10'>
        <img src={app} alt="App Preview" className='w-full max-w-[400px] h-auto' />
        <div className='flex flex-col items-center md:items-start md:ml-10 text-center md:text-left'>
          <h1 className='text-[20px] md:text-[21px] font-semibold mb-4 max-sm:mt-5 md:mt-32 px-4 md:px-0'>
            Kshamadevi Group, Simplify your business <br />
            | Order and Recommend our products
          </h1>
          <div className='p-4 md:p-5 bg-[#843135] text-white w-full max-w-[500px] rounded-md transition-all duration-300 ease-in-out hover:scale-105 md:mt-12'>
            <h2 className='text-[18px] max-sm:text-[16px] flex items-center justify-center md:justify-start'>
              Download The App Here:<AppWindow className='ml-2 mt-2 md:ml-3' />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;