import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from './containers/header';

const App = () => {
  const [cartData, setCartData] = useState({ ...data.cart });
  const [citiesData, setCititesData] = useState({ ...data.cities });

  return (
    <>
      <Header cartData={cartData} citiesData={citiesData} />
    </>
  );
};

export default App;
