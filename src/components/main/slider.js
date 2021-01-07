import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { randomId } from '../utils/common';

const Slider = ({ data, component, swiperRef, sliderObject }) => {
  SwiperCore.use([Pagination, A11y]);

  return (
    <Swiper ref={swiperRef} {...sliderObject} pagination={{ clickable: true }}>
      {data.map((el) => (
        <SwiperSlide key={randomId()}>
          {cloneElement(component, {
            data: el,
          })}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

Slider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  component: PropTypes.objectOf(PropTypes.any).isRequired,
  swiperRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  sliderObject: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Slider;
