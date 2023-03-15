import React, { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import people from '../../src/component/images/people.jpeg'

const Faq = () => {
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  const openHandle = (index) => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = [...prevIsOpen];
      newIsOpen[index] = !newIsOpen[index];
      return newIsOpen;
    });
  };

  return (
    <div className='h-full bg-[#fefef2] px-4 flex lg:px-0 overflow-hidden'>
        <div className='w-[1200px] mx-auto md:flex gap-4'>
            <div className='w-full text-green lg:w-1/2'>
                <h1 className='text-sm font-bold'>FAQ</h1>
                <p className='text-4xl font-bold mt-6'>Frequently Asked</p>
                <p className='text-orange text-4xl font-bold mt-2'>Questions</p>
                <div className='grid grid-rows-4 gap-4 w-full mt-8'>
                  <div className='bg-white h-16 px-2 flex flex-col justify-center rounded-lg'>
                    <div onClick={() => openHandle(0)} className='flex items-center justify-between cursor-pointer'>
                    <p className='font-bold'>Is this a Free or Paid service?</p>
                    {isOpen[0] ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                    </div>
                    {isOpen[0] && (
                      <div>
                      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dicta.</p>
                      </div>
                    )}
                  </div>
                  <div className='bg-white h-16 px-2 flex flex-col justify-center rounded-lg'>
                    <div onClick={() => openHandle(1)} className='flex items-center justify-between cursor-pointer'>
                    <p className='font-bold'>Do you operate in United States?</p>
                    {isOpen[1] ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                    </div>
                    {isOpen[1] && (<div>
                      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dicta.</p>
                    </div>)}
                  </div>
                  <div className='bg-white h-16 px-2 flex flex-col justify-center rounded-lg'>
                    <div onClick={() => openHandle(2)} className='flex items-center justify-between cursor-pointer'>
                    <p className='font-bold'>Is this a globally available bank?</p>
                    {isOpen[2] ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                    </div>
                    {isOpen[2] && (<div>
                      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dicta.</p>
                    </div>)}
                  </div>
                  <div className='bg-white h-16 px-2 flex flex-col justify-center rounded-lg'>
                    <div onClick={() => openHandle(3)} className='flex items-center justify-between cursor-pointer'>
                    <p className='font-bold'>Do you have an iOS or Android app?</p>
                    {isOpen[3] ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                    </div>
                    {isOpen[3] && (<div>
                      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dicta.</p>
                    </div>)}
                  </div>
                </div>
            </div>
            <div className='flex mt-8 items-center justify-end lg:w-1/2 lg:mt-0'>
              <div className='relative md:w-96 md:h-96 flex'>
                <div className='absolute left-0 bottom-8 bg-gradient-to-tr from-[#fef6a9] via-[#eef9a6] to-[#cffe9f] h-40 w-40 rounded-3xl'></div>
                <div>
                <img className='clip-style w-screen h-96 lg:w-96 object-cover object-left ' src={people} alt="faq"></img>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Faq