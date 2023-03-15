import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='flex items-center justify-center h-screen overflow-hidden'>
        <div className='flex flex-col items-center'>
          <h1 className='text-8xl font-bold'>404</h1>
          <h3 className='text-xl mt-4 font-bold'>Ooops!!</h3>
          <p className='mt-2'>THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE.</p>
          <button className='bg-green mt-6 py-2 px-4 font-bold'><Link to='/'>Go Back to Home</Link></button>
        </div>
    </div>
  )
}

export default Error