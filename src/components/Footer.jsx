import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai'; 


function Footer(props) {
    let date = new Date();
	let year = date.getFullYear();

    return (
        <div className='w-full text-pink-600 text-center flex justify-center items-center'>
            <hr />
            <div className='flex justify-center flex-col'>
                <ul className='md:hidden flex justify-start items-center text-center p-5 '>
                    <li className=' text-xl border-pink-600 '><a href='https://github.com/TishShaw' target='_blank' rel='noreferrer'>
                        <AiFillGithub className='border-pink-600 text-xl' />
                    </a></li>
                    <li className=''><a href='https://www.linkedin.com/in/tishtanya-shaw/' target='_blank' rel='noreferrer'>
                        <FaLinkedinIn className='border-pink-600  social-icon text-xl' />
                    </a></li>
                    <li className=''><a href='mailto:Tishtanya.shaw24@gmail.com' target='_blank' rel="noreferrer">
                        <MdEmail className='social-icon text-xl' />
                    </a></li>
                </ul>
                <div className=''>
                    <h3>Copyright © {year} </h3>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;