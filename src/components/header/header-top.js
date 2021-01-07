import React from 'react';
import PropTypes from 'prop-types';
import HeaderInner from '../../containers/header-inner';
import HeaderTopLeft from './header-top-left';
import HeaderTopRight from './header-top-right';

const HeaderTop = ({ openSearch }) => (
  <div className="header__top-container">
    <HeaderInner>
      <div className="header__top header-top">
        <HeaderTopLeft />
        <HeaderTopRight openSearch={openSearch} />
      </div>
    </HeaderInner>
  </div>
);

HeaderTop.propTypes = {
  openSearch: PropTypes.func.isRequired,
};

export default HeaderTop;
