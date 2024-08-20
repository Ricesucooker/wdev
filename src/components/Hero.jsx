import { mp4Top3D, iconGihub, iconLkin} from "../utils";



const Hero = () => {


  return (
  
    <section className='w-full nav-heigth' id="Hero">
        <div className='flex size-full flex-center flex-col'>

            <div className="flex flex-col flex-centermd:flex-row flex-wrap cursor-default " >
            <h1 id="myName" className="font-bold text-6xl md:w-full text-center z-[2] mt-10"> Woraphong Mingsong </h1>

              <div className="screen-max-width  ">
                <video autoPlay loop muted playsInline={true} key={{mp4Top3D}}> 
                <source className="z-[1]" src={mp4Top3D} type="video/mp4"  /> 
                  Your browser doesn not support the video tag </video>  
              </div>
            </div>

            <div className=" flex flex-col px-10 md:relative text-center">
                <p className="font-medium text-3xl m-5 cursor-default " >Cloud Developer</p>
                  <div className='flex flex-center '>
                      <a href='https://github.com/Ricesucooker' target='_blank' className='py-4 mx-2 md:grayscale md:hover:grayscale-0'  >  <img src={iconGihub}  alt="icon-of-linkedin"  height={75} width={75} /> </a>
                      <a href='https://www.linkedin.com/in/woraphong-mingsong/' target='_blank' className='py-4 mx-2 md:grayscale md:hover:grayscale-0'> <img src={iconLkin}  alt="icon-of-github" height={75} width={75}  /> </a>
                  </div>
                <p className="text-base cursor-default">"London base cross-functional collaborator with strong foundation in multiple areas."</p>
        
              </div>
            

        </div>


       </section>
  )
}

export default Hero;