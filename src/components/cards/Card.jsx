import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function Card({children, hover, }) {
  return (
    <div 
      className={`${hover ? 'hover:shadow-2xl' : ''} self-center text-center relative border-slate-200 border-2 rounded-lg p-6 my-4 bg-gray-100 max-w-[384px] cursor-pointer`}
    >
      <div className="absolute bg-blue-500 -top-6 left-1/2 transform -translate-x-1/2 p-3 rounded-md">
        <IoCloudUploadOutline color="white" size={24}/>
      </div>
      <h4 className="mt-6 mb-4 text-lg text-gray-900 font-bold">Easy deployment</h4>
      <p className="text-sm text-gray-500">{children}</p>
      
    </div>
  )
}