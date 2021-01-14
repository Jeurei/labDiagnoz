import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getMounthName } from '../../utils/specialist-shedule';

const SpecialistSheduleMounth = ({
  arr,
  nextMounth,
  swiperRef,
  currentMounth,
  selectedMounth,
}) => {
  const getMouthSlide = (obj, id) => {
    return (
      <SwiperSlide key={id}>
        <span className="specialist__current-mounth">{obj[id]}</span>
      </SwiperSlide>
    );
  };

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();

    setTimeout(() => {
      nextMounth();
    }, 400);
  }, [swiperRef]);

  return (
    <div className="specialist__shedule-mounth">
      {getMounthName(currentMounth) !== getMounthName(selectedMounth) && (
        <button
          className="specialist__shedule-mounth-button specialist__shedule-mounth-button--before"
          type="button"
          aria-label="Предыдущий месяц"
          onClick={() => prevSlide()}
        />
      )}
      <Swiper
        slidesPerView={1}
        ref={swiperRef}
        noSwipingClass="swiper-slide"
        speed={400}
        loop
      >
        {arr.map((el, id) => getMouthSlide(el, id))}
      </Swiper>
      <button
        className="specialist__shedule-mounth-button specialist__shedule-mounth-button--next"
        type="button"
        aria-label="Следующий месяц"
        onClick={() => {
          nextSlide();
        }}
      />
    </div>
  );
};

SpecialistSheduleMounth.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.object).isRequired,
  nextMounth: PropTypes.func.isRequired,
  swiperRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  currentMounth: PropTypes.number.isRequired,
  selectedMounth: PropTypes.number.isRequired,
};

export default SpecialistSheduleMounth;
