import React from 'react'
import arrow from '../../src/component/images/union-400w.png'
const Card = () => {
  return (
    <div className='h-full bg-[#fefef2] px-4 flex overflow-hidden pt-20'>
        <div className='w-[1200px] mx-auto'>
          <div className='bg-green relative text-white w-full lg:max-w-[1000px] rounded-3xl flex flex-col items-center py-10'>
            <h1 className='text-sm font-bold text-[#cffe9f]'>GET STARTED</h1>
            <p className='text-4xl font-bold leading-tight mt-2 text-center'>Push your finances to</p>
            <p className='text-4xl font-bold leading-tight text-center'>the next level.</p>
            <p className='text-sm mt-4 max-w-xs text-center text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, praesentium! Quia, nulla quae.</p>
            <div className='flex gap-4 mt-6 z-10'>
              <button className='btn bg-transparent border-2 border-white px-6 py-2 text-sm font-bold hover:bg-[#c6fe9e] duration-300'>See all plans</button>
              <button className='btn btn-tertiary px-6 py-2 text-sm font-bold hover:from-transparent hover: border-2 hover:text-white duration-300'>Get started</button>
            </div>
            <img className='absolute right-0 top-0 h-40 opacity-50' src={arrow} alt=""></img>
            <img className='absolute left-0 bottom-0 opacity-50 rotate-180 h-40' src={arrow} alt=""></img>
          </div>
        </div>
    </div>
  )
}

export default Card