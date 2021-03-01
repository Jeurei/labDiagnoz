import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { randomId } from 'src/components/utils/common';
import Routes from '../../routes';
import ServicesTabs from './servicesTabs';

const Services = () => {
  const { path } = useRouteMatch();

  return (
    <>
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
    </>
  );
};

export default Services;
