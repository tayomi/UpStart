import React from 'react'
import macy from '../../src/component/images/macy.png'
const Save = () => {
  return (
    <div className='h-full w-full px-4 bg-[#fff6e5] flex lg:px-0 overflow-hidden lg:h-screen'>
        <div className='mt-10 lg:w-[1200px] mx-auto lg:flex items-center'>
          <div className='text-green'>
                <h1 className='text-sm font-bold'>SAVE MONEY</h1>
                <p className='mt-6 text-4xl font-bold leading-tight'><span className='text-[#fead62]'>Earn cashback</span> from your favorite brands</p>
                <p className='mt-10 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus autem, nulla facilis, assumenda nemo ad dolorem beatae mollitia dolore quam voluptatem laborum, asperiores exercitationem labore nam.</p>
                <button className='btn btn-primary border-green border-2 my-10 py-2 px-6 hover:bg-orange duration-300'>See how</button>
          </div>
          <img className='mb-10' src={macy} alt="save-money"></img>
        </div>
    </div>
  )
}

export default Save