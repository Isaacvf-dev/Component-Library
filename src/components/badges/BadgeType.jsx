import React from "react";
import Badge from "./Badge";
import colors from "../ColorsData";

export default function BadgeType({ type = 'square' }) {

  return (
    <div className="mt-2 mb-6 text-gray-500 flex flex-wrap gap-3">
      {colors.map(color => (
        <div key={color}>
          <p className="text-center text-xs">{color}</p>
          <Badge color={color} type={type}></Badge>
        </div>
      ))}
    </div>
  )
}