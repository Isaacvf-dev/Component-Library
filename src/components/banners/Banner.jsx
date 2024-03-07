import React from "react";

export default function Banner({children, color = 'gray', type, title}) {
  return (
    <div>
      <p className={`text-${color}`}>{title}</p>
      {children} 
    </div>
  )
}