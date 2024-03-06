import React from "react";
import BadgeSection from "./BadgeSection";

export default function Body() {
  return (
    <main>
      <div className="max-w-[900px] flex flex-col gap-8 py-10 px-8 justify-center items-center mx-auto">
        <BadgeSection />
        <BadgeSection />
      </div>
      
    </main>
  )
}