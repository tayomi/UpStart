import React from 'react'
import business from '../../src/component/images/delfina-pan-wJoB8D3hnzc-unsplash.jpg'
import personal from '../../src/component/images/cassandra-hamer-rKV-LcPEVg4-unsplash.jpg'
import family from '../../src/component/images/nathan-dumlao-Wr3comVZJxU-unsplash.jpg'



const Pricing = () => {
  return (
    <div className='h-full bg-[#fefef2] px-4 lg:px-0 flex overflow-hidden'>
        <div className='w-[1200px] mt-12 mx-auto flex flex-col justify-center items-center text-green'>
            <div className='text-center'>
              <h1 className='text-sm font-bold'>GET STARTED</h1>
              <p className='text-4xl font-bold mt-2 leading-tight'>No matter what you do,</p>
              <p className='text-4xl font-bold mt-2 leading-tight'>UpStart will save you money</p>
            </div>
            <div className='mt-14 mb-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              <div className="w-80 h-96 cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img className='w-80 h-96 object-cover' src={business} alt=""></img>
                  <div className="absolute h-full w-full bg-black/20 flex items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className='text-white px-2'>
                      <h1 className='text-xl font-bold'>Business</h1>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, dolorum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-80 h-96 cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img className='w-80 h-96 object-cover' src={personal} alt=""></img>
                  <div className="absolute h-full w-full bg-black/20 flex items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className='text-white px-2'>
                      <h1 className='text-xl font-bold'>Personal</h1>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, dolorum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-80 h-96 cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img className='w-80 h-96 object-cover' src={family} alt=""></img>
                  <div className="absolute h-full w-full bg-black/20 flex items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className='text-white px-2'>
                      <h1 className='text-xl font-bold'>Family</h1>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, dolorum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing
