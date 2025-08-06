import React from 'react'
import { IoMdStarOutline } from "react-icons/io";

function explore() {
  return (
    <div className='bg-zinc-200 m-2 rounded p-2 border-2 border-zinc-300'>
      <h1 className='text-2xl'>Explore Items</h1>
      <div className='none flex overflow-x-auto w-full space-x-4 h-50'>
        <div className='h-30 min-w-[220px] rounded relative bg-red-500'>
          <img className='h-full w-full object-cover rounded' src="https://images.unsplash.com/photo-1597699401474-e8714c1b7879?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <div className='expbox h-full w-full absolute bottom-0'>
            <h1 className='bottom-0 text-white absolute px-3 text-2xl'>Rs 130</h1>
          </div>
            <h1  className='font-bold' >Gujarati Dish</h1>
          <div className='mt-2 gap-2 flex'>
            <div className='h-6 w-6 bg-emerald-700 flex justify-center items-center rounded-full '><IoMdStarOutline color='white'/></div>
            <h2>4.2 25-min to 30min</h2>
          </div>
            <p>Dal, Roti ,ButterMilk ,etc.</p>
        </div>
        <div className='h-30 min-w-[220px] rounded relative bg-red-500'>
          <img className='h-full w-full object-cover rounded' src="https://images.unsplash.com/photo-1597699401474-e8714c1b7879?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <div className='expbox h-full w-full absolute bottom-0'>
            <h1 className='bottom-0 text-white absolute px-3 text-2xl'>Rs 130</h1>
          </div>
            <h1 className='font-bold'>Gujarati Dish</h1>
          <div className='mt-2 gap-2 flex'>
            <div className='h-6 w-6 bg-emerald-700 flex justify-center items-center rounded-full '><IoMdStarOutline color='white'/></div>
            <h2>4.2 25-min to 30min</h2>
          </div>
            <p>Dal, Roti ,ButterMilk ,etc.</p>
        </div>
        <div className='h-30 min-w-[220px] rounded relative bg-red-500'>
          <img className='h-full w-full object-cover rounded' src="https://images.unsplash.com/photo-1597699401474-e8714c1b7879?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <div className='expbox h-full w-full absolute bottom-0'>
            <h1 className='bottom-0 text-white absolute px-3 text-2xl'>Rs 130</h1>
          </div>
            <h1  className='font-bold'>Gujarati Dish</h1>
          <div className='mt-2 gap-2 flex'>
            <div className='h-6 w-6 bg-emerald-700 flex justify-center items-center rounded-full '><IoMdStarOutline color='white'/></div>
            <h2>4.2 25-min to 30min</h2>
          </div>
            <p>Dal, Roti ,ButterMilk ,etc.</p>
        </div>
        <div className='h-30 min-w-[220px] rounded relative bg-red-500'>
          <img className='h-full w-full object-cover rounded' src="https://images.unsplash.com/photo-1597699401474-e8714c1b7879?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <div className='expbox h-full w-full absolute bottom-0'>
            <h1 className='bottom-0 text-white absolute px-3 text-2xl'>Rs 130</h1>
          </div>
            <h1 className='font-bold'>Gujarati Dish</h1>
          <div className='mt-2 gap-2 flex'>
            <div className='h-6 w-6 bg-emerald-700 flex justify-center items-center rounded-full '><IoMdStarOutline color='white'/></div>
            <h2>4.2 25-min to 30min</h2>
          </div>
            <p>Dal, Roti ,ButterMilk ,etc.</p>
        </div>
        
       
        
      </div>      
    </div>
  )
}

export default explore
