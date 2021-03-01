import React from 'react';
import BreadCrumbs from 'common/breadCrumbs';
import MainContainer from 'containers/main-container';
import Section from 'containers/section';
import SectionInner from 'containers/section-inner';
import NotFound from './notFound';

const AnalyzePage = () => {
  return (
    <MainContainer>
      <Section>
        <SectionInner>
          <BreadCrumbs className="analyze" />
          <NotFound />
        </SectionInner>
      </Section>
    </MainContainer>
  );
};

export default AnalyzePage;
