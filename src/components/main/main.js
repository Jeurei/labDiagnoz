import React from 'react';
import Search from './search';
import ActualOffers from './actual-offers';
import Complexes from './complexes';
import Links from './links';
import Articles from './articles';
import Shares from './shares';
import Features from './features';

const Main = () => (
  <main className="main">
    <h1 className="main__title visually-hidden">
      Сайт компании &lquot;Лабдиагностика&rquot;
    </h1>
    <Search />
    <ActualOffers />
    <Complexes />
    <Links />
    <Articles />
    <Shares />
    <Features />
  </main>
);

export default Main;
