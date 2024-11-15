// eslint-disable-next-line no-unused-vars
import React from 'react'
import img from '../../assets/women/women2.jpg'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Serveses = () => {
  return (
    <div className='dark:bg-gray-800 dark:text-white'>
        <div className="container grid sm:grid-cols-2 grid-cols-1 py-10">
            {/* left side */}
      <div className=' flex items-center justify-center pt-8'>
        <img src={img} alt="" className='shadow-2xl w-[400px] h-[350px] object-cover' />
      </div>
         {/* right side */}
      <div className='flex flex-col gap-8 pt-8'>
        <h2 className='text-3xl font-bold'>Winter Sale upto 50% Off</h2>
        <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
       <div className='flex flex-col gap-4'>
       <div className='flex items-center gap-2'>
        <div className=' w-[40px] h-[40px] bg-violet-100 dark:bg-violet-400 rounded-full flex justify-center items-center text-xl '> <GrSecure  /></div>
         <p>Quality Products</p>
       </div>
       <div className='flex items-center gap-2'>
        <div className=' w-[40px] h-[40px] bg-orange-100 dark:bg-orange-400 rounded-full flex justify-center items-center  text-xl '><IoFastFood/></div>
         <p>Fast Delivery</p>
       </div>
       <div className='flex items-center gap-2'>
        <div className=' w-[40px] h-[40px] bg-green-100 dark:bg-green-400 rounded-full flex justify-center items-center text-xl '><GiFoodTruck/></div>
         <p>Easy Payment method</p>
       </div>
       <div className='flex items-center gap-2'>
        <div className='w-[40px] h-[40px] bg-yellow-100 dark:bg-yellow-400 rounded-full flex justify-center items-center text-xl '><GiFoodTruck/></div>
         <p>Get Offers</p>
       </div>
       </div>
      </div>
        </div>
    </div>
  )
}

export default Serveses
