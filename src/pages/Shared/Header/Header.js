import React, { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const {user, logOut, isLoading} = useAuth() || {};
    const location = useLocation();

    const btn = useRef();
    const menu = useRef();
    const handleMenu = () => {
        menu.current.classList.toggle('hidden');
        menu.current.classList.add('flex', 'flex-col')
    }
    let name="UnKnown";
    if(isLoading === false && user.displayName !== undefined){
        name = user?.displayName;
        const nameParts = name.split(' ');
        if(nameParts.length>1 && nameParts[0].length<=3){
            name=nameParts[0].concat(' ',nameParts[1]);
        }
        else{
            name=nameParts[0];
        }
    }
    return (
        <div className="bg-white sticky top-0 shadow z-50 py-1">
            <div className="lg:w-11/12 md:w-11/12 w-11/12 grid grid-cols-4 mx-auto items-center">
                <NavLink to="/home"><img src="https://i.ibb.co/fHpPfQ1/Logo.png" alt="" className="lg:w-3/5 md:w-4/6 w-full" /></NavLink>
                <i onClick={handleMenu} ref={btn} className="fas fa-bars md:hidden col-span-3 sm:text-3xl text-2xl text-right"></i>
                <nav ref ={menu} className="hidden font-roboto menu md:col-span-3 col-span-4 md:flex md:flex-row items-center justify-end">
                    <NavLink to="/home" activeClassName="text-green-500 border-b-2 border-green-500" className={`lg:px-2.5 px-1 hover:text-green-500 md:text-sm lg:text-base font-medium ${location.pathname === '/' ? 'text-green-500 border-b-2 border-green-500' : ''}  capitalize`}>Home</NavLink>
                    <NavLink to="/packages" activeClassName="text-green-500 border-b-2 border-green-500" className={`lg:px-2.5 px-1 hover:text-green-500 md:text-sm lg:text-base font-medium ${location.pathname === '/team' ? 'text-green-500 border-b-2 border-green-500' : ''}  capitalize`}>Packages</NavLink>
                    {user?.email ? 

                    <span className="md:inline flex flex-col text-center">
                        <NavLink to = "/add-package" activeClassName="text-green-500 border-b-2 border-green-500" className="lg:px-2.5 px-1 lg:text-base md:text-sm hover:text-green-500 font-medium  capitalize">Add Package</NavLink>
                        <NavLink to = "/my-orders" activeClassName="text-green-500 border-b-2 border-green-500" className="lg:px-2.5 px-1 lg:text-base md:text-sm hover:text-green-500 font-medium capitalize">My orders</NavLink>
                        <NavLink to = "/all-orders" activeClassName="text-green-500 border-b-2 border-green-500" className="lg:px-2.5 px-1 lg:text-base md:text-sm hover:text-green-500 font-medium capitalize">Manage All orders</NavLink>
                        <img src={user.photoURL} alt="" className="lg:w-8 md:w-7 w-12 mx-auto rounded-xl md:inline-block block md:ml-2" />
                        <h5 className="md:inline-block block px-1 md:text-sm lg:text-base">{name}</h5>
                        <button className="md:inline-block text-green-600 block font-medium lg:mx-0.5 px-1 hover:text-green-500 md:text-sm lg:text-base border rounded-lg shadow-inner border-gray-600" onClick={logOut}><i class="fas fa-sign-out-alt"></i></button>
                    </span> :
                    <span className="md:inline text-center flex flex-col">
                        <NavLink to="/login" activeClassName="text-green-500 border-b-2 border-green-500" className=" capitalize font-medium md:text-sm lg:text-base lg:px-2.5 px-1 hover:text-green-500">Login</NavLink>
                    </span>}
                </nav>
            </div>
        </div>
    );
};

export default Header;