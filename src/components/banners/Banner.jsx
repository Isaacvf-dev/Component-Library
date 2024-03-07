import React from "react";

export default function Banner({children, color, icon, title}) {
  return (
    <div className={`${color} flex gap-3 p-2 md:p-4 rounded-md`}>
      <div>
        {icon}
      </div>      
      <div>
        <p className="font-semibold text-sm">{title}</p>
        {children}
      </div>
       
    </div>
  )
}