import React from 'react';
import { Switch } from 'react-router-dom';
import { YMaps } from 'react-yandex-maps';
import RoutesWithSubRoutes from './components/common/routeWithSubRoutes';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { randomId } from './components/utils/common';
import Routes from './routes';

const App = () => {
  return (
    <YMaps>
      <Header />
      <Switch>
        {Routes.map((el) => {
          return <RoutesWithSubRoutes exact key={randomId()} {...el} />;
        })}
      </Switch>
      <Footer />
    </YMaps>
  );
};

export default App;
