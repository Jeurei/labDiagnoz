import React, { useContext } from 'react';
import { css, useTheme, keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import components from 'constants/components';
import mapDispatchToProps from 'store/mapDispatchToProps';
import { ReactComponent as Logo } from 'icons/logo.svg';
import { ReactComponent as SmallLogo } from 'icons/small-logo.svg';
import { ReactComponent as MarkMapIcon } from 'icons/map-mark-icon.svg';
import { ReactComponent as MailIcon } from 'icons/mail.svg';
import { ReactComponent as TelIcon } from 'icons/tel-icon.svg';
import { ReactComponent as CartIcon } from 'icons/cart-icon.svg';

import SearchButton from 'common/searchButton';
import { breakpointsMap } from 'src/constants/styles';
import Menu from './menu';
import { headerContext } from './header';

// import Burger from 'common/burger';

const HeaderMobileBottom = ({
  isHidden,
  cities,
  cart,
  openSearch,
  animationDuration,
}) => {
  const {
    cities: { onCitiesClickHandler },
    cart: { onClickHandler },
  } = useContext(headerContext);

  const theme = useTheme();

  const showingAnimation = keyframes`
  0% {
    opacity: 0;
    max-height: 0;
  }

  70%{
    padding-top: 22px;
    max-height: 80px;
    padding-bottom: 22px;
  }

  100% {
    opacity: 1;
  `;

  const hidingAnimation = keyframes`
  0% {
    max-height: 80px;
  }

  100% {
    padding-top:0;
    max-height: 0;
    padding-bottom: 0;
  `;

  const opacityAnimation = keyframes`

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  `;

  const opacityAnimationHidden = keyframes`

  50% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  `;

  return (
    <div
      className="header__bottom-container"
      css={
        !isHidden
          ? css`
              animation: ${hidingAnimation} ${animationDuration}s forwards
                ease-in-out;
            `
          : css`
              animation: ${showingAnimation} ${animationDuration}s forwards
                ease-in-out;
            `
      }
    >
      <div
        className="header__inner"
        css={
          !isHidden
            ? css`
                animation: ${opacityAnimationHidden} ${animationDuration}s
                  forwards ease-in-out;
              `
            : css`
                animation: ${opacityAnimation} ${animationDuration}s forwards
                  ease-in-out;
              `
        }
      >
        <div className="header__bottom header-bottom">
          <div className="header-bottom__mobile">
            <Link
              to="/"
              css={css`
                margin-right: 20px;
              `}
            >
              <SmallLogo width="28px" height="34px" />
            </Link>
            <div
              css={css`
                position: relative;
              `}
            >
              <div
                className="cities"
                css={css`
                  margin-right: auto;
                `}
              >
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
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;

              ${breakpointsMap.TABLET} {
                display: none;
              }
            `}
          >
            <a
              href="/"
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${theme.colors.colorText.hex};

                &:hover {
                  color: #687894;
                }
              `}
            >
              <TelIcon
                width="12"
                height="13"
                transform="scale(1.3)"
                fill="currentColor"
              />
            </a>
            <a
              href="/"
              css={css`
                display: flex;
                align-items: center;
                margin-left: 20px;

                &:hover {
                  color: #946df6;
                }
              `}
            >
              <MailIcon
                width="13.5"
                height="7.5"
                transform="scale(1.7)"
                fill="currentColor"
              />
            </a>
            <div
              className="header-top__right-search-container"
              css={css`
                margin-left: 10px;
              `}
            >
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
                  onClickHandler();
                }}
              />
              <span
                className="header-top__mobile-list-link-cart-value"
                css={css`
                  top: -5px;
                  left: 17px;
                `}
              >
                {Object.keys(cart).length}
              </span>
            </a>
          </div>
          <div className="header-bottom__left">
            <Link to="/">
              <Logo
                className="header-bottom__mobile-top-img"
                width="230"
                height="34"
                alt="Логотип компании Лабдиагностика"
              />
            </Link>
          </div>
          <ul
            css={css`
              display: none;
              height: 100%;
              flex-direction: row;
              padding: 0;
              padding-right: 30px;
              margin: 0;
              list-style: none;

              ${breakpointsMap.DESKTOP} {
                display: flex;
              }
            `}
          >
            <ul
              css={css`
                padding: 0;
                list-style: none;
              `}
            >
              <li
                css={css`
                  position: relative;
                  display: flex;
                  min-height: 100%;

                  &:after,
                  &:before {
                    position: absolute;
                    top: 50%;
                    right: -18px;
                    display: block;
                    width: 10px;
                    height: 1px;
                    background-color: ${theme.colors.colorText.hex};
                    content: '';
                  }

                  &:after {
                    transform: rotate(45deg);
                  }
                  &:before {
                    right: -25px;
                    transform: rotate(-45deg);
                  }

                  ${breakpointsMap.DESKTOP} {
                    &:hover {
                      ul {
                        display: flex;
                      }
                    }
                  }
                `}
              >
                <Link
                  to="/"
                  css={css`
                    display: flex;
                    min-height: 100%;
                    align-items: center;
                  `}
                >
                  Корпоративным клиентам{' '}
                  <ul
                    css={css`
                      position: absolute;
                      z-index: 1000;
                      top: 100%;
                      left: calc(100% - 1170px);
                      display: none;
                      min-width: 1170px;
                      padding: 0;
                      background-color: ${theme.colors.white};
                      box-shadow: ${theme.colors.boxShadow};
                      list-style: none;

                      &:hover {
                        display: none;
                      }
                    `}
                  >
                    <li
                      css={css`
                        display: flex;
                        width: 50%;
                        min-height: 297px;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-image: url('img/corpo-nav-bg.png');
                        background-repeat: no-repeat;
                        background-size: cover;
                        color: ${theme.colors.white};
                        list-style: none;

                        @media (min-resolution: 1.5dppx),
                          (min-resolution: 144dpi) {
                          background-color: url(img/corpo-nav-bg@2x.png);
                        }
                      `}
                    >
                      <h3
                        css={css`
                          margin-right: 0;
                          margin-bottom: 0;
                          font-size: 33px;
                          font-weight: 500;
                        `}
                      >
                        Корпоративным клиентам
                      </h3>
                      <p
                        css={css`
                          font-size: 16px;
                          text-align: center;
                        `}
                      >
                        Какой то текст чтобы корпоративный
                        <br />
                        клиент узнал себя
                      </p>
                      <Link to="/corpo" />
                    </li>
                    <li
                      css={css`
                        width: 50%;
                        padding: 0;
                      `}
                    >
                      <div>
                        <ul
                          css={css`
                            display: flex;
                            padding: 0;
                            padding: 46px 36px;
                            font-size: 16px;
                            list-style: none;
                          `}
                        >
                          <li>Варианты сотрудничества</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </Link>
              </li>
            </ul>
          </ul>
          <div className="header-bottom__right">
            <a
              href="some"
              className="nav__button button"
              aria-label="Ссылка на страницу для записи к врачу, или попап если скрипт работает"
            >
              Записаться к врачу
            </a>
          </div>
          <div
            css={css`
              display: none;

              ${breakpointsMap.TABLET} {
                display: flex;
                align-items: center;
              }
            `}
          >
            <div
              className="header-top__right-search-container"
              css={css`
                margin-left: 10px;
              `}
            >
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
                  onClickHandler();
                }}
              />
              <span className="header-top__mobile-list-link-cart-value">
                {Object.keys(cart).length}
              </span>
            </a>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

HeaderMobileBottom.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  cities: PropTypes.shape({
    currentCity: PropTypes.string.isRequired,
  }).isRequired,
  openSearch: PropTypes.func.isRequired,
  cart: PropTypes.objectOf(PropTypes.object).isRequired,
  animationDuration: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  const { cities, cart } = state;

  return { cities, cart };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps(components.CITIES),
)(HeaderMobileBottom);
