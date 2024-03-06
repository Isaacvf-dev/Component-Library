import React from "react"

export default function Badge({children = 'Badge', color = 'gray', shape = 'square'}) {
  return(
    <div className={`py-0.5 px-3 font-medium ${color} ${shape}`}>
      {children}
    </div>
  )
}