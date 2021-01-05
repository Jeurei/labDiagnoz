import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import mapStateToPropsGenerator from '../../store/mapStateToProps';
import components from '../../constants/components';
import Complex from './complex';
import { randomId } from '../utils/common';
import SliderControls from '../utils/slider-controls';

// TODO: Добавить контролы

const Complexes = ({ complexes }) => {
  const swiperRef = useRef(null);
  SwiperCore.use([Pagination, A11y]);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <section className="main__section main__section--complexes section complexes">
      <div className="section__inner">
        <h2 className="section__title complexes__title">
          Подберите свой комплекс
        </h2>
        <div className="complexes__container">
          <SliderControls
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            className="complexes__control"
          />
          <ul className="complexes__list">
            <Swiper
              ref={swiperRef}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={4}
              slidesPerGroup={4}
              loop
            >
              {complexes.map((el) => {
                return (
                  <SwiperSlide key={randomId()}>
                    <Complex data={el} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
};

Complexes.propTypes = {
  complexes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToPropsGenerator(components.COMPLEXES),
  null,
)(Complexes);
