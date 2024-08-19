import React from 'react'
import { myPic } from '../utils'
import Timeline from './Timeline';
import Teckstack from './Teckstack';

const About = () => {
  return (
    <section id='About' className='w-full relative flex my-16 py-10'>
    <div className='flex-col flex-center text-balance w-full'>
    <div className='py-10'>
                <img className=' saturate-50 h-52 w-52 rounded-full' src={myPic} alt='Portrait of Top ' />
           
    </div>
            <div> <Teckstack />

            </div>
            <p className='m-5 font-light text-center'> I go by the name <span className='font-semibold text-2xl'>Top</span>, I'm a passionate developer with a strong foundation in cloud engineering. My experience in the IT industry spans both development and cloud infrastructure. My passions outside of work include photography, videography, gaming, and anime. I believe in lifelong learning, so I make a conscious effort to expand my skill set on a weekly basis.</p>
        
        <div>
            <Timeline />
        </div>
    </div >
   
    </section>
  )
}

export default About