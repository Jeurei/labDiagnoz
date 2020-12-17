import React from 'react';
import PropTypes from 'prop-types';
import HeaderTop from './header-top';

const Header = ({ cartData, citiesData }) => (
  <header className="header">
    <HeaderTop cartData={cartData} citiesData={citiesData} />
  </header>
);

Header.propTypes = {
  cartData: PropTypes.objectOf(PropTypes.object).isRequired,
  citiesData: PropTypes.shape({
    currentCity: PropTypes.string.isRequired,
    list: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Header;
