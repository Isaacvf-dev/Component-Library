import React from "react";
import SectionContainer from "../SectionContainer";
import SubSection from "../SubSection";
import BannerType from "./BannerType";
import Badge from "../badges/Badge";

export default  function BannerSection() {
  return (
    <SectionContainer title={'Banner'}>
      <SubSection title='multi line'>
        <BannerType />
      </SubSection>
      <SubSection title='single line'>
        <BannerType />
      </SubSection>      
    </SectionContainer>
  )
}