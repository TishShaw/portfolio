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
                      <div className='flex text-center justify-center items-center m-auto sm:scroll-smooth sm:overflow-scroll ' key={index}>
                          {
                              index === currentSlide && (
                                  <>
                                      <BiLeftArrow style={{fontSize: '300px', marginRight: '130px'}} onClick={prevSlide}/>
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
                                                <h1 className='text-amber-900 text-2xl text-left font-bold tracking-wider animate__fadeInLeft mb-5'>{project.title}</h1>
                                                    <p className='text-left text-xl w-300 '>{project.desc}</p>
                                            </div>
                                        </div>
                                        <BiRightArrow style={{fontSize: '300px', marginLeft: '130px'}}  onClick={nextSlide}/>
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