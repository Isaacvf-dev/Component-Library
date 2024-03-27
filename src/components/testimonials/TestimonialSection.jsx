import React from "react";
import SectionContainer from "../SectionContainer";
import SubSection from "../SubSection";
import Testimonial from "./Testmonial";
import ctoImg from "/assets/cto-photo.jpg"

export default function TestimonialSection() {
  return (
    <SectionContainer title={'Testimonials'}>
      <SubSection title='with pic'>
        <Testimonial
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit autem impedit sed architec.'}
          author={'May Andersons'}
          role={'Workcation, CTO'}
          pic={ctoImg}
        />          
        
      </SubSection>
      <SubSection title='no pic'>
        <Testimonial
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit autem impedit sed architec.'}
          author={'May Andersons'}
          role={'Workcation, CTO'}
        />          
        
      </SubSection>      
    </SectionContainer>
  )
}