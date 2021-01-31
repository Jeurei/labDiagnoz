import React from 'react';
import FixedCircle from 'src/components/common/fixedCircle';
import MainContainer from 'src/containers/main-container';
import Section from 'src/containers/section';
import SectionInner from 'src/containers/section-inner';

const MedCenters = () => (
  <MainContainer>
    <FixedCircle />
    <Section>
      <SectionInner />
    </Section>
  </MainContainer>
);

export default MedCenters;
