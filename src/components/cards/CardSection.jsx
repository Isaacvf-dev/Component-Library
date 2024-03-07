import React from "react";
import SectionContainer from "../SectionContainer";
import SubSection from "../SubSection";
import Card from "./Card";


export default  function CardSection() {
  return (
    <SectionContainer title={'Cards'}>
      <SubSection title='default'>
        <Card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit autem impedit sed architec.
        </Card>
      </SubSection>
      <SubSection title='hover'>
        <Card hover={true}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit autem impedit sed architec.
        </Card>
      </SubSection>      
    </SectionContainer>
  )
}