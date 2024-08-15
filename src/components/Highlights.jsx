import React from 'react'

const Highlights = () => {
  return (
    <section id="higlights" className='w-full h-full relative'>
    <div> 
      <h2 className=' flex-center'>Welcome to my highlights</h2>

      <div id='projec ' className='w-full h-full flex m-8 p-8 flex-center'> 
       
        <div id='p1' className='card-con p-2.5 m-4 w-1/3 h-64' >
          <div className='card-h'>
            Show case 1 
          </div>
          <div className='card-text'>
            this is project 1
          </div>
        </div>
        <div id='p2' className='card-con p-2.5 m-4 w-1/3 h-64' >
          <div className='card-h'>
            Show case 2 
          </div>
          <div className='card-text'>
            this is project 2
          </div>
        </div>

        <div id='p3' className='card-con p-2.5 m-4 w-1/3 h-64' >
          <div className='card-h'>
            Show case 3 
          </div>
          <div className='card-text'>
            this is project 3
          </div>
        </div>

        <div id='p3' className='card-con p-2.5 m-4 w-1/3 h-64' >
          <div className='card-h'>
            Show case 4 
          </div>
          <div className='card-text'>
            this is project 4
          </div>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Highlights;