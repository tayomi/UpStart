import React from 'react'
import balance from '../../src/component/images/balance.png'
const Works = () => {
  return (
    <div className='h-full w-full px-4 bg-[#fefef2] flex lg:px-0 lg:h-screen overflow-hidden'>
        <div className='mt-10 lg:w-[1200px] lg:mx-auto lg:flex items-center'>
            <img className='' src={balance} alt="balance"></img>
            <div className='text-green mt-10'>
                <h1 className='text-sm font-bold'>HOW IT WORKS</h1>
                <p className='mt-6 text-4xl font-bold leading-tight'>Pay and get paid <span className='text-[#fead62]'>faster</span> than ever.</p>
                <p className='mt-10 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla facilis quam doloribus voluptatem odit accusamus error explicabo non exercitationem natus. Fugiat aspernatur repellat ducimus non voluptates.</p>
                <button className='btn btn-primary border-green border-2 my-16 py-2 px-6 hover:bg-orange duration-300'>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default Works