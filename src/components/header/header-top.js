import React from 'react';
import PropTypes from 'prop-types';
import HeaderInner from './header-inner';
import HeaderTopLeft from './header-top-left';
import HeaderTopRight from './header-top-right';

const HeaderTop = ({ cartData, citiesData }) => (
  <div className="header__top-container">
    <HeaderInner>
      <div className="header__top header-top">
        <HeaderTopLeft citiesData={citiesData} />
        <HeaderTopRight cartData={cartData} />
      </div>
    </HeaderInner>
  </div>
);

HeaderTop.propTypes = {
  cartData: PropTypes.objectOf(PropTypes.object).isRequired,
  citiesData: PropTypes.shape({
    currentCity: PropTypes.string.isRequired,
    list: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default HeaderTop;
