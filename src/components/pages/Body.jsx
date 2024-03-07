import React from "react";
import BadgeSection from "../badges/BadgeSection";
import BannerSection from "../banners/BannerSection";
import CardSection from "../cards/CardSection";
import TestimonialSection from "../testimonials/TestimonialSection";

export default function Body() {
  return (
    <main>
      <div 
        className="max-w-[900px]  flex flex-col gap-8 py-5 lg:py-10 px-4 lg:px-8 justify-center items-center mx-auto"
      >
        <BadgeSection />
        <BannerSection />
        <CardSection />
        <TestimonialSection />
      </div>
      
    </main>
  )
}