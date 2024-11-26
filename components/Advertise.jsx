import React from 'react';
import "../app/globals.css"

const Advertise = () => {
  return (
    <div className="Discount container px-4 flex items-center justify-between rounded-lg mt-5 h-52">
      <h1 className='sm:text-4xl text-center text-sm bg-red-700 sm:py-6 py-3 px-2 font-bold text-white rounded-sm'>MEGA DISCOUNT</h1>
      <div className='flex'>
      <img src="/assets/AdvertiseImg/chairs.png" className='w-40 h-48 ml-3'/>
      </div>
      <div className='flex' >
        <img src="/assets/AdvertiseImg/thirty.png" className='precent sm:w-48 w-40 '/>  
      </div>
    </div>
  )
}

export default Advertise
