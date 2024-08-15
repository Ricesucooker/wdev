import React from 'react'
import { myPic } from '../utils'
import Timeline from './Timeline';

const About = () => {
  return (
    <section id='about' className='w-full relative flex'>
    <div className='flex-col flex-center text-balance w-full'>
            <h3 className=' text-6xl text-semibold py-5'> Top.</h3>
            <p className=' font-light w-2/3 md:w-1/3'> A passionate developer with a strong foundation in cloud engineering. My experience in the IT industry spans both development and cloud infrastructure. My passions outside of work include photography, videography, gaming, and anime. I believe in lifelong learning, so I make a conscious effort to expand my skill set on a weekly basis.</p>
        <div className='py-4 '>
                <img className=' saturate-50 flex-center h-52 w-52 rounded-full' src={myPic} alt='Portrait of Top ' />
            </div>
        <div>
            <Timeline />
        </div>
    </div >
   
    </section>
  )
}

export default About