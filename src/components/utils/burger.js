import React from 'react';
import PropTypes from 'prop-types';

const Burger = ({ action }) => (
  <button
    className="header-bottom__burger-button-container"
    aria-label="Равернуть меню"
    type="button"
    onClick={() => action()}
  >
    <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--1" />
    <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--2" />
    <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--3" />
  </button>
);

Burger.propTypes = {
  action: PropTypes.func.isRequired,
};
