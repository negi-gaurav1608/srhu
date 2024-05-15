import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
};

return (
    <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
            <div className="flex items-center">
            <div className="text-white font-bold">
                <Link to="/"
                className="flex items-center">
                    <img src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-medical-pharmacy-logo-design-template-vector-logo-medical-icons-png-image_5215437.jpg" alt="logo" width="40px"/>
                </Link>
            </div>
            </div>
            <div className="hidden md:block">
            <NavLink to='/'
            className="text-white px-3 py-2">
                Home
            </NavLink>


            <NavLink to='/Home'
            className="text-white px-3 py-2">
                Services
            </NavLink>

            <NavLink to='/Contact'
            className="text-white px-3 py-2">
                Contact
            </NavLink>

            <NavLink to='/Login'
            className="text-white px-3 py-2">
                Login/SignUp
            </NavLink>


            
            </div>
            <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            </div>
        </div>
        {isOpen && (
            <div className="md:hidden mt-2">
            <NavLink to='/'
            className="text-white px-3 py-2">
                Home
            </NavLink>

            <NavLink to='/Home'
            className="text-white px-3 py-2">
                Services
            </NavLink>

            <NavLink to='/Contact'
            className="text-white px-3 py-2">
                Contact
            </NavLink>
            <NavLink to='/Login'
            className="text-white px-3 py-2">
                Login/SignUp
            </NavLink>
            </div>
        )}
        </nav>
    );
};

export default Navbar;