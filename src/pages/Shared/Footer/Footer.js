import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="md:p-10 sm:p-5 p-3 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-3 bg-gray-200">
            <div id="logo-slogan-section" className="col-span-1">
                <img src="https://i.ibb.co/fHpPfQ1/Logo.png" className="w-2/4" alt="" />
                <p className="text-gray-600 text-sm mx-4">Footprints is a tour planner and your travel partner. You can join our tour events to travel with a group of curious traveller. Stay with us and Explore the beauty of our planet!</p>
            </div>
            <div id="address-section" className="col-span-1">
                <h2 className="md:text-2xl text-xl font-medium text-stromboli  mb-3">Address</h2>
                <p className=" md:text-base text-sm">&emsp;<i className="fas fa-map-marker-alt pb-2 text-coral"></i> <span className="font-medium">Branch-1 :</span> #H-302B, Sky Tower, New York</p>
                <p className=" md:text-base text-sm">&emsp;<i className="fas fa-map-marker-alt pb-2 text-coral"></i> <span className="font-medium">Branch-2 :</span> #H-302B, king palace, UAE</p>
                <p className="">&emsp;<i className="fas fa-phone-alt text-green-custom"></i> 97239675346</p>
            </div>
            <div id="links-section" className="col-span-1">
                <h2 className="md:text-2xl text-xl font-medium text-stromboli pb-3">Useful links</h2>
                <NavLink to="/home" className="block">&emsp;<i className="fas fa-link"></i> Home</NavLink>
                <NavLink to="/home" className="block">&emsp;<i className="fas fa-link"></i> Tour Packages</NavLink>
                <NavLink to="/home" className="block">&emsp;<i className="fas fa-link"></i> Our Blogs</NavLink>
                <NavLink to="/home" className="block">&emsp;<i className="fas fa-link"></i> Login</NavLink>
            </div>
            <div className="md:col-span-3 sm:col-span-2 col-span-1 pt-4">
                <p className="max-w-md mx-auto text-center text-base text-gray-800 border-b-2 border-gray-700" style={{ lineHeight: 0.1 }}><span className="bg-gray-200 px-2">&copy; All Rights reserved - Nasir 2021</span></p>
            </div>
        </div>
    );
};

export default Footer;