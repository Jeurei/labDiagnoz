import React, { useState } from 'react';
import Header from './components/header/header';
import getMock from './mock/mock';

const App = () => {
  const data = getMock();

  const [cartData, setCartData] = useState({ ...data.cart });
  const [citiesData, setCititesData] = useState({ ...data.cities });

  return (
    <>
      <Header cartData={cartData} citiesData={citiesData} />
    </>
  );
};

export default App;
