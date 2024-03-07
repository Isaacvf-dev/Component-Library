import React from "react";
import Banner from "./Banner";
import banners from "../BannersData";


export default function BannerType({ type = 'multiLine' }) {
  return (
    <div className="mt-2 mb-6 text-gray-500 flex flex-column gap-3">
      {banners.map(banner => (
        <div key={banner.title}>
          <p className="text-center text-xs">{banner.title}</p>          
        </div>
      ))}
    </div>
  )
}