import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:justify-between items-center my-8'>
            <h1 className='text-3xl font-bold text-black'>Book Haven</h1>
            <nav className='flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:items-center lg:space-x-10 lg:text-sm text-[#131313a2] text-center font-semibold'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/listedBooks">Listed Books</NavLink>
                <NavLink to="/pagesToRead">Pages to Read</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <div className='space-x-4 text-white font-semibold text-sm'>
                <button className='bg-[#23BE0A] rounded-lg py-2 px-4'>Sign In</button>
                <button className='bg-[#59C6D2] rounded-lg py-2 px-4'>Sign Up</button>
            </div>
        </div>
    );
};

export default Header;