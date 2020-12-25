import React from 'react';
import Search from './search';
import ActualOffers from './actual-offers';
import Complexes from './complexes';

const Main = () => (
  <main className="main">
    <h1 className="main__title visually-hidden">Сайт компании &lquot;Лабдиагностика&rquot;</h1>
    <Search />
    <ActualOffers />
    <Complexes />
  </main>
);

export default Main;
