import React from "react";

export default function SubSection( {title, children} ) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 pl-2 pt-2">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h3>
      {children}
    </div>
  )
}