import React from 'react';

const HeaderTopFixed = () => {
  <div className="header__top-fixed-container">
    <div className="header__inner">
      <div className="header__top-fixed header-top-fixed">
        <img
          src="https://via.placeholder.com/34x34.png"
          alt="Логотип компании Лабдиагностика"
          className="header-top-fixed-img"
          width="34"
          height="34"
        />
        <div className="header-top__left-cities cities">
          <div className="cities__modal" />
        </div>
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
          <li className="header-top-fixed__mobile-list-item">
            <a
              href="some"
              className="header-top-fixed__mobile-list-link header-top-fixed__mobile-list-link--cart"
              aria-label="Ссылка на страницу с корзиной"
            >
              <svg
                className="header-top-fixed__mobile-list-icon"
                width="13"
                height="13"
                fill="currentColor"
              >
                <use xlinkHref="somecart-icon" />
              </svg>
              <span className="header-top-fixed__mobile-list-link-cart-value cart-value">1</span>
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
    </div>
  </div>;
};

export default HeaderTopFixed;
