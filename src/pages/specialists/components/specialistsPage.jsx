import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import BreadCrumbs from 'src/components/common/breadCrumbs';
import FixedCircle from 'src/components/common/fixedCircle';
import MainContainer from 'src/containers/main-container';
import SectionInner from 'src/containers/section-inner';
import Discounts from 'common/discounts';
import FullSpecialistInfo from './fullSpecialistsInfo';
import Specialists from './specialists';

const SpecialistsPage = () => {
  const { path } = useRouteMatch();

  return (
    <MainContainer>
      <FixedCircle />
      <section className="main__specialists main__section--specialists section specialists">
        <SectionInner>
          <BreadCrumbs className="specialists" />
          <Switch>
            <Route exact path={path} render={() => <Specialists />} />
            <Route
              path={`${path}/:specialistId`}
              render={() => <FullSpecialistInfo />}
            />
          </Switch>
          <Discounts />
        </SectionInner>
      </section>
    </MainContainer>
  );
};

export default SpecialistsPage;
