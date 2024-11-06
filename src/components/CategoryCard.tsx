import React from 'react'

export default function CategoryCard({icon, text}) {
  return (
    <div className='border-2 border-inherit rounded-lg  flex flex-col items-center justify-evenly space-y-2 w-[170px] h-[145px] hover:bg-red-600 hover:text-white cursor-pointer'>
        <div>
            {icon}
        </div>
        <h3 className='text-lg'>
            {text}
        </h3>
    </div>
  )
}
