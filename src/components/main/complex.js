import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ComplexFront from './complex-front';
import ComplexBack from './complex-back';

const Complex = () => {
  const swiperRef = useRef(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <li className="complexes__item complex">
      <Swiper ref={swiperRef} slidesPerView={1} loop noSwiping noSwipingClass="swiper-container">
        <SwiperSlide>
          <ComplexFront action={nextSlide} />
        </SwiperSlide>
        <SwiperSlide>
          <ComplexBack action={prevSlide} />
        </SwiperSlide>
      </Swiper>
    </li>
  );
};

Complex.propTypes = {};

export default Complex;
