import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
function Navbar(props) {
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => setShowNav(!showNav);

    return (
        <div className='fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#f4a261] text-gray-200'>   
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <li>Resume</li>
                </ul>
        

            {/* Hamburger */}
            <div className='md:hidden z-10' onClick={handleClick}>
                { !showNav? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
                <ul className={!showNav ? 'hidden':'absolute top-0 left-0 h-screen bg-[#f4a261] flex flex-col justify-center items-center w-full'}>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Skills</li>
                    <li className='py-6 text-4xl'>Work</li>
                    <li className='py-6 text-4xl'>Contact</li>
                    <li className='py-6 text-4xl'><button>Resume</button></li>
                </ul>
        </div>
    );
}

export default Navbar;