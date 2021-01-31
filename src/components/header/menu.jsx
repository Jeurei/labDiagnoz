import React, { useState } from 'react';
import Drawer from 'react-motion-drawer';
import CrossButton from 'common/crossButton';
import NavItem from './nav-item';
import { randomId } from '../utils/common';
import Routes from '../../routes';

const Menu = () => {
  const [menuState, setMenuState] = useState(false);

  const closeHandler = () => {
    setMenuState(false);
  };

  const onChangeHandler = (bool) => {
    document.body.scroll = bool ? 'no' : 'yes';
    document.body.style.overflow = bool ? 'hidden' : 'scroll';
    setMenuState(bool);
  };

  return (
    <>
      <button
        className="header-bottom__burger-button-container"
        aria-label="Равернуть меню"
        type="button"
        onClick={() => setMenuState(!menuState)}
      >
        <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--1" />
        <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--2" />
        <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--3" />
      </button>
      <Drawer
        open={menuState}
        right
        className="nav__menu-container"
        overlayClassName="nav__overlay"
        onChange={onChangeHandler}
      >
        <CrossButton
          buttonClass="nav__close-buttom"
          label="Закрыть меню"
          action={closeHandler}
        />
        <ul className="nav__list">
          {Object.values(Routes).map((el) => (
            <NavItem data={el} key={randomId()} />
          ))}
        </ul>
      </Drawer>
    </>
  );
};

export default Menu;
