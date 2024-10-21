import React from 'react'

const LibSection = ({heading,desc,btncont}) => {
  return (
    
        <div className="bg-gray-800 p-3 mt-8 rounded-xl flex flex-col space-y-3">
          <h3 className="text-base font-bold">{heading}</h3>
          <p className="text-sm font-semibold">{desc}</p>
          <a href="#"><button className="bg-white text-black px-3 py-1 rounded-2xl text-sm font-bold hover:scale-105" >{btncont}</button></a>
        </div>
    
  )
}

export default LibSection
