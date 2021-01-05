import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'react-motion-drawer';
import { connect } from 'react-redux';
import mapStateToPropsGenerator from '../../store/mapStateToProps';
import components from '../../constants/components';
import CrossButton from '../common/crossButton';
import NavItem from './nav-item';
import { randomId } from '../utils/common';

const Menu = ({ menu }) => {
  const [menuState, setMenuState] = useState(false);

  const closeHandler = () => {
    setMenuState(false);
  };

  const onChangeHandler = (bool) => {
    document.body.style = `overflow: ${menuState ? 'scroll' : 'hidden'}`;
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
        <CrossButton buttonClass="nav__close-buttom" label="Закрыть меню" action={closeHandler} />
        <ul className="nav__list">
          {menu.map((el) => (
            <NavItem data={el} key={randomId()} />
          ))}
        </ul>
      </Drawer>
    </>
  );
};

Menu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      children: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.object)])
        .isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToPropsGenerator(components.MENU), null)(Menu);
