import React from 'react';
import HeaderInner from './header-inner';

const HeaderTop = () => (
  <div className="header__top-container">
    <HeaderInner>
      <div className="header__top header-top">
        <div className="header-top__left">
          <div className="header-top__left-cities-container">
            <div className="header-top__left-cities cities" data-state="default">
              <a href="some" className="cities__link">
                <span className="cities__city">Пермь</span>
              </a>
              <div className="cities__modal" />
            </div>
            <svg
              className="header-top__left-icon header-top__left-icon--cities"
              width="6.6"
              height="9.3"
              stroke="currentColor"
              fill="currentColor"
            >
              <use xlinkHref="somemap-mark-icon" />
            </svg>
          </div>
          <p className="header-top__left-tel">
            <svg className="header-top__left-icon" width="9" height="9.5" stroke="currentColor">
              <use xlinkHref="sometel-icon" />
            </svg>
            +7 (999) 999-99-99
          </p>
        </div>
        <div className="header-top__right">
          <div className="header-top__right-search-container">
            <button
              className="header-top__right-search-button"
              type="button"
              aria-label="Кнопка поиска"
              name="search-button"
            >
              <svg
                className="header-top__list-icon header-top__list-icon--search"
                width="19"
                height="19"
                stroke="currentColor"
                fill="none"
              >
                <use xlinkHref="somesearch-icon" />
              </svg>
            </button>
          </div>
          <a
            href="some"
            className="header-top__link header-top__link--cart"
            aria-label="Перейти на страницу корзины"
          >
            <svg
              className="header-top__list-icon header-top__list-icon--cart"
              width="21"
              height="19"
              fill="currentColor"
            >
              <use xlinkHref="somecart-icon" />
            </svg>
            <span className="header-top__mobile-list-link-cart-value">1</span>
          </a>
          <div className="header-top__right-cart-container cart-container">
            <div className="cart-container__inner">
              <div className="cart-container__modal cart-modal">
                <div className="cart-modal__top">
                  <h4 className="cart-modal__title">Корзина (4)</h4>
                  <button
                    className="cart-modal__close-button cross-button cross-button--cart-close"
                    aria-label="Кнопка закрытия модального окна корзины"
                    name="close-button"
                    type="button"
                  >
                    Иконка
                  </button>
                </div>
                <div className="cart-modal__middle">
                  <div className="cart-modal__inner">
                    <div className="cart-modal__group">
                      <h5 className="cart-modal__group-title">Анализы:</h5>
                      <ul className="cart-modal__list">
                        <li className="cart-modal__list-item">
                          <p className="cart-modal__text">
                            Тестостерон свободный (включает определение тестостерона общего и
                            свободного, ГСПГ (SHBG), расчет индекса свободных андрогенов)
                            тестостерона общего и свободного, ГСПГ (SHBG), расчет индекса
                          </p>
                          <span className="cart-modal__price">1 100 ₽</span>
                          <button
                            className="cart-modal__remove-item-button cross-button"
                            type="button"
                            aria-label="Кнопка удаления элемент someЭлемент неймsome из корзины"
                            name="remove-button"
                          >
                            Иконка
                          </button>
                        </li>
                        <li className="cart-modal__list-item">
                          <p className="cart-modal__text">Тестостерон свободный</p>
                          <span className="cart-modal__price">1 100 ₽</span>
                          <button
                            className="cart-modal__remove-item-button cross-button"
                            type="button"
                            aria-label="Кнопка удаления элемент someЭлемент неймsome из корзины"
                            name="remove-button"
                          >
                            Иконка
                          </button>
                        </li>
                        <li className="cart-modal__list-item">
                          <p className="cart-modal__text">Тестостерон свободный</p>
                          <span className="cart-modal__price">1 100 ₽</span>
                          <button
                            className="cart-modal__remove-item-button cross-button"
                            type="button"
                            aria-label="Кнопка удаления элемент someЭлемент неймsome из корзины"
                            name="remove-button"
                          >
                            Иконка
                          </button>
                        </li>
                        <li className="cart-modal__list-item">
                          <p className="cart-modal__text">Тестостерон свободный</p>
                          <span className="cart-modal__price">1 100 ₽</span>
                          <button
                            className="cart-modal__remove-item-button cross-button"
                            type="button"
                            aria-label="Кнопка удаления элемент someЭлемент неймsome из корзины"
                            name="remove-button"
                          >
                            Иконка
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="cart-modal__group">
                      <h5 className="cart-modal__group-title">Услуги по взятию биоматериала:</h5>
                      <ul className="cart-modal__list">
                        <li className="cart-modal__list-item">
                          <p className="cart-modal__text">Взятие крови</p>
                          <span className="cart-modal__price">60 ₽</span>
                          <button
                            className="cart-modal__remove-item-button cross-button"
                            type="button"
                            aria-label="Кнопка удаления элемент someЭлемент неймsome из корзины"
                            name="remove-button"
                          >
                            Иконка
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="cart-modal__bottom offer">
                  <div className="cart-modal__inner cart-modal__inner--offer">
                    <div className="offer__price-container">
                      <span className="offer__price-text">Итого:</span>
                      <span className="offer__price">1 100 ₽</span>
                    </div>
                    <button
                      className="offer__button button"
                      type="button"
                      aria-label="Кнопка оформить заказ"
                      name="order-button"
                    >
                      Оформить заказ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderInner>
  </div>
);

export default HeaderTop;
