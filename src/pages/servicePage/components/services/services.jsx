import React from 'react';
import BreadCrumbs from 'common/breadCrumbs';
import MainContainer from 'containers/main-container';
import Section from 'containers/section';
import SectionInner from 'containers/section-inner';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { randomId } from 'src/components/utils/common';
import FixedCircle from 'common/fixedCircle';
import Discounts from 'common/discounts';
import Routes from '../../routes';
import ServicesTabs from './servicesTabs';

const Services = () => {
  const { path } = useRouteMatch();

  return (
    <MainContainer>
      <FixedCircle />
      <Section>
        <SectionInner>
          <BreadCrumbs className="services" />
          <h1 className="main__title">Услуги</h1>
          <ServicesTabs />
          <Switch>
            {Routes.map((el) => {
              return (
                <Route
                  path={`${path}${el.path}`}
                  render={() => <el.Component />}
                  key={randomId()}
                />
              );
            })}
          </Switch>
          <Discounts />
        </SectionInner>
      </Section>
    </MainContainer>
  );
};

export default Services;
