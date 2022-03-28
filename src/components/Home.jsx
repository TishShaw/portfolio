import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from 'react-scroll';


function Home(props) {
    return (
        <div name='home' className='w-full h-screen'>
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <Fade triggerOnce>
                    <p className='text-pink-600'>Hi, my name is</p>
                </Fade>
                <Fade delay={1000} triggerOnce>
                    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tishtanya Shaw</h1>
                </Fade>
                <Fade delay={1000} triggerOnce>
                    <h3 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h3>
                </Fade>
                <Fade delay={3000} triggerOnce>
                    <p className='text-[#8892b0] py-4 max-w-[700px]'>I specialize in building exceptional digital experiences and user-friendly websites.</p>
                </Fade>
                <Slide delay={4000} triggerOnce>
                    
                    <div>
                        <Link to='contact' ><button className='text-pink-600 border-4 px-6 py-3 my-3 inline-flex items-center  hover:bg-pink-600 hover:text-white font-semibold rounded '>Hire Me <HiArrowNarrowRight className='ml-3 buttonEl'/></button></Link>
                    </div>
               </Slide>
            </div>
        </div>
    );
}

export default Home;