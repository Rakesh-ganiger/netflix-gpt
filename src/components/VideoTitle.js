import React from 'react'

const  VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white  bg-gradient-to-r from-black'>
       <h1 className='text-6xl font-bold'>{title}</h1>
       <p className="p-5 text-lg w-1/2">{overview}</p>
       <div className=''>
        <button className=' text-black m-2 p-4 px-16 text-lg bg-white rounded-lg hover:bg-opacity-30'>▶️ Play</button>
        <button className='bg-gray-500 text-white m-2 p-4 px-12 text-lg bg-opacity-50 rounded-lg'>More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle;