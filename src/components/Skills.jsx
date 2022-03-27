import React from 'react';
import HTML from '../assets/icons/html.png';
import JAVASCRIPT from '../assets/icons/javascript.png';
import CSS from '../assets/icons/css.png';
import REACT from '../assets/icons/react-original.svg';
import TYPESCRIPT from '../assets/icons/typescript-plain.svg';
import PYTHON from '../assets/icons/python-original.svg';
import MONGO from '../assets/icons/mongo.png';
import AWS from '../assets/icons/aws.png';
import { Fade, Slide } from "react-awesome-reveal";

function Skills(props) {
    return (
        <div name='skills' className='w-full h-screen items-center text-gray-400 my-20'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <Slide direction='left' triggerOnce>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 mt-10 text-amber-900'>Skills</p>
                    </Slide>
                    <Fade delay={1000} triggerOnce>
                        <p className='py-4'>Technologies i've worked with</p>
                    </Fade>
                </div>
                
                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <Fade cascade delay={2000} triggerOnce>
                        <div className='shadow-md hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                            <p className='my-4'>HTML</p>
                        </div>
                         <div className='shadow-md hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={JAVASCRIPT} alt='HTML icon' />
                            <p className='my-4'>JAVASCRIPT</p>
                        </div>
                        <div className='shadow-md hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={CSS} alt='HTML icon' />
                            <p className='my-4'>CSS</p>
                        </div>
                         <div className='shadow-md hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={REACT} alt='HTML icon' />
                            <p className='my-4'>REACT</p>
                        </div>
                         <div className='shadow-md hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={TYPESCRIPT} alt='HTML icon' />
                            <p className='my-4'>TYPESCRIPT</p>
                        </div>
                         <div className='shadow-md hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={PYTHON} alt='HTML icon' />
                            <p className='my-4'>PYTHON</p>
                        </div>
                         <div className='shadow-md hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={MONGO} alt='HTML icon' />
                            <p className='my-4'>MongoDB</p>
                        </div>
                         <div className='shadow-md hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={AWS} alt='HTML icon' />
                            <p className='my-4'>AWS</p>
                        </div>
                        </Fade>
                    
                    </div>
               
            </div>
        </div>
    );
}

export default Skills;