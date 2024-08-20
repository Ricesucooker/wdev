import { useRef, React } from 'react';
import { svgHeart, chibipngIMG } from '../utils';


const Highlights = () => {


  return (
  <section className='w-full' id='Project' >

  <div className='flex '>
      <div className='w-full h-fit relative'>

        <div className="flex-center font-semibold text-6xl m-8"> !Picture-Project <span>˙✧˖°📷 ༘ ⋆｡° </span></div>

    
        <div className='flex md:justify-around overflow-auto md:overflow-x-auto'>

         <div className="main-proid ">
          <div className="img-proid ">
            <img className='img-proidChild' src={chibipngIMG} alt="2d Top" />

          </div>
          <div className="info-proid  ">
          <span> <img src={svgHeart} alt="heart icon" height={15} width={15}  /></span>
         Soon to come...
          </div>
         </div>

         <div className="main-proid ">
          <div className="img-proid ">
          <img className='img-proidChild' src={chibipngIMG} alt="2d Top" />

          </div>
          <div className="info-proid ">
          <span> <img src={svgHeart} alt="heart icon" height={15} width={15}  /></span>
          Soon to come...
          </div>
         </div>



         <div className="main-proid ">
          <div className="img-proid ">
          <img className='img-proidChild' src={chibipngIMG} alt="2d Top" />
          </div>

          <div className="info-proid ">
          <span> <img src={svgHeart} alt="heart icon" height={15} width={15}  /></span>
          Soon to come...
          </div>
         </div>




         <div className="main-proid ">
          <div className="img-proid ">
          <img className='img-proidChild' src={chibipngIMG} alt="2d Top" />

          </div>
          <div className="info-proid ">
            <span> <img src={svgHeart} alt="heart icon" height={15} width={15}  /></span>
          Soon to come...
          </div>
         </div>
         

        </div>
    
      </div>
   </div>
    </section>
  )
}

export default Highlights;