import React from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '../../icons/arrrow-right.svg';
import ArrowLeftIcon from '../../icons/arrow-left.svg';

const ActualOffersControls = ({ prevSlide, nextSlide }) => (
  <div className="actual-offers__controls-slider">
    <button
      className="actual-offers__control actual-offers__control--left slider-button"
      type="button"
      aria-label="Кнопка переключения слайдера влево"
      name="slider-button-left"
      onClick={prevSlide}
    >
      <ArrowLeftIcon className="actual-offers__control-button-icon" fill="currentColor" />
    </button>
    <button
      className="actual-offers__control actual-offers__control--right slider-button"
      type="button"
      aria-label="Кнопка переключения слайдера вправо"
      name="slider-button-right"
      onClick={nextSlide}
    >
      <ArrowRightIcon className="actual-offers__control-button-icon" fill="currentColor" />
    </button>
  </div>
);

ActualOffersControls.propTypes = {
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
};

export default ActualOffersControls;
