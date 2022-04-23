import React from 'react';
import { Slide } from "react-awesome-reveal";
import FlowerAni from './FlowerAni';
import pdf from '../assets/Tishtanya-Shaw-resume.pdf';

function About(props) {
    return (
        <div name='about' className='w-full h-screen items-center text-gray-400'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='flex items-center justify-center flex-col pb-8 pl-4'>
                        <Slide direction="down" duration={3000} triggerOnce>
                            <p className='text-4xl font-bold  border-b-4 border-pink-600 text-amber-900'>About Me</p>
                        </Slide>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 fade-in-left'>
                        <Slide duration={3000} triggerOnce>
                            <div className='sm:text-right text-4xl font-bold'>
                                <div className='border-4 border-pink-600 h-96'>
                                    <FlowerAni />
                                </div>
                            </div>
                        </Slide>
                        <Slide duration={3000} direction='right' triggerOnce>
                            <div>
                                <p>Hi there! my name is 
                                    Tishtanya. I'm a web developer from Maryland. I'm passionate about technology and I love creating innovative and performant applications that make people's lives easier. I find learning new technologies and creating solutions to difficult problems massively rewarding. 
                                </p>
                                <br />
                                <p>At the moment, i'm building a web application for a client utlizing MERN and firebase. Also, i'm currently learning data structures and algorithms that can improve the effiency and optimization of computer programs. </p>
                                <div className='flex items-center justify-center'><button className='items-center my-12  from-purple-50 text-pink-600 border-4 px-16 py-2'><a href={pdf}target='_blank' rel="noreferrer">
                                Resume
                            </a></button></div>
                            </div>
                
                        </Slide>
                    </div>
                </div>
            </div>
     
    );
}

export default About;