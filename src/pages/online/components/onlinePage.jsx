import React from 'react';
import BreadCrumbs from 'common/breadCrumbs';
import FixedCircle from 'common/fixedCircle';
import MainContainer from 'containers/main-container';
import Section from 'containers/section';
import SectionInner from 'containers/section-inner';
import Online from './online';

const OnlinePage = () => {
  return (
    <MainContainer>
      <FixedCircle />
      <Section>
        <SectionInner>
          <BreadCrumbs className="online" />
          <Online />
        </SectionInner>
      </Section>
    </MainContainer>
  );
};

export default OnlinePage;
