import React from 'react';
import PropTypes from 'prop-types';
import { ENTER_KEY_CODE } from '../../constants/keys';
import Picture from '../utils/picture';
import ExpandIcon from '../../icons/expand-icon.svg';

const ComplexFront = ({ action }) => (
  <>
    <a href="some" className="complex__link" aria-label="Перейти на страницу с комплексом">
      <Picture
        src="./img/left-radius"
        height="193"
        alt="Изображение комплекса"
        className="complex__img"
      />
    </a>
    <a href="some" className="complex__link">
      <h3 className="complex__title">Обследование Печени, Скрининг</h3>
    </a>
    <div className="complex__text-container">
      <p className="complex__text">Пояснение</p>
      <ul className="complex__list">
        <li className="complex__list-item">16а-гидроксиэстрон (16а-OHE1)</li>
        <li className="complex__list-item">4-гидроксиэстрон (4-OHE1)</li>
        <li className="complex__list-item">16а-гидроксиэстрон (16а-OHE1)</li>
        <li className="complex__list-item">4-гидроксиэстрон (4-OHE1)</li>
      </ul>
      <a
        href="some"
        className="complex__expand-button"
        aria-label="нажмите что развернуть все анализы"
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
      >
        Показать все анализы
        <ExpandIcon
          className="complex__expand-icon"
          width="10"
          height="16"
          stroke="currentColor"
          fill="none"
        />
      </a>
    </div>
    <div className="complex__bottom-container">
      <div className="complex__bottom-container-top">
        <p className="complex__price-text">Цена комплекса</p>
        <div className="complex__price-container">
          <span className="complex__price complex__price--old">15 597 ₽</span>
          <span className="complex__price">2 330 ₽</span>
        </div>
      </div>
      <div className="complex__bottom-container-bottom">
        <p className="complex__bottom-container-bottom-text">Включает 6 анализов</p>
        <svg className="complex__icon" width="26.5" height="26.5" fill="currentColor">
          <use xlinkHref="somearrrow-right" />
        </svg>
      </div>
    </div>
  </>
);

ComplexFront.propTypes = {
  action: PropTypes.func.isRequired,
};

export default ComplexFront;
