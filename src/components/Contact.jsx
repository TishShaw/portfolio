import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";

function Contact(props) {
    return (
       <div name='contact' className='w-full flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/c6b09432-7b2f-45da-98f5-59cdaef6dc0c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 mt-10 flex flex-col items-center'>
                <Slide direction='down'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-amber-900'>Contact</p>
                </Slide>
                <p className='text-gray-400 py-4'>// Please submit the form below or shoot me an email - Tishtanya.Shaw24@gmail.com</p>
            </div>
          
                
                    <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                    <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                    <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                
            
            <Slide direction='up'><button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button></Slide>
        </form>
    </div>
    );
}

export default Contact;