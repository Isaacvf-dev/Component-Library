import React from "react";

export default function SubSection( {title, children} ) {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 pl-2 py-2">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h3>
      {children}
    </div>
  )
}