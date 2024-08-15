import React, {useState} from 'react'
import {myWlogo, iconNav} from '../utils';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu =() => {
    setIsOpen((open) => !open)
  };
  return (
    <header >
     
        <nav className='p-5 bg-white md:flex md:items-center md:justify-between ' >
          <div className='flex justify-between items-center'>
            <span className=' text-2xl text-black cursor-default '><img className='h-10 inline' src={myWlogo} alt='W-logo' />.Dev</span>

            <span className=' md:hidden block'>
              <img className='h-10 mx-5' onClick={toggleMenu} src={iconNav} />
            </span>
          </div>
            <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${isOpen ? "nav-bar-isopen" : ""} `}>
              <li className='mx-4 my-6 md:my-0'><a href='#' className='text-xl text-black hover:text-green-600 duration-500' >Home</a></li>
              <li className='mx-4 my-6 md:my-0'><a href='#' className='text-xl text-black hover:text-green-600 duration-500'>About</a></li>
              <li className='mx-4 my-6 md:my-0'><a href='#' className='text-xl text-black hover:text-green-600 duration-500'>Project</a></li>
            <button className='bg-black text-white duration-500 px-6 py-2 mx-4 hover:bg-green-600 rounded'>
                <a href='#'>Resume</a>
             </button>
            </ul>
            
           
        </nav>
    </header>
  )
}

export default Navbar;