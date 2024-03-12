import React from "react";
import companyLogo from "../../../public/assets/company-logo.svg"

export default function Testimonial({ text, author, role, pic }) {
  return (
    <div className=" my-8">
      {pic ?
        (<div className="bg-blue-800 text-white flex flex-col md:items-end items-center relative md:mx-10">
        <div className="p-4 z-10 md:left-3 lg:left-5 -top-10 md:-top-6 lg:-top-8 absolute">
          <img src={pic} alt="Author image" className="h-[104px] md:h-[234px] w-[184px] md:w-[224px] object-cover rounded-lg object-center" />
        </div>
        <div className="bg-blue-800 md:p-5 px-3 md:w-1/2 mt-24 md:mt-0 mb-8 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="block w-5 h-5 mb-4" viewBox="0 0 48 48">
            <path d="M14.028 6C6.684 11.184 1.5 19.68 1.5 29.04C1.5 36.672 6.108 41.136 11.436 41.136C16.476 41.136 20.22 37.104 20.22 32.352C20.22 27.6 16.908 24.144 12.588 24.144C11.724 24.144 10.572 24.288 10.284 24.432C11.004 19.536 15.612 13.776 20.22 10.896L14.028 6ZM38.796 6C31.596 11.184 26.412 19.68 26.412 29.04C26.412 36.672 31.02 41.136 36.348 41.136C41.244 41.136 45.132 37.104 45.132 32.352C45.132 27.6 41.676 24.144 37.356 24.144C36.492 24.144 35.484 24.288 35.196 24.432C35.916 19.536 40.38 13.776 44.988 10.896L38.796 6Z" fill="white" fillOpacity="0.25"
            />
          </svg>
          <p className="text-base">{text}</p>
          <div className="text-xs mt-4">
            <p>{author}</p>
            <p>{role}</p>
          </div>

        </div>

      </div>) :
      
      (<div className="flex flex-col md:text-center text-left md:items-center space-y-6 md:mx-10 md:py-16 py-10 md:px-12 px-4 bg-slate-100">
        <img src={companyLogo} className="mx-auto"/>
        <p>{text}</p>
        <div className="text-xs mt-4 font-semibold">
          <p>{author} / <span className="text-gray-500">{role}</span></p>          
        </div>
      </div>)
      }
      

    </div>
  )
}