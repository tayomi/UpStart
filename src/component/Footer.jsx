import React from 'react'

const Footer = () => {
  return (
    <div className='h-full bg-[#fefef2] px-4 flex overflow-hidden pt-20 pb-10'>
      <div className='w-[1200px] mx-auto flex items-center justify-center'>
        <div className='grid grid-cols-3 text-sm md:text-md md:grid-cols-4 lg:grid-cols-6 gap-6 leading-loose text-green cursor-pointer'>
          <div>
            <h1 className='font-bold mb-4'>Product</h1>
            <h2>How it works</h2>
            <h2>Features</h2>
            <h2>Pricing</h2>
            <h2>Blog</h2>
            <h2>FAQ</h2>
          </div>
          <div>
            <h1 className='font-bold mb-4'>App</h1>
            <h2>Download iOS app</h2>
            <h2>Download Android app</h2>
            <h2>Log in to portal</h2>
            <h2>Administrative</h2>
            <h2>Legal</h2>
          </div>
          <div>
            <h1 className='font-bold mb-4'>Company</h1>
            <h2>About us</h2>
            <h2>Culture</h2>
            <h2>Code of conduct</h2>
            <h2>Careers</h2>
            <h2>News</h2>
            <h2>Contact</h2>
          </div>
          <div>
            <h1 className='font-bold mb-4'>Invest</h1>
            <h2>Commodity</h2>
            <h2>Savings</h2>
            <h2>Taxes and fees</h2>
            <h2>Currency exchange</h2>
            <h2>Community</h2>
          </div>
          <div>
            <h1 className='font-bold mb-4'>Security</h1>
            <h2>Security status</h2>
            <h2>ISO</h2>
            <h2>System status</h2>
            <h2>Customer help</h2>
          </div>
          <div>
            <h1 className='font-bold mb-4'>Follow</h1>
            <h2>Instagram</h2>
            <h2>Twitter</h2>
            <h2>Facebook</h2>
            <h2>TikTok</h2>
            <h2>LinkedIn</h2>
            <h2>Youtube</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer