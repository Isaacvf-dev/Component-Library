import React from "react";
import Badge from "../badges/Badge";



export default function BadgeSection() {
  const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']

  return (
    <section>
      <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
        <h2 className="mt-1 text-xl text-gray-700 font-['Permanent_Marker']">
          Badges
        </h2>
      </div>
      
      <div className="p-4 md:p-5">
        <h3 className="text-lg text-gray-800">
          Square
        </h3>        
        <div className="mt-2 mb-6 text-gray-500 flex flex-wrap gap-3">
          {colors.map(color => (
            <div key={color}>
            <p className="text-center text-xs">{color}</p>            
            <Badge color={color}></Badge>                       
          </div> 
          ))}                   
          
        </div>
        <h3 className="text-lg text-gray-800">
          Pill
        </h3>
        <div className="mt-2 text-gray-500 flex flex-wrap gap-3">
          {colors.map(color => (
            <div key={color}>
            <p className="text-center text-xs">{color}</p>            
            <Badge color={color} shape='pill'></Badge>                       
          </div> 
          ))}                 
        </div>
        
      </div>
    </section>
  )
}