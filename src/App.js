import React from 'react';
import { YMaps } from 'react-yandex-maps';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';

const App = () => (
  <YMaps>
    <Header />
    <Main />
    <Footer />
  </YMaps>
);

export default App;
