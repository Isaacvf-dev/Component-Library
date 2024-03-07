import React from "react";

export default function SectionContainer({children, title}) {  

  return (
    <section>
      <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
        <h2 className="mt-1 text-xl text-gray-700 font-['Permanent_Marker']">
          {title}
        </h2>
      </div>
      
      <div className="p-4 md:p-5">
        {children}      
      </div>
    </section>
  )
}