import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import mapStateToPropsGenerator from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';
import components from '../../constants/components';
import SearchButton from '../common/searchButton';
import { ReactComponent as CartIcon } from '../../icons/cart-icon.svg';
import Cart from './cart';

const HeaderTopRight = ({ cartData, removeItem, openSearch }) => {
  const [cartModal, setCartModal] = useState(false);

  const onCloseClickHandler = () => {
    setCartModal(false);
  };

  const onItemDeleteClickHandler = (id) => {
    removeItem(id);
  };

  return (
    <div className="header-top__right">
      <div className="header-top__right-search-container">
        <SearchButton
          buttonClass="header-top__right-search-button"
          label="Открыть строку поиска"
          action={openSearch}
        />
      </div>
      <a
        href="some"
        className="header-top__link header-top__link--cart"
        aria-label="Перейти на страницу корзины"
        onClick={(evt) => {
          evt.preventDefault();
        }}
      >
        <CartIcon
          className="header-top__list-icon header-top__list-icon--cart"
          width="21"
          height="19"
          fill="currentColor"
          onClick={(evt) => {
            evt.preventDefault();
            setCartModal(!cartModal);
          }}
        />
        <span className="header-top__mobile-list-link-cart-value">
          {Object.keys(cartData).length}
        </span>
        {cartModal && (
          <Cart
            removeItem={onItemDeleteClickHandler}
            cartData={cartData}
            closeHandler={onCloseClickHandler}
          />
        )}
      </a>
    </div>
  );
};

HeaderTopRight.propTypes = {
  cartData: PropTypes.objectOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func.isRequired,
  openSearch: PropTypes.func.isRequired,
};

export default connect(
  mapStateToPropsGenerator(components.CART),
  mapDispatchToProps(components.CART),
)(HeaderTopRight);
