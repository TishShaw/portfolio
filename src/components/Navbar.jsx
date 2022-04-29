import React, { useState } from 'react';
import Logo from '../assets/images/icon.png';
import pdf from '../assets/Tishtanya-Shaw-resume.docx.pdf';
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaFileAlt} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import { Link } from 'react-scroll';

function Navbar(props) {
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => setShowNav(!showNav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-200 z-[1]'>
                <div>
                    <img src={Logo} alt='LogoImage' style={{width: '200px', marginLeft: '-40px'}} />
                </div>   
                <ul className='hidden md:flex'>
                    <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                    <li><Link to='about' smooth={true} duration={500}>About</Link></li>
                    <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                    <li><Link to='work' smooth={true} duration={500}>Work</Link></li>
                    <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>       
                </ul>

            {/* Hamburger */}
            <div className='md:hidden z-10 text-3xl' onClick={handleClick}>
                { !showNav? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
                <ul className={!showNav ? 'hidden':'absolute top-0 left-0 h-screen bg-[#8e5d35] flex flex-col justify-center items-center w-full'}>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick}  to='contact' smooth={true} duration={500}>Contact</Link></li>
                    <li className='py-6 text-4xl'>
                        <a className='flex justify-between items-center w-full'href={pdf}target='_blank' rel="noreferrer">
                                Resume<FaFileAlt size={30}/>
                        </a>
                    </li>
                </ul>

                {/* Social icons */}
                <div className='hidden lg:flex fixed flex-col top-[35%] left-0 items-center'>
                    <ul>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                            <a className='flex justify-between items-center w-full' href='https://www.linkedin.com/in/tishtanya-shaw/' target='_blank' rel="noreferrer">
                                LinkedIn<FaLinkedin size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                            <a className='flex justify-between items-center w-full' href='https://github.com/TishShaw' target='_blank' rel="noreferrer">
                                Github<FaGithub size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                            <a className='flex justify-between items-center w-full' href='mailto:Tishtanya.shaw24@gmail.com' target='_blank' rel="noreferrer">
                                Email<HiOutlineMail size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                            <a className='flex justify-between items-center w-full'href={pdf}target='_blank' rel="noreferrer">
                                Resume<FaFileAlt size={30}/>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
    );
}

export default Navbar;