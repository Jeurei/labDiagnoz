import React from 'react';
import MainContainer from 'containers/main-container';
import Search from './search';
import ActualOffers from './actual-offers';
import Complexes from './complexes';
// import Links from './links';
import Articles from './articles';
import Shares from './shares';
import Features from './features';

const Main = () => (
  <MainContainer>
    <h1 className="main__title visually-hidden">
      Сайт компании &lquot;Лабдиагностика&rquot;
    </h1>
    <Search />
    <ActualOffers />
    <Complexes />
    {/* <Links /> */}
    <Articles />
    <Shares />
    <Features />
  </MainContainer>
);

export default Main;
