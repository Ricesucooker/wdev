import React from 'react'
import { reactSVG,azureSVG,htmlSVG,cssSVG,jsSVG,mysqllSVG,awsSVG, pySVG } from '../utils'

const Teckstack = () => {
  return (
    <div className='flex w-full space-x-4 flex-center flex-wrap '>
        <div className='techNav'>
            <img src={awsSVG} alt="AWS icon" />
        </div>
        <div className=' techNav'>
            <img src={azureSVG} alt=" Azure icon" />
        </div>
        <div className=' techNav'>
            <img src={reactSVG} alt="React Icon" />
        </div>
        <div className=' techNav'>
            <img src={htmlSVG} alt="HTML icon" />
        </div>
        <div className=' techNav'>
            <img src={cssSVG} alt="CSS icon" />
        </div>
        <div className=' techNav'>
            <img src={jsSVG} alt="JavaScript icon" />
        </div>
        <div className=' techNav'>
            <img src={pySVG} alt="JavaScript icon" />
        </div>
        <div className=' techNav'>
            <img src={mysqllSVG} alt="mysql icon" />
        </div>


    </div>
  )
}

export default Teckstack