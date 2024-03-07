import React from "react";
import SectionContainer from "../SectionContainer";
import SubSection from "../SubSection";
import BannerType from "./BannerType";

export default  function BannerSection() {
  return (
    <SectionContainer title={'Banner'}>
      <SubSection title='multi line'>
        <BannerType type='multi line'/>
      </SubSection>
      <SubSection title='single line'>
        <BannerType />
      </SubSection>      
    </SectionContainer>
  )
}