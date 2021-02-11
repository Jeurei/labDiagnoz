import React from 'react';
import BreadCrumbs from 'common/breadCrumbs';
import Discounts from 'common/discounts';
import FixedCircle from 'common/fixedCircle';
import MainContainer from 'containers/main-container';
import Section from 'containers/section';
import SectionInner from 'containers/section-inner';
import Corpo from './corpo';

const AnalyzePage = () => {
  return (
    <MainContainer>
      <FixedCircle />
      <Section>
        <SectionInner>
          <BreadCrumbs className="corpo" />
        </SectionInner>
        <Corpo />
        <SectionInner>
          <Discounts />
        </SectionInner>
      </Section>
    </MainContainer>
  );
};

export default AnalyzePage;
