import React from 'react';
import KB from '../assets/Projects/keitabeauty.png';
import PH from '../assets/Projects/planthaven.png';
import EH from '../assets/Projects/empirehomes.png';
import Tilt from 'react-parallax-tilt';

function Work(props) {
    return (
        <div name='work' className='w-full text-gray-400 items-center'>
            
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full my-7'>
                <div className='pb-8 mt-10'>
                    <p className='md:items-center text-4xl font-bold inline border-b-4  text-gray-400 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>
                        Check out some of my recent work
                    </p>
                </div>

                {/* Container */}          
                    <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                        <div className='sm:text-right'>
                            <h1 className='text-black text-2xl text-left font-bold tracking-wider '>Keita Beauty Ecommerce Store</h1>
                            <p className='text-left'>Keita's Beauty is an online E-commerce Website where you can purchase your favorite make-up products for a reasonable price. Redux state management is used to handle cart functionality.</p>
                            <div className='flex my-6'>
                                <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg  dark:text-white focus:ring-4 dark:focus:ring-pink-800'>View Live</button>
                                <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>Source Code</button>
                            </div>             
                        </div>
                            <div className='flex w-full my-4 '>
                               <Tilt className='Tilt'><img className='Tilt-inner' src={KB} alt='project-img' width='1000rem' height='1000rem' /></Tilt>
                            </div>
                    </div>
                     <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                        <div className='sm:text-right'>
                            <h1 className='text-black text-2xl text-left font-bold tracking-wider '>Plant Haven</h1>
                            <p className='text-left'>House Plant Heaven is an app where you can find a variety of indoor plants. You can expand your knowledge about different varieties, choose plants based on your specific needs, find distributers, and save your plant crushes to a favorites list. This project was created using React, CSS, HTML, JavaScript, Node.js, Express, MongoDB, Mongoose, Heroku, and Netlify.</p>
                            <div className='flex my-6'>
                                <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg  dark:text-white focus:ring-4 dark:focus:ring-pink-800'>View Live</button>
                                <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>Source Code</button>
                            </div>             
                        </div>
                            <div className='flex w-full my-4 '>
                               <Tilt className='Tilt'><img className='Tilt-inner' src={PH} alt='project-img' width='1000rem' height='1000rem' /></Tilt>
                            </div>
                    </div>
                     <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                        <div className='sm:text-right'>
                            <h1 className='text-black text-2xl text-left font-bold tracking-wider '>Empire Homes</h1>
                            <p className='text-left'>Empire Homes is a real estate listing website for homebuyers looking to purchase a new home. Users can make filtered searches in any city they are looking to relocate and save property listings that are actively for sale on the market. In the future, I would like to add a messaging platform so users will be able to send messages and request appointments in the app.</p>
                            <div className='flex my-6'>
                                <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg  dark:text-white focus:ring-4 dark:focus:ring-pink-800'>View Live</button>
                                <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>Source Code</button>
                            </div>             
                        </div>
                            <div className='flex w-full my-4 '>
                               <Tilt className='Tilt'><img className='Tilt-inner' src={EH} alt='project-img' width='1000rem' height='1000rem' /></Tilt>
                            </div>
                    </div>
                <br/>
            </div>
        </div>
    );
}

export default Work;