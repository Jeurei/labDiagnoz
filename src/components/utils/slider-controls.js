import React from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '../../icons/arrrow-right.svg';
import ArrowLeftIcon from '../../icons/arrow-left.svg';

const SliderControls = ({ prevSlide, nextSlide, className }) => (
  <div className="actual-offers__controls-slider">
    <button
      className={`${className} ${className}--left slider-button`}
      type="button"
      aria-label="Кнопка переключения слайдера влево"
      name="slider-button-left"
      onClick={prevSlide}
    >
      <ArrowLeftIcon className="slider-icon" fill="currentColor" />
    </button>
    <button
      className={`${className} ${className}--right slider-button`}
      type="button"
      aria-label="Кнопка переключения слайдера вправо"
      name="slider-button-right"
      onClick={nextSlide}
    >
      <ArrowRightIcon className="slider-icon" fill="currentColor" />
    </button>
  </div>
);

SliderControls.propTypes = {
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default SliderControls;
