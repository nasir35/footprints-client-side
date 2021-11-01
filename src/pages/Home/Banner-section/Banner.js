import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '@splidejs/splide/dist/css/splide.min.css';

const Banner = () => {
    return (
        <div>

            <Splide options={ {
          type         : 'loop',
          autoplay     : true,
          pauseOnHover : false,
          resetProgress: false,
          arrows       : 'slider'
        } }
        hasSliderWrapper
        hasAutoplayProgress>
                <SplideSlide>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3 md:p-12 sm:p-6 p-3 bg-indigo-50">
                <img src="https://i.ibb.co/Pmk8J61/Alps-Switzerland.jpg" className="rounded-lg md:ml-10 ml-0" alt="" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="md:text-2xl text-xl text-gray-700 font-roboto font-medium">Alps, Switzerland!</h2>
                    <p className="md:w-3/4 w-full text-center">Explore the most touching scenario of Nature. Get closer to the soul of earth!</p>

                    <p className="md:mt-8 text-center mt-4 text-gray-500">Camping event will be held on 27th November, 2021</p>
                    <p>Camping duration : 3 days, 2 Night</p>
                    <div>
                    <NavLink to="/packages" className="text-lg mr-5 inline-block mt-5 font-roboto bg-blue-700 border border-blue-700 text-white px-5 py-1 rounded">Book now</NavLink>
                    <NavLink to="/packages" className="text-lg font-roboto inline-block border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-5 py-1 rounded transition">More places</NavLink>
                    </div>
                </div>
            </div>
                </SplideSlide>
                <SplideSlide>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3 md:p-12 sm:p-6 p-3 bg-indigo-50">
                <img src="https://i.ibb.co/BffQsCD/pura-ulun-danu-bratan-temple-bali-indonesia-30824-288.jpg" className="rounded-lg md:ml-10 ml-0" alt="" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="md:text-2xl text-xl text-gray-700 font-roboto font-medium">Bali, Indonesia!</h2>
                    <p className="md:w-3/4 w-full text-center">Explore the most touching scenario of Nature. Get closer to the soul of earth!</p>

                    <p className="md:mt-8 mt-4 text-center text-gray-500">Camping event will be held on 15th November, 2021</p>
                    <p>Camping duration : 4 days, 3 Night</p>
                    <div>
                    <NavLink to="/packages" className="text-lg mr-5 inline-block mt-5 font-roboto bg-blue-700 border border-blue-700 text-white px-5 py-1 rounded">Book now</NavLink>
                    <NavLink to="/packages" className="text-lg font-roboto inline-block border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-5 py-1 rounded transition">More places</NavLink>
                    </div>
                </div>
            </div>
                </SplideSlide>
                <SplideSlide>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3 md:p-12 sm:p-6 p-3 bg-indigo-50">
                <img src="https://i.ibb.co/M1m4cx8/Thailand.jpg" className="rounded-lg md:ml-10 ml-0 " alt="" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="md:text-2xl text-xl text-gray-700 font-roboto font-medium">Railay Beach, Thailand!</h2>
                    <p className="md:w-3/4 w-full text-center">Explore the most touching scenario of Nature. Get closer to the soul of earth!</p>

                    <p className="md:mt-8 mt-4 text-center text-gray-500">Camping event will be held on 24th November, 2021</p>
                    <p>Camping duration : 2 days, 1 Night</p>
                    <div>
                    <NavLink to="/packages" className="text-lg mr-5 inline-block mt-5 font-roboto bg-blue-700 border border-blue-700 text-white px-5 py-1 rounded">Book now</NavLink>
                    <NavLink to="/packages" className="text-lg font-roboto inline-block border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-5 py-1 rounded transition">More places</NavLink>
                    </div>
                </div>
            </div>
                </SplideSlide>

            </Splide>
            
        </div>
    );
};

export default Banner;