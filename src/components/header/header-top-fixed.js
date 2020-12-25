import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Picture from '../utils/picture';
import HeaderInner from '../../containers/header-inner';
import CitiesModal from './cities-modal';
import TelIcon from '../../icons/tel-icon.svg';
import MarkMapIcon from '../../icons/map-mark-icon.svg';
import mapStateToPropsGenerator from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';
import components from '../../constants/components';
import SearchButton from '../utils/searchButton';
import CartIcon from '../../icons/cart-icon.svg';
import Cart from './cart';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const HeaderTopFixed = ({
  cities, setCity, removeItem, cartData, openSearch,
}) => {
  const MOBILE_WIDTH = 320;
  const screenWidth = window.screen.height;
  const [citiesModalState, setCitiesModalState] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const prevState = usePrevious(cartModal);

  const onCitiesClickHandler = () => {
    setCitiesModalState(!citiesModalState);
  };

  const onClickClosePopupHandler = () => {
    setCitiesModalState(false);
  };

  useEffect(() => {
    setCitiesModalState(false);
  }, [cities.currentCity]);

  const onCloseClickHandler = () => {
    setCartModal(true);
  };

  const onItemDeleteClickHandler = (id) => {
    removeItem(id);
  };

  useEffect(() => {
    setCartModal(prevState);
  }, [cartData]);

  return (
    <HeaderInner>
      <div className="header__top-fixed header-top-fixed">
        <div className="header-top-fixed__left">
          <Picture
            containerClass="header-top-fixed__img-container"
            imgClass="header-top-fixed__img"
            src={screenWidth >= MOBILE_WIDTH ? './img/mobile-logo' : './img/fixed-logo'}
            width="230"
            height="34"
            alt="Логотип компании Лабдиагностика"
          />
          <div className="header-top__left-cities-container">
            <div className="header-top__left-cities cities cities--fixed" data-state="default">
              <a
                href="some"
                className="cities__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onCitiesClickHandler();
                }}
                arial-label="Открыть попап для выбора города"
              >
                <span className="cities__city">{cities.currentCity}</span>
              </a>
              {citiesModalState && (
                <CitiesModal
                  citiesData={cities.list}
                  closeHandler={onClickClosePopupHandler}
                  setCurrentCity={setCity}
                  modalState={citiesModalState}
                />
              )}
            </div>
            <MarkMapIcon
              className="header-top__left-icon header-top__left-icon--cities"
              width="6.6"
              height="9.3"
              stroke="currentColor"
              fill="currentColor"
            />
          </div>
        </div>
        <p className="header-top__left-tel">
          <TelIcon width="9" height="9.5" stroke="currentColor" />
          +7 (999) 999-99-99
        </p>
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
          {cartModal && (
            <Cart
              removeItem={onItemDeleteClickHandler}
              cartData={cartData}
              closeHandler={onCloseClickHandler}
            />
          )}
        </a>
        <ul className="header-top-fixed__mobile-list">
          <li className="header-top-fixed__mobile-list-item">
            <a
              className="header-top-fixed__mobile-list-link header-top-fixed__mobile-list-link--mail"
              href="mailto:some"
              aria-label="Написать нам письмо"
            >
              <svg
                className="header-top-fixed__mobile-list-icon"
                width="13"
                height="13"
                fill="currentColor"
              >
                <use xlinkHref="somemail" />
              </svg>
            </a>
          </li>
          <li className="header-top-fixed__mobile-list-item">
            <a
              className="header-top-fixed__mobile-list-link header-top-fixed__mobile-list-link--tel"
              href="tel:some"
              aria-label="Позвонить нам"
            >
              <svg
                className="header-top-fixed__mobile-list-icon"
                width="13"
                height="13"
                fill="currentColor"
              >
                <use xlinkHref="sometel-icon" />
              </svg>
            </a>
          </li>
          <li className="header-top-fixed__mobile-list-item">
            <a
              className="header-top-fixed__mobile-list-link header-top-fixed__mobile-list-link--search"
              href="some"
              aria-label="Развернуть строку поиска"
            >
              <svg className="header-top-fixed__mobile-list-icon" width="13" height="13">
                <use xlinkHref="somesearch-icon" stroke="currentColor" />
              </svg>
            </a>
          </li>
        </ul>
        <div
          className="header-top-fixed__mobile-burger-button-container"
          aria-label="Равернуть меню"
        >
          <div className="header-top-fixed__mobile-burger-bar header-top-fixed__mobile-burger-bar--1" />
          <div className="header-top-fixed__mobile-burger-bar header-top-fixed__mobile-burger-bar--2" />
          <div className="header-top-fixed__mobile-burger-bar header-top-fixed__mobile-burger-bar--3" />
        </div>
      </div>
    </HeaderInner>
  );
};

HeaderTopFixed.propTypes = {
  cities: PropTypes.shape({
    currentCity: PropTypes.string.isRequired,
    list: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
  setCity: PropTypes.func.isRequired,
  cartData: PropTypes.objectOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func.isRequired,
  openSearch: PropTypes.func.isRequired,
};

const HeaderToFixedConnectedWCities = connect(
  mapStateToPropsGenerator(components.CITIES),
  mapDispatchToProps(components.CITIES),
)(HeaderTopFixed);

export default connect(
  mapStateToPropsGenerator(components.CART),
  mapDispatchToProps(components.CART),
)(HeaderToFixedConnectedWCities);
