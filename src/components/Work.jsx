import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { Fade } from "react-awesome-reveal";
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi';
import {ProjectData} from '../data/Data';

function Work() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = ProjectData.length;
    
    useEffect(() => {

    },[])

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }

    return (
        <div name='work' className='w-full h-full text-gray-400 m-auto justify-center align-center'>
            
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full my-7'>
                <div className=' pb-20 flex flex-col items-center'>
                    <Fade duration={3000} triggerOnce>
                        <p className='text-4xl font-bold inline border-b-4  text-amber-900 border-pink-600'>
                            Projects
                        </p>
                    </Fade>
                    <Fade duration={3000} triggerOnce>
                        <p className='pt-6 items-center'>
                            //Check out some of my recent projects
                        </p>
                    </Fade>
                </div>
                 <div className="flex justify-center align-center overflow-hidden w-full ">
                     {ProjectData.map((project, index) => (
                      <div className='flex text-center justify-center items-center m-auto' key={index}>
                          {
                              index === currentSlide && (
                                  <>
                                      <BiLeftArrow style={{fontSize: '200px', marginRight: '90px'}} onClick={prevSlide}/>
                                       <div className="flex flex-col relative aspect-w-16 aspect-h-9">
                                        <div className='flex w-full mt-4 shadow-l relative select-none '>
                                            <Tilt className='Tilt scale-x-100'>
                                            <img className='w-full Tilt-inner' src={project.image} alt='project-img' width='1000em' />
                                            </Tilt>
                                            </div>
                                            <div  className='flex my-10'>
                                                {
                                                    project.tools.map((tool) => (
                                                    <>
                                                        <img className='w-12 mx-auto ' src={tool} alt='project tools' />
                                                    </>
                                                    ))
                                                }
                                            </div>
                                            <div className='w-600 text-base'>
                                                <h1 className='text-amber-800 text-2xl text-left font-bold tracking-wider animate__fadeInLeft mb-5'>{project.title}</h1>
                                                    <p className='text-left text-l w-300 '>{project.desc}</p>
                                            </div>
                                            <div className='flex justify-center my-4 space-x-4'>
                                                <button className='relative inline-flex items-center justify-center overflow-hidden text-sm text-white rounded-md group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-pink dark:text-orange focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 hover:scale-110'>
                                                    <span className='relative px-3 py-1.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'><a href={project.live}>Live</a></span>
                                                </button>
                                                <button className='text-l text-transparent bg-clip-text bg-gradient-to-br from-pink-700 to-orange-300 '>
                                                    <span className='hover:text-yellow-500'><a href={project.github}>Source Code</a></span>
                                                </button>
                                            </div>
                                        </div>
                                        <BiRightArrow style={{fontSize: '200px', marginLeft: '90px'}}  onClick={nextSlide}/>
                            )
                                  </>
                        )}
                      </div>
                     ))}
                 </div>
                <br/>
            </div>
        </div>
    );
}

export default Work;