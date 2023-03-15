import React, {useState} from 'react'
import arrow from '../images/union-400w.png'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='relative flex items-center justify-center h-screen overflow-hidden'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 z-10' onSubmit={handleSubmit}>
        <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>Email</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
        </div>
        <div className='mb-6'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='password'>Password</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='************'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
        </div>
        <div className='flex items-center gap-4 justify-between'>
            <button className='text-sm btn btn-secondary py-2 px-4 hover:bg-[#c6fe9e] hover:text-green duration-300' type='submit'>Sign In</button>
            <button className='text-sm btn btn-secondary py-2 px-4 hover:bg-[#c6fe9e] hover:text-green duration-300'>Forgot Password?</button>
        </div>
      </form>
      <img className='absolute right-0 top-0 h-40 opacity-50 rotate-180' src={arrow} alt=""></img>
      <img className='absolute left-0 bottom-0 opacity-50 h-40' src={arrow} alt=""></img>
      <img className='absolute right-0 bottom-0 h-40 opacity-50 -rotate-90' src={arrow} alt=""></img>
      <img className='absolute left-0 top-0 opacity-50 rotate-90 h-40' src={arrow} alt=""></img>
    </div>
  )
}

export default Login