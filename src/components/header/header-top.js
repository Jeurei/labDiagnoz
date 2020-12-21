import React from 'react';
import HeaderInner from '../../containers/header-inner';
import HeaderTopLeft from './header-top-left';
import HeaderTopRight from './header-top-right';

const HeaderTop = () => (
  <div className="header__top-container">
    <HeaderInner>
      <div className="header__top header-top">
        <HeaderTopLeft />
        <HeaderTopRight />
      </div>
    </HeaderInner>
  </div>
);

export default HeaderTop;
