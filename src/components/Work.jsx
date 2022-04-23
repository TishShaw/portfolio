import React from 'react';
import KB from '../assets/Projects/keitabeauty.png';
import PH from '../assets/Projects/planthaven.png';
import EH from '../assets/Projects/empirehome.png';
import Tilt from 'react-parallax-tilt';
import { Fade, Slide } from "react-awesome-reveal";

function Work(props) {
    return (
        <div name='work' className='w-full text-gray-400'>
            
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full my-7'>
                <div className='pb-8 mt-10 flex flex-col items-center'>
                    <Fade duration={3000} triggerOnce>
                        <p className='text-4xl font-bold inline border-b-4  text-amber-900 border-pink-600'>
                            Projects
                        </p>
                    </Fade>
                    <Fade duration={3000} triggerOnce>
                        <p className='py-6 items-center'>
                            // Check out some of my recent projects
                        </p>
                    </Fade>
                </div>

                {/* Container */}          
                    <div className='grid sm:grid-cols-2  gap-4 mb-10'>
                        
                            <div className='sm:text-right '>
                                <Slide triggerOnce>
                                    <div className='w-600 text-base'>
                                        <h1 className='text-amber-900 text-2xl text-left font-bold tracking-wider animate__fadeInLeft mb-5'>Keita Beauty Ecommerce Store</h1>
                                        <p className='text-left'>Keita's Beauty is an online E-commerce Website where you can purchase your favorite make-up products for a reasonable price. Redux state management is used to handle cart functionality.</p>
                                    </div>
                                <div className='flex my-6'>
                                    <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm hover:bg-pink-600 hover:text-white text-pink-600 font-semibold py-2 px-4 border border-pink-400 rounded shadow'><a href='http://keita-beauty-frontend.vercel.app/' target='_blank' rel="noreferrer">View Live</a></button>
                                    <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium hover:border-b-pink-600 '><a href='https://github.com/TishShaw/KeitaBeauty-frontend' target='_blank' className='hover:text-pink-600' rel="noreferrer">Source Code</a></button>
                                </div>
                                </Slide>
                            
                            </div>
                                <Slide duration={4000}  direction='right' triggerOnce>
                                <div className='flex w-full my-4 shadow-xl'>
                                   <Tilt className='Tilt scale-x-125'><img className='w-full Tilt-inner' src={KB} alt='project-img' width='1000rem' height='1000rem' /></Tilt>
                                </div>
                                </Slide>
                            </div>
                        
                    <div className='grid sm:grid-cols-2  gap-4 mb-10'>
                        
                            <div className='sm:text-right '>
                                <Slide triggerOnce>
                                    <div className='w-600 text-base'>
                                        <h1 className='text-amber-900 text-2xl text-left font-bold tracking-wider animate__fadeInLeft mb-5'>Plant Haven</h1>
                                        <p className='text-left'>House Plant Heaven is an app where you can find a variety of indoor plants. You can expand your knowledge about different varieties, choose plants based on your specific needs, find distributers, and save your plant crushes to a favorites list. This project was created using React, CSS, HTML, JavaScript, Node.js, Express, MongoDB, Mongoose, Heroku, and Netlify.</p>
                                    </div>
                                <div className='flex my-6'>
                                    <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm hover:bg-pink-600 hover:text-white text-pink-600 font-semibold py-2 px-4 border border-pink-400 rounded shadow'><a href='https://plant-haven.netlify.app/' target='_blank' rel="noreferrer">View Live</a></button>
                                    <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium '><a className='hover:text-pink-600' href='https://github.com/seir-1115-p3-squad6/project3' target='_blank' rel="noreferrer">Source Code</a></button>
                                </div>
                                </Slide>
                            
                            </div>
                                <Slide duration={4000} direction='right' triggerOnce>
                                <div className='flex w-full my-4 shadow-xl'>
                                   <Tilt className='Tilt scale-x-125'><img className='w-full Tilt-inner' src={PH} alt='project-img' width='1000rem' height='1000rem' /></Tilt>
                                </div>
                                </Slide>
                            </div>
                    <div className='grid sm:grid-cols-2  gap-4 mb-10'>
                        
                            <div className='sm:text-right '>
                                <Slide triggerOnce>
                                    <div className='w-600 text-base'>
                                        <h1 className='text-amber-900 text-2xl text-left font-bold tracking-wider animate__fadeInLeft mb-5'>Empire Home Real Estate</h1>
                                        <p className='text-left'>Empire Homes is a real estate listing website for homebuyers looking to purchase a new home. Users can make filtered searches in any city they are looking to relocate and save property listings that are actively for sale on the market. In the future, I would like to add a messaging platform so users will be able to send messages and request appointments in the app.</p>
                                    </div>
                                <div className='flex my-6'>
                                    <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm hover:bg-pink-600 hover:text-white text-pink-600 font-semibold py-2 px-4 border border-pink-400 rounded shadow'><a href='https://empirehomes.netlify.app/' target='_blank' rel="noreferrer">View Live</a></button>
                                    <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium'><a className='hover:text-pink-600' href='https://github.com/TishShaw/empire-homes' target='_blank' rel="noreferrer">Source Code</a></button>
                                </div>
                                </Slide>
                            
                            </div>
                                <Slide duration={4000} direction='right' triggerOnce>
                                <div className='flex w-full my-4 shadow-xl'>
                                   <Tilt className='Tilt scale-x-125'><img className='w-full Tilt-inner' src={EH} alt='project-img' width='1000rem' height='1000rem' /></Tilt>
                                </div>
                                </Slide>
                            </div>
                <br/>
            </div>
        </div>
    );
}

export default Work;