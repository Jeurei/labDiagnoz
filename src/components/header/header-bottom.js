import React from 'react';

const HeaderBottom = () => (
  <div className="header__bottom-container">
    <div className="header__inner">
      <div className="header__bottom header-bottom">
        <div className="header-bottom__mobile">
          <picture className="header-bottom__mobile-top-img">
            <source
              type="image/webp"
              srcSet="
                ./img/mobile-logo.webp    1x,
                ./img/mobile-logo@2x.webp 2x
              "
            />
            <img
              src="./img/mobile-logo.png"
              srcSet="./img/mobile-logo@2x.png 2x"
              width="222"
              height="33"
              alt="Логотип компании Лабдиагностика"
            />
          </picture>
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
          <picture className="header-bottom__mobile-top-img">
            <source type="image/webp" srcSet="./img/logo.webp 1x, ./img/logo@2x.webp 2x" />
            <img
              src="./img/logo.png"
              srcSet="./img/logo@2x.png 2x"
              width="230"
              height="34"
              alt="Логотип компании Лабдиагностика"
            />
          </picture>
        </div>
        <div className="header-bottom__right">
          <div
            className="header-bottom__mobile-burger-button-container"
            aria-label="Равернуть меню"
          >
            <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--1" />
            <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--2" />
            <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--3" />
          </div>
          <nav className="header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="some" className="nav__link" aria-label="Ссылка на страницу услуг">
                  Услуги
                </a>
                <ul className="nav__sub-list" />
              </li>
              <li className="nav__item">
                <a
                  href="some"
                  className="nav__link"
                  aria-label="Ссылка на страницу медицинских центров"
                >
                  Медицинские центры
                </a>
              </li>
              <li className="nav__item">
                <a href="some" className="nav__link" aria-label="Ссылка на страницу специалистов">
                  Специалисты
                </a>
                <ul className="nav__sub-list" />
              </li>
              <li className="nav__item">
                <a
                  href="some"
                  className="nav__link"
                  aria-label="Ссылка на страницу для корпоративных клиентов"
                >
                  Корпоративным клиентам
                </a>
              </li>
              <li className="nav__item">
                <a href="some" className="nav__link" aria-label="Ссылка на страницу акций">
                  Акции
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="some"
                  className="nav__link"
                  aria-label="Ссылка на страницу с информацией о компании"
                >
                  О компании
                </a>
                <ul className="nav__sub-list" />
              </li>
              <li className="nav__item">
                <a href="some" className="nav__link" aria-label="Ссылка на страницу пресс-центра">
                  Пресс-центр
                </a>
                <ul className="nav__sub-list" />
              </li>
              <li className="nav__item">
                <a href="some" className="nav__link" aria-label="Ссылка на страницу с вакансиями">
                  Вакансии
                </a>
              </li>
            </ul>
            <a
              href="some"
              className="nav__button button"
              aria-label="Ссылка на страницу для записи к врачу, или попап если скрипт работае"
            >
              Записаться к врачу
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderBottom;
