import React from "react"

export default function Badge({children = 'Badge', color = 'gray', type = 'square'}) {
  return(
    <div className={`py-0.5 px-3 font-medium ${color} ${type}`}>
      {children}
    </div>
  )
}