import React from 'react';
import PropTypes from 'prop-types';
import { ENTER_KEY_CODE } from '../../constants/keys';
import ComplexList from './complex-list';
import ArrowLeft from '../../icons/arrow-left.svg';

const ComplexBack = ({ action, data }) => (
  <div className="complex__full">
    <h3 className="complex__full-title">Анализы комплекса:</h3>
    <ComplexList data={data.list} />
    <a href="some" className="complex__expand-button">
      Все анализы
      <span className="complex__expand-button-value">(23)</span>
    </a>
    <div className="complex__bottom-container-bottom">
      <a
        className="complex__bottom-container-bottom-text"
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
      <ArrowLeft
        className="complex__icon"
        width="26.5"
        height="26.5"
        fill="currentColor"
      />
    </div>
  </div>
);

ComplexBack.propTypes = {
  action: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default ComplexBack;