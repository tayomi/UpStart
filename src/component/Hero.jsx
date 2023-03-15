import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../../src/component/images/hero.jpg'
import arrow from '../../src/component/images/union-400w.png'
import down from '../../src/component/images/group 18-1200w.png'
const Hero = () => {
  return (
    <div className='h-full bg-green lg:h-screen flex relative overflow-hidden'>
      <div className='w-[1200px] mx-auto lg:flex gap-4'>
        <div className="w-screen lg:w-1/2 lg:h-[70vh]">
          <img className='w-full h-full object-cover lg:rounded-b-3xl' src={hero} alt='hero-section'></img>
        </div>
        <div className='w-screen mt-9 px-4 lg:px-0 lg:w-1/2 lg:order-first lg:mt-[4rem]'>
            <h1 className='text-orange text-md font-semibold'>UP-START FINANCE SYSTEM</h1>
            <p className='text-white text-5xl leading-tight font-semibold mt-4'>Unlock the next generation banking <span className='text-[#c6fe9e]'>experience</span></p>
            <p className='mt-10 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque animi, error a voluptates adipisci minima eligendi et voluptatem, dignissimos rem laudantium nesciunt natus incidunt deleniti minus!</p>
            <div className='flex gap-4 mt-10 pb-10'>
              <button className='btn btn-tertiary py-4 px-8 hover:from-transparent hover: border-2 hover:text-white duration-300'><Link to='/register'>Get started</Link></button>
              <button className='btn btn-primary border-white border-2 py-4 px-8 text-white hover:bg-[#c6fe9e] duration-300'><Link to='/login'>Login</Link></button>
            </div>
        </div>
      </div>
      <img className='hidden h-80 lg:block absolute top-0 right-0' src={arrow} alt=""></img>
      <img className='hidden h-80 lg:block absolute bottom-0 right-0' src={down} alt=""></img>
    </div>
  )
}

export default Hero