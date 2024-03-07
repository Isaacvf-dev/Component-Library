import React from "react";

export default function SubSection( {title, children} ) {
  return (
    <div>
      <h3 className="text-lg text-gray-800">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h3>
      {children}
    </div>
  )
}