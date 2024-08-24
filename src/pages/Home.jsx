import React, { useEffect, useRef } from 'react';
import { ChevronsRight, ArrowBigRightDashIcon } from "lucide-react";
import img1 from "./img/1.jpg";
import products1 from "./img/products1.jpg";
import products2 from "./img/products2.jpg";
import products3 from "./img/products3.jpg";
import products4 from "./img/products4.jpg";
import products5 from "./img/products5.jpg";
import products6 from "./img/products6.jpg";
import singlephoto from "./img/singlephoto.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {
    const countersRef = useRef({});
    const sectionRef = useRef(null);

    useEffect(() => {
        const animateCounter = (element) => {
            const target = +element.getAttribute('data-target');
            const duration = 2000;
            const interval = 50;
            const increment = target / (duration / interval);

            const updateCounter = () => {
                const current = +element.innerText.replace('+', '');
                const nextValue = current + increment;

                if (nextValue < target) {
                    element.innerText = Math.ceil(nextValue) + '+';
                    setTimeout(updateCounter, interval);
                } else {
                    element.innerText = target + '+';
                }
            };

            updateCounter();
        };

        const handleIntersect = (entries) => {
            if (entries[0].isIntersecting) {
                Object.values(countersRef.current).forEach(animateCounter);
                observer.disconnect();
            }
        };

        const observer = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: '0px',
            threshold: 0.8
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="relative">
                    <img src={img1} alt="uPVC Windows & Doors" className="z-0" />
                    <div className="absolute bottom-5 left-0 right-0 bg-gray-800 bg-opacity-50 text-white h-[170px] w-[650px] ml-10 max-sm:hidden">
                        <p className='ml-12 mt-2'>
                            <span className='text-[20px]'> Welcome to</span> <span className='font-bold text-[28px]'> kshamadevigroup</span>
                        </p>
                        <h2 className='ml-12 font-bold text-[28px]'>uPVC Windows & Doors</h2>
                        <a
                            href="#"
                            className="flex items-center justify-center bg-white h-[50px] w-[300px] text-[#843135] hover:bg-[#843135] hover:text-white hover:pl-3 transition-all duration-300 ml-12 mt-4 text-[18px] text-center"
                        >
                            View Products
                            <ChevronsRight className='font-bold mt-1 ml-3' />
                        </a>
                    </div>
                    <div className="bg-[#843135] text-white h-[250px] w-[100%] md:hidden">
                        <p className='ml-5 mt-2'>
                            <span className='text-[20px]'> Welcome to</span> <span className='font-bold text-[25px]'> kshamadevigroup</span>
                        </p>
                        <h2 className='ml-5 font-bold text-[22px]'>uPVC Windows & Doors</h2>
                        <a
                            href="#"
                            className="flex items-center justify-center bg-white h-[50px] w-[250px] text-[#843135] hover:bg-[#843135] hover:text-white hover:pl-3 transition-all duration-300 ml-5 mt-4 text-[18px] text-center"
                        >
                            View Products
                            <ChevronsRight className='font-bold mt-1 ml-3' />
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='ml-10 mt-10 mb-10'>
                <div className='text-center flex'>
                    <h2 className="text-red-800 text-[33px]">Products</h2>
                    <hr className="border-t-[1.5px] border-red-800 w-48 mt-7 max-sm:w-[120px]" />
                </div>
                <h3 className="text-black text-[35px]">Our Product Category</h3>
            </div>

            <div className='grid grid-cols-3 max-xl:grid-cols-2 gap-4 ml-10 mr-10 mb-12 max-sm:grid-cols-1'>
                {[products1, products6, products2, products5, products3, products4].map((product, index) => (
                    <div key={index} className='hover:shadow-[0px_0px_30px_0px_rgba(0,0,0,0.2)]'>
                        <img src={product} alt={`Product ${index + 1}`} className="w-full h-[350px] max-sm:h-[200px]" />
                        <div className='bg-white flex justify-between'>
                            <h3 className='p-6 font-bold'>LIGHT</h3>
                            <div className='mr-6 mt-2 border-2 border-[#843135] text-[#843135] w-12 h-12 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#843135] group'>
                                <ArrowBigRightDashIcon className='w-8 h-8 transition-colors duration-300 ease-in-out group-hover:text-white' />
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <div className='flex flex-col bg-white'>
                <img src={singlephoto} alt="Single" />
                <div className='flex pb-10'>
                    <div className='mr-10 ml-10'>
                        <div className='text-center flex'>
                            <h2 className="text-red-800 text-[30px] max-sm:text-[27px]">About Us</h2>
                            <hr className="border-t-[1.5px] border-red-800 w-80 mt-6 max-sm:w-[120px]" />
                        </div>
                        <h2 className='text-[#333] text-[30px] mt-3 font-semibold max-sm:text-[25px]'>Who Are We?</h2>
                        <p className='text-[16px] text-[#4b4a4a] mt-1'>
                            Kshamadevi Group started its initial business from Kshamadevi International Pvt Ltd which was founded on October 13, 2005. The company took its name from a highly respectful and popular temple in Sindupalchowk District. To expand its business as a group, Kshamadevi Group was established in 2010 with a slogan, "One stop solution for all construction needs." With a team of people having extensive experience in the related field, strong financial position, and availability of resources...
                        </p>
                        <a
                            href="#"
                            className="flex items-center justify-center h-[50px] w-[570px] border-2 border-[#843135] text-[#843135] hover:bg-[#843135] hover:text-white hover:pl-3 transition-all duration-300 mt-7 text-[18px] text-center max-sm:w-[240px]"
                        >
                            Know More
                            <ChevronsRight className='font-bold mt-1 ml-3' />
                        </a>
                    </div>
                </div>

                <div className="bg-[#f1f1f1] flex items-center justify-center p-2" ref={sectionRef}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-sm:gap-3 text-center max-sm:text-[14px] m-10 ">
                        {['clients', 'awards', 'projects', 'experience'].map((item, index) => (
                            <div key={index}>
                                <h2
                                    className="text-4xl max-sm:text-[25px] font-bold text-[#843135]"
                                    ref={el => countersRef.current[item] = el}
                                    data-target={item === 'clients' ? '100000' : item === 'awards' ? '18' : item === 'projects' ? '100' : '14'}
                                >
                                    0+
                                </h2>
                                <p className="text-[#843135]">
                                    {item === 'clients' && 'Clients Satisfaction'}
                                    {item === 'awards' && 'Awards Gained'}
                                    {item === 'projects' && 'Projects Completed'}
                                    {item === 'experience' && 'Years of Experience'}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
