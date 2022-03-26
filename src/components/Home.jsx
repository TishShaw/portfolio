import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'

function Home(props) {
    return (
        <div name='home' className='w-full h-screen'>

            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tishtanya Shaw</h1>
                <h3 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h3>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Full Stack Developer specializing in building exceptional digital experiences and user-friendly websites.</p>
                <div>
                    <button className='text-pink-600 border-2 px-6 py-3 my-3 flex items-center hover:bg-pink-600 hover:border-b-pink-600 hover:text-white'>View Work <HiArrowNarrowRight className='ml-3' /></button>
                </div>
            </div>

        </div>
    );
}

export default Home;