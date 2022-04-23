import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from 'react-scroll';


function Home(props) {
    return (
        <div name='home' className='w-full h-screen flex justify-center align-center backGround '>
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <Fade delay={1000} triggerOnce>
                    <h1 className='text-4xl sm:text-9xl font-bold text-[#ccd6f6] mb-10 text-center'>Tishtanya Shaw</h1>
                </Fade>
                <Fade delay={1000} triggerOnce>
                      
                </Fade>
                <Slide delay={1000} triggerOnce>
                    <div className="sm:flex justify-evenly ">
                        <div className='flex items-center justify-center my-10'>
                            <Link to='about' ><button className='text-pink-600 border-4 px-6 py-3 my-3 inline-flex items-center justify-center hover:bg-pink-600 hover:text-white font-semibold rounded w-60'>Learn More</button></Link>
                        </div>
                        <div className='flex items-center justify-center my-10'>
                            <Link to='work' ><button className='text-pink-600 border-4 px-6 py-3 my-3 inline-flex items-center justify-center hover:bg-pink-600 hover:text-white font-semibold rounded w-60'>Projects</button></Link>
                        </div>
                    </div>
               </Slide>
               
            </div>
        </div>
    );
}

export default Home;