import React from 'react';
import BreadCrumbs from 'common/breadCrumbs';
import FixedCircle from 'common/fixedCircle';
import MainContainer from 'containers/main-container';
import Section from 'containers/section';
import SectionInner from 'containers/section-inner';
import ToHome from './toHome';

const ToHomePage = () => {
  return (
    <MainContainer>
      <FixedCircle />
      <Section>
        <SectionInner>
          <BreadCrumbs className="to-home" />
          <ToHome />
        </SectionInner>
      </Section>
    </MainContainer>
  );
};

export default ToHomePage;
