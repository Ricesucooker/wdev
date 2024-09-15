import React from 'react'
import { myPic } from '../utils'
import Timeline from './Timeline';
import Teckstack from './Teckstack';
import Greetings from '../components/Greetings';

const About = () => {
  return (
    <section id='About' className=' w-full '>
    <div className='flex-col flex-center text-balance '>
    <div className='md:py-10'>
                <img className=' saturate-50 h-52 w-52 rounded-full' src={myPic} alt='Portrait of Top ' />
           
    </div>
    <div className='font-semibold py-2 text-5xl justify-center'><Greetings/></div>
            <div> <Teckstack /></div>
            <p className='m-5 text-xl md:text-3xl text-center'> I go by the name <span className='font-semibold text-3xl md:text-4xl text-green-400/80'>Top</span>, I'm a passionate developer with a strong foundation in cloud engineering. My experience in the IT industry spans from support, development and cloud infrastructure. My passions outside of work include photography, videography, gaming and anime. I believe in lifelong learning, so I make a conscious effort to expand my skill set on a weekly basis.</p>
        
        <div>
            <Timeline />
        </div>
    </div >
   
    </section>
  )
}

export default About