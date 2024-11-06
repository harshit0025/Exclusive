import React from 'react'

export default function Button({ text }) {
  return (
    <div style={{background: '#DB4444'}} className='cursor-pointer inline-block text-white font-semibold py-2 px-4 rounded'>
        <h3 className='flex justify-center text-white'>{text}</h3>
    </div>
  )
}
