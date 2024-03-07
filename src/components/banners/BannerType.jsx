import React from "react";
import Banner from "./Banner";
import bannersData from "../BannersData";


export default function BannerType({ type }) {
  return (
    <div className="mt-2 mb-6 text-gray-500 flex flex-col gap-3">
      {bannersData.map(banner => (
        <Banner 
          key={banner.title} 
          title={banner.title} 
          color={banner.color} 
          icon={banner.icon}
        >
          {type === 'multi line' && 
            <p className="text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quisquam veniam.
            </p>
          }
        </Banner>
        
      ))}
    </div>
  )
}