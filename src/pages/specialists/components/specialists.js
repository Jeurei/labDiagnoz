import React from 'react';
import MainContainer from '../../../containers/main-container';
import SectionInner from '../../../containers/section-inner';
import BreadCrumbs from '../../common/breadCrumbs';
import Filter from './filter';

const Specialists = () => {
  return (
    <MainContainer>
      <section className="main__specialists main__section--specialists section specialists">
        <SectionInner>
          <BreadCrumbs className="specialists" />
          <h1 className="main__title">Специалисты</h1>
          <Filter />
        </SectionInner>
      </section>
    </MainContainer>
  );
};

export default Specialists;
