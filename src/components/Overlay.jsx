import React from 'react'
import { iconGihub, iconLkin, chibipngIMG  } from '../utils'


const Overlay = () => {
  return (
  
    <div className=' flex flex-col max-h-0 sticky top-20 opacity-75 z-10 mx-10 max-w-24 '>
        <a href='./Hero' className=' py-8'  > <img src={chibipngIMG} height={75} width={75}  alt="icon-of-Top"  /> </a>
        <a href='https://github.com/Ricesucooker' target='_blank' className='py-8'  >  <img src={iconGihub}  alt="icon-of-linkedin"  height={75} width={75} /> </a>
        <a href='https://www.linkedin.com/in/woraphong-mingsong/' target='_blank' className='py-8'> <img src={iconLkin}  alt="icon-of-github" height={75} width={75}  /> </a>
    
    </div>
  )
}

export default Overlay