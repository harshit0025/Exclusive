import React from 'react'

export default function Banner2({ image, heading, text, buttonText }) {
  return (
    <div className="relative bg-black text-white rounded-lg overflow-hidden w-full max-w-md mx-auto">
 
  <img src={image} alt="PlayStation 5" className="w-full h-full object-cover" />

  <div className="absolute bottom-4 left-4">
    <h2 className="text-2xl font-semibold">{heading}</h2>
    <p className="text-sm mt-2">{text}</p>
    <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 transition duration-300">
      {buttonText}
    </button>
  </div>
</div>

  )
}
