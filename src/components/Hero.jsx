import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { mp4Top3D, iconGihub, iconLkin, chibipngIMG  } from "../utils";


const Hero = () => {
    useGSAP(() => {
        gsap.to(".hero-title",{opacity: 1, delay:1.5 })
    },[])

  return (
  
    <section className='w-full h-screen '>
        <div className='flex size-full flex-center flex-col '>

            <div className="flex flex-col flex-centermd:flex-row flex-wrap cursor-default " >
            <h1 className="font-bold text-6xl md:w-full  z-10  text-center mt-10">Woraphong Mingsong</h1>

              <div className=" tranform:scale-100  screen-max-width -z-0">
                <video autoPlay loop muted playsInline={true} key={{mp4Top3D}}> 
                <source src={mp4Top3D} type="video/mp4"  /> 
                  Your browser doesn ot support the video tag </video>  
              </div>
            </div>

            <div className=" flex flex-col px-10 md:relative text-center">
                <p className="font-medium text-3xl m-5 cursor-default " >Ambitious Developer</p>
                  <div className='flex flex-center '>
                      <a href='./Hero' className=' py-4 mx-2 md:grayscale md:hover:grayscale-0 '  > <img src={chibipngIMG} height={75} width={75}  alt="icon-of-Top"  /> </a>
                      <a href='https://github.com/Ricesucooker' target='_blank' className='py-4 mx-2 md:grayscale md:hover:grayscale-0'  >  <img src={iconGihub}  alt="icon-of-linkedin"  height={75} width={75} /> </a>
                      <a href='https://www.linkedin.com/in/woraphong-mingsong/' target='_blank' className='py-4 mx-2 md:grayscale md:hover:grayscale-0'> <img src={iconLkin}  alt="icon-of-github" height={75} width={75}  /> </a>
                  </div>
                <p className="text-base cursor-default">"Cross-functional collaborator with strong foundation in multiple areas."</p>
        
              </div>
            

        </div>


       </section>
  )
}

export default Hero;