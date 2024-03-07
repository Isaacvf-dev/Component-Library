import React from "react";
import SectionContainer from "../SectionContainer";
import SubSection from "../SubSection";
import Testimonial from "./Testmonial";

export default function TestimonialSection() {
  return (
    <SectionContainer title={'Testimonial'}>
      <SubSection title='with pic'>
        <Testimonial
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit autem impedit sed architec.'}
          author={'May Andersons'}
          role={'Workcation, CTO'}
          pic={'https://s3-alpha-sig.figma.com/img/ebbd/218e/43da4fc0a30598c1777461ca480d0fde?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FwR9foCwmUySweBS~NgcypaI~erZvawKDB-~tgS1RzAEk2~GnllgCL7g9kZjdueezHvw9xvJg4ssvbcfcLYj8NkOgv0W~k9UVm~vD~8z3MMTxfEoJI09A8CWCXGU8Fx5DVSrpVvEtMcgDReeDJV~1ytNeexNPWdo0pDwXKbnfgV0B39~uG3ILp1HWL0rZ6e7Y~htN0zb8Gq3TrRx4I8zRy55mUOscYQ~YvsOch6sNH~mKPFSMmqgsI8e69QoEi29svN89RraCLp1AnL5rXj9RRh2mDYsL-eGKuZMjZ2HsT1tT33LyMCtHm6Dim06deM1QVzp7HvCfhJUeVZuOKW3Lw__'}
        >
          
        </Testimonial>
      </SubSection>
      <SubSection title='no pic'>
        <Testimonial>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit autem impedit sed architec.
        </Testimonial>
      </SubSection>      
    </SectionContainer>
  )
}