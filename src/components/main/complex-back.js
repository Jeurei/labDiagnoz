import React from 'react';
import PropTypes from 'prop-types';
import { ENTER_KEY_CODE } from '../../constants/keys';

const ComplexBack = ({ action }) => (
  <div className="complex__full">
    <h3 className="complex__full-title">Анализы комплекса:</h3>
    <ul className="complex__list">
      <li className="complex__list-item">
        <a href="some" className="complex__list-item-link">
          16а-гидроксиэстрон (16а-OHE1)
        </a>
      </li>
      <li className="complex__list-item">
        <a href="some" className="complex__list-item-link">
          4-гидроксиэстрон (4-OHE1)
        </a>
      </li>
      <li className="complex__list-item">
        <a href="some" className="complex__list-item-link">
          16а-гидроксиэстрон (16а-OHE1)
        </a>
      </li>
      <li className="complex__list-item">
        <a href="some" className="complex__list-item-link">
          4-гидроксиэстрон (4-OHE1)
        </a>
      </li>
    </ul>
    <a href="some" className="complex__expand-button">
      Все анализы
      <span className="complex__expand-button-value">(23)</span>
    </a>
    <div className="complex__bottom-container-bottom">
      <a
        className=".complex__bottom-container-bottom-text"
        onClick={(evt) => {
          evt.preventDefault();
          action();
        }}
        onKeyDown={(evt) => {
          evt.preventDefault();
          if (evt.key === ENTER_KEY_CODE) action();
        }}
        role="button"
        tabIndex="0"
        aria-label="Нажмите чтобы перевернуть карточку"
        href="some"
      >
        скрыть анализы
      </a>
      <svg className="complex__icon" width="26.5" height="26.5" fill="currentColor">
        <use xlinkHref="somearrrow-right" />
      </svg>
    </div>
  </div>
);

ComplexBack.propTypes = {
  action: PropTypes.func.isRequired,
};

export default ComplexBack;
