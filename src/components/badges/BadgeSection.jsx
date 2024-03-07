import React from "react";
import BadgeType from "./BadgeType";
import SectionContainer from "../SectionContainer";
import SubSection from "../SubSection";

export default function BadgeSection() {  
  return (
    <SectionContainer title={'Badges'}>
      <SubSection title="square">
        <BadgeType />
      </SubSection>
      <SubSection title="pill">
        <BadgeType type="pill"/>
      </SubSection>
    </SectionContainer>
    
  )
}