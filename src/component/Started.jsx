import React from 'react'
import phone from '../../src/component/images/phone.png'

const Started = () => {
  return (
    <div className='h-full bg-green px-4 lg:px-0 lg:h-screen flex items-center overflow-hidden'>
        <div className='w-[1200px] mt-12 mb-12 mx-auto lg:mb-0 lg:flex gap-[6rem]'>
          <img className='w-screen rounded-[50px] lg:w-1/2' src={phone} alt='phone'></img>
          <div className='mt-14 text-white lg:w-1/2'>
            <h1 className='text-sm font-bold'>GET STARTED</h1>
            <p className='text-4xl font-bold mt-4 leading-tight'>Open your account today</p>
            <div className='flex mt-6 gap-8 '>
                <h1 className='bg-[#ffad61] h-12 p-6 text-green text-xl font-bold rounded-xl flex items-center'>1</h1>
                <div>
                  <p className='text-xl font-bold'>Download UpStart App</p>
                  <p className='text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque optio incidunt explicabo nemo aut nesciunt ducimus beatae eveniet magnam.</p>
                </div>
            </div>
            <div className='flex mt-6 gap-8 '>
                <h1 className='bg-[#ffad61] h-12 p-6 text-green text-xl font-bold rounded-xl flex items-center'>2</h1>
                <div>
                  <p className='text-xl font-bold'>Create your free account</p>
                  <p className='text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque optio incidunt explicabo nemo aut nesciunt ducimus beatae eveniet magnam.</p>
                </div>
            </div>
            <div className='flex mt-6 gap-8 '>
                <h1 className='bg-[#ffad61] h-12 p-6 text-green text-xl font-bold rounded-xl flex items-center'>3</h1>
                <div>
                  <p className='text-xl font-bold'>Link your existing credit cards</p>
                  <p className='text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque optio incidunt explicabo nemo aut nesciunt ducimus beatae eveniet magnam.</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Started