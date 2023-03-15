import React, {useState} from 'react'
import logo from './images/group 2.svg'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

  const closeMobileMenu = () => {
    setNav(false)
  }
  return (
   <div className='sticky top-0 bg-white w-full z-20'>
    <div className='flex justify-between items-center max-w-[1240px] h-20 px-4 mx-auto'>
      <Link to='/' onClick={handleClick}><div className='flex z-20 w-40 cursor-pointer'>
        <img src={logo} alt='logo'></img>
        <h1 className='text-orange font-bold text-lg ml-2'>UP - <span className='text-green'>START</span></h1>
      </div></Link>
      <ul className='hidden tablet:flex text-green items-center font-medium'>
        <li className='p-4 cursor-pointer hover:underline underline-offset-4 decoration-2'><Link to='/works' onClick={handleClick}>How it works</Link></li>
        <li className='p-4 cursor-pointer hover:underline underline-offset-4 decoration-2'><Link to='/save' onClick={handleClick}>Features</Link></li>
        <li className='p-4 cursor-pointer hover:underline underline-offset-4 decoration-2'><Link to='/started' onClick={handleClick}>Blog</Link></li>
        <li className='p-4 cursor-pointer hover:underline underline-offset-4 decoration-2'><Link to='/pricing' onClick={handleClick}>Pricing</Link></li>
        <li className='p-4'><Link to='/login' onClick={handleClick}><button className='btn btn-primary px-6 py-2 hover:bg-orange duration-300'>Login</button></Link></li>
        <li className='p-4'><Link to='/register' onClick={handleClick}><button className=' btn btn-secondary px-6 py-2 hover:bg-[#c6fe9e] hover:text-green duration-300'>Get started</button></Link></li>
      </ul>
      <div onClick={handleNav} className='block tablet:hidden'>
        {nav ? <AiOutlineClose size={20} color={'#105749'}/> : <AiOutlineMenu size={20} color={'#105749'} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border border-r-gray-200 text-green text-sm md:text-xl font-bold bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <Link to='/'><div className='flex z-20 w-40 cursor-pointer px-4 mt-6'>
        <img src={logo} alt='logo'></img>
        <h1 className='text-orange font-bold text-lg ml-2'>UP - <span className='text-green'>START</span></h1>
        </div></Link>
        <ul className='uppercase pt-20 px-4'>
          <li className='p-4 border-b border-gray-300'><Link to='/' onClick={() =>{handleClick(); closeMobileMenu(); }}>Home</Link></li>
          <li className='p-4 border-b border-gray-300'><Link to='/works' onClick={() =>{handleClick(); closeMobileMenu(); }}>How it works</Link></li>
          <li className='p-4 border-b border-gray-300'><Link to='/save' onClick={() =>{handleClick(); closeMobileMenu(); }}>Features</Link></li>
          <li className='p-4 border-b border-gray-300'><Link to='/started' onClick={() =>{handleClick(); closeMobileMenu(); }}>Blog</Link></li>
          <li className='p-4 border-b border-gray-300'><Link to='/pricing' onClick={() =>{handleClick(); closeMobileMenu(); }}>Pricing</Link></li>
          <li className='p-4 border-b border-gray-300'><Link to='/login' onClick={() =>{handleClick(); closeMobileMenu(); }}>Login</Link></li>
          <li className='p-4 border-b border-gray-300'><Link to='/register' onClick={() =>{handleClick(); closeMobileMenu(); }}>Get started</Link></li>
        </ul>
      </div>
    </div>
   </div>
  )
}

export default Navbar
