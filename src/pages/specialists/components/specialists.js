import React from 'react';
import MainContainer from '../../../containers/main-container';
import SectionInner from '../../../containers/section-inner';
// eslint-disable-next-line import/no-cycle
import BreadCrumbs from '../../../components/common/breadCrumbs';
import Filter from './filter';
import SpecialistsCatalog from './specialists-catalog';

const Specialists = () => {
  return (
    <MainContainer>
      <section className="main__specialists main__section--specialists section specialists">
        <SectionInner>
          <BreadCrumbs className="specialists" />
          <h1 className="main__title">Специалисты</h1>
          <Filter />
          <SpecialistsCatalog />
        </SectionInner>
      </section>
    </MainContainer>
  );
};

export default Specialists;
