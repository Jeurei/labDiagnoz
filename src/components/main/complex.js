import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import ComplexFront from './complex-front';
import ComplexBack from './complex-back';

const Complex = ({ data }) => {
  const swiperRef = useRef(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <li className="complexes__item complex">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        noSwiping
        width={270}
        noSwipingClass="swiper-container"
      >
        <SwiperSlide>
          <ComplexFront action={nextSlide} data={data} />
        </SwiperSlide>
        <SwiperSlide>
          <ComplexBack action={prevSlide} data={data} />
        </SwiperSlide>
      </Swiper>
    </li>
  );
};

Complex.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default Complex;
