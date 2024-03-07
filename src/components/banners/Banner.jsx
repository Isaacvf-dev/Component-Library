import React from "react";

export default function Banner({children = 'Text', color = 'gray', type = 'multiLine'}) {
  return (
    <div>
      <p>{status}</p>
      {children}
    </div>
  )
}