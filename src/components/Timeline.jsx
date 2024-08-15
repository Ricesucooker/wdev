import React from 'react'

const Timeline = () => {
  return (
    <section >

    <div className='relative flex space-y-4 mx-24 md:space-x-10 md:w-full'>
        
        <div className='flex-col flex relative flex-1  '>

            <div className='border-s-4 p-5'>
                <p className='font-bold text-3xl'>ConnectWise</p>
                <p className='text-xl font-semibold'>L2 Software Support Sepcialist | JUL 2023 -  Present</p> 
                    <div  className=' flex flex-col font-extralight text-xs '>
                    <p>Deliver product support for ConnectWise Automate, including troubleshooting and debugging.</p>
                    <p>Handle MySQL database administration and rebuilds for both cloud and on-premises systems.</p>
                    </div>
            </div>

            <div className='border-s-4 p-5'>
            <p className='font-bold text-3xl'>Wanstor</p>
            <p className='text-xl font-semibold'>Technical Consultant | FEB 2017 -  APR 2023</p> 
           
                <div className=' flex flex-col font-extralight text-xs '>
                <p>Worked for a Managed Service Provider (MSP) that supports clients with a variety of IT needs. </p>
                <p>This includes managing traditional on-premises IT systems as well as cloud-based services on Microsoft Azure.</p>
                </div>
           
            </div>


            <div className='border-s-4 p-5'>
                <p className='font-bold text-3xl'>Wagamama</p>
                <p className='text-xl font-semibold'>Jr Manager | July 2016 -  2017</p> 
                <div className=' flex flex-col font-extralight text-xs '>
                    <p>I was a Chef & Manager here. ☺️ </p>
                    <p>Then, I leap into the world of tech!</p>
                </div>
           
            </div> 

         </div>
    
    </div>
    </section>
  )
}

export default Timeline