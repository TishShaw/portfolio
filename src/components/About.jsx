import React from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';

function About(props) {
    return (
        <div name='about' className='w-full h-screen items-center text-gray-400'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                        </div>
                         <br />
                    </div>
                
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p>Hi. I'm Tish, pleasure  to meet you! Please take a look around.</p>
                        </div>
                        <div>
                            <p>I am passionate about building exceptional software that improves the lives of those around me. I specialize in creating web applications for clients.</p>
                            <br />
                            <p>Here are a few technologies i've been working with recently:</p>

                            <div className='flex my-4'>
                                <ul>
                                    <li className='flex justify-center items-center mr-3'><FaAngleDoubleRight />Javascript</li>
                                    <li className='flex justify-center items-center mr-3'><FaAngleDoubleRight />React</li>
                                    <li className='flex justify-center items-center mr-3'><FaAngleDoubleRight /> Node.js</li>
                                
                                </ul>
                                <ul>
                            
                                    <li className='flex justify-center items-center mr-3'><FaAngleDoubleRight /> TypeScript</li>
                                    <li className='flex justify-center items-center mr-3'><FaAngleDoubleRight /> Nest.js</li>
                                    <li className='flex justify-center items-center mr-3'><FaAngleDoubleRight /> Django</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
    );
}

export default About;