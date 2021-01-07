import React from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/react';
import Menu from './menu';
import Picture from '../common/picture';
import DropDown from '../../icons/dropdown.svg';

// import Burger from '../common/burger';

const HeaderExpandButton = (isHidden, action) => (
  <button
    className={`header__expand-button ${isHidden ? 'visually-hidden' : ''}`}
    type="button"
    aria-label="Развернуть нижний хедер"
    onClick={action}
  >
    <DropDown
      className="header__expand-button-icon"
      width="25px"
      height="25px"
      fill="none"
      stroke="currentColor"
    />
  </button>
);

const HeaderBottom = ({
  isHidden,
  animationDuration,
  clickHandler,
  headerBottomState,
}) => {
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

  const onButtonClickHandler = () => {
    clickHandler(!headerBottomState);
  };

  return (
    <div
      className="header__bottom-container"
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
        <div className="header__bottom header-bottom">
          <div className="header-bottom__mobile">
            <Picture
              containerClass="header-bottom__mobile-top-img"
              src="./img/mobile-logo"
              width="222"
              height="33"
              alt="Логотип компании Лабдиагностика"
            />
            {/* <Burger className="header-bottom__mobile-burger" /> */}
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
      {HeaderExpandButton(!isHidden, onButtonClickHandler)}
    </div>
  );
};

HeaderBottom.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  animationDuration: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  headerBottomState: PropTypes.bool.isRequired,
};

export default HeaderBottom;
