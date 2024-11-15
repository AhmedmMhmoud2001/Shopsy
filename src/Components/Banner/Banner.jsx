// eslint-disable-next-line no-unused-vars
import React from 'react'
import img from '../../assets/website/orange-pattern.jpg'
const Banner = () => {
  return (
    <div className='relative  h-44 w-auto'>
      <img src={img} alt="" className='h-44 w-[1400px] ' />
      <div className='z-10 absolute  gap-4 inset-0 flex flex-col items-center  justify-center'>
        <p className='font-bold text-3xl text-white'>Get Notified About New Products</p>
        <input type="text" placeholder='Enter your email' className='h-12 max-w-[600px] min-[250px]: rounded-sm px-4' />
      </div>
    </div>
  )
}

export default Banner
