import React from 'react';
import Menu from './menu';
import Picture from '../utils/picture';

// TODO: Навигация слайдинг меню дождаться ответа и запилить

const HeaderBottom = () => (
  <div className="header__bottom-container">
    <div className="header__inner">
      <div className="header__bottom header-bottom">
        <div className="header-bottom__mobile">
          <Picture
            className="header-bottom__mobile-top-img"
            src="./img/mobile-logo"
            width="222"
            height="33"
            alt="Логотип компании Лабдиагностика"
          />
          <div
            className="header-bottom__mobile-burger-button-container"
            aria-label="Равернуть меню"
          >
            <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--1" />
            <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--2" />
            <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--3" />
          </div>
        </div>
        <div className="header-bottom__left">
          <Picture
            containerClass="header-bottom__mobile-top-img"
            src="./img/logo"
            width="230"
            height="34"
            alt="Логотип компании Лабдиагностика"
          />
        </div>
        <div className="header-bottom__right">
          <a
            href="some"
            className="nav__button button"
            aria-label="Ссылка на страницу для записи к врачу, или попап если скрипт работае"
          >
            Записаться к врачу
          </a>
        </div>
        <Menu />
      </div>
    </div>
  </div>
);

export default HeaderBottom;
