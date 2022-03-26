import React, { useState } from 'react';
import Logo from '../assets/images/icon.png';
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaFileAlt} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

function Navbar(props) {
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => setShowNav(!showNav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f4a261] text-gray-200'>
                <div>
                    <img src={Logo} alt='Logo image' style={{width: '200px', marginLeft: '-40px'}} />
                </div>   

                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                   
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
                   
                </ul>

                {/* Social icons */}
                <div className='hidden lg:flex fixed flex-col top-[35%] left-0 items-center'>
                    <ul>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                            <a className='flex justify-between items-center w-full' href='/'>
                                LinkedIn<FaLinkedin size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                            <a className='flex justify-between items-center w-full' href='/'>
                                Github<FaGithub size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                            <a className='flex justify-between items-center w-full' href='/'>
                                Email<HiOutlineMail size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                            <a className='flex justify-between items-center w-full' href='/'>
                                Resume<FaFileAlt size={30}/>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
    );
}

export default Navbar;