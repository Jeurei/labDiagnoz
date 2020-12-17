import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchButton from '../utils/searchButton';
import CartIcon from '../../icons/cart-icon.svg';
import Cart from './cart';

const HeaderTopRight = ({ cartData }) => {
  const [cartModal, setCartModal] = useState(false);

  const onCloseClickHandler = () => {
    setCartModal(false);
  };

  return (
    <div className="header-top__right">
      <div className="header-top__right-search-container">
        <SearchButton buttonClass="header-top__right-search-button" label="Открыть строку поиска" />
      </div>
      <a
        href="some"
        className="header-top__link header-top__link--cart"
        aria-label="Перейти на страницу корзины"
        onClick={(evt) => {
          evt.preventDefault();
          setCartModal(!cartModal);
        }}
      >
        <CartIcon
          className="header-top__list-icon header-top__list-icon--cart"
          width="21"
          height="19"
          fill="currentColor"
        />
        <span className="header-top__mobile-list-link-cart-value">
          {Object.keys(cartData).length}
        </span>
        {cartModal ? <Cart cartData={cartData} closeHandler={onCloseClickHandler} /> : ''}
      </a>
    </div>
  );
};

HeaderTopRight.propTypes = {
  cartData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default HeaderTopRight;
