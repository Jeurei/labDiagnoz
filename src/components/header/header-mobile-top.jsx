import React from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/react';
import { ReactComponent as Logo } from 'icons/logo.svg';
import { breakpointsMap } from 'src/constants/styles';
import { Link } from 'react-router-dom';
import Menu from './menu';
import HeaderTopLeft from './header-top-left';
import HeaderTopRight from './header-top-right';

const HeaderMobileTop = ({ openSearch, isHidden, animationDuration }) => {
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
      className="header__top-container"
      css={
        isHidden
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
          isHidden
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
        <div
          className="header__top header-top"
          css={css`
            flex-wrap: wrap;
          `}
        >
          <div
            css={css`
              display: flex;
              width: 100%;
              padding-top: 15px;
              padding-bottom: 15px;
            `}
          >
            <HeaderTopLeft />
            <HeaderTopRight openSearch={openSearch} />
          </div>
          <div
            className="header-bottom__left"
            css={css`
              display: none;
              width: 100%;
              padding: 0;
              padding-top: 15px;

              ${breakpointsMap.TABLET} {
                display: flex;
                padding-right: 10px;
                padding-left: 10px;
                border-top: 1px solid rgba(112, 112, 112, 0.2);
              }
            `}
          >
            <Link
              to="/"
              css={css`
                margin-right: auto;
              `}
            >
              <Logo
                className="header-bottom__mobile-top-img"
                width="230"
                height="34"
                alt="Логотип компании Лабдиагностика"
              />
            </Link>
            <div className="header-bottom__right">
              <a
                href="some"
                className="nav__button button"
                aria-label="Ссылка на страницу для записи к врачу, или попап если скрипт работает"
              >
                Записаться к врачу
              </a>
            </div>
            <Menu />
          </div>

          <div
            css={css`
              display: flex;
              width: 100%;
              padding-top: 12px;

              ${breakpointsMap.TABLET} {
                display: none;
              }
            `}
          >
            <Logo
              width="222px"
              height="33px"
              css={css`
                margin-right: auto;
              `}
            />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderMobileTop.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  animationDuration: PropTypes.number.isRequired,
  openSearch: PropTypes.func.isRequired,
};

export default HeaderMobileTop;
