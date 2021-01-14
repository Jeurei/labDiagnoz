import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { format, getDate, getYear } from 'date-fns';
import { ru } from 'date-fns/locale';
import { randomId } from '../../utils/common';
import SpecialistDayInfo from './specialist-day-info';
import { getMounthName } from '../../utils/specialist-shedule';

const SpecialistSheduleDays = ({
  arr,
  selectedMounth,
  nextMounth,
  swiperMounthRef,
  currentMounth,
}) => {
  const QUANTITY_OF_SLIDES = 6;
  const currentDate = new Date();
  const [selectedDay, setSelectedDay] = useState(0);
  const [chosenEmpty, setChosenEmpty] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);

  const getFormatedDate = (date, pattern) => {
    return format(date, pattern, { locale: ru });
  };

  const onDaySlideClickHandler = (index) => {
    setChosenEmpty(Object.values(arr[index][1]).length === 0);
    setSelectedDay(index);
  };

  const getDaySlide = (obj, id) => {
    const date = getFormatedDate(
      new Date(
        getYear(currentDate.getFullYear()),
        selectedMounth,
        Number(obj[0]) + 1,
      ),
      'dd MMM',
    ).split(' ');

    const weekDay = getFormatedDate(
      new Date(
        getYear(currentDate.getFullYear()),
        selectedMounth,
        Number(obj[0]) + 2,
      ),
      'iiii',
    );

    return (
      <SwiperSlide
        key={id}
        id={id}
        onClick={(evt) => onDaySlideClickHandler(evt.currentTarget.id)}
      >
        <li
          className={`specialist__shedule-list-item ${
            id === Number(selectedDay)
              ? 'specialist__shedule-list-item--today'
              : ''
          }`}
        >
          <p className="specialist__shedule-week-day">
            {getDate(currentDate) - 1 === Number(arr[id][0])
              ? 'Сегодня'
              : weekDay.charAt(0).toUpperCase() + weekDay.slice(1)}
          </p>
          <p className="specialist__shedule-date">
            {`${date[0]} ${date[1].charAt(0).toUpperCase() + date[1].slice(1)}`}
          </p>
        </li>
      </SwiperSlide>
    );
  };

  const createTimeElement = (data) => {
    return (
      <li
        className="specialist__shedule-table-time-list-item"
        key={randomId()}
        id={data}
      >
        <a
          href="/"
          className="specialist__shedule-table-time"
          aria-label={`Записать на ${data}`}
        >
          {data}
        </a>
      </li>
    );
  };

  const swiperRef = useRef(null);

  const prevSlide = useCallback(() => {
    if (!swiperRef.current?.swiper.activeIndex) {
      swiperRef.current?.swiper.slidePrev();
      setActiveIndex(true);
    } else {
      swiperRef.current?.swiper.slidePrev();
      setActiveIndex(false);
    }
  }, [swiperRef]);

  const nextSlide = useCallback(
    (array) => {
      if (
        swiperRef.current?.swiper.activeIndex + QUANTITY_OF_SLIDES >
        array.length - 1
      ) {
        swiperMounthRef.current?.swiper.slideNext();
        nextMounth();
        onDaySlideClickHandler(selectedDay);
        setActiveIndex(false);
        swiperRef.current?.swiper.slideTo(0, 0);
      } else {
        swiperRef.current?.swiper.slideNext();
        setActiveIndex(true);
      }
    },
    [swiperRef],
  );

  useEffect(() => {
    swiperRef.current?.swiper.slideTo(0, 0);
  }, [swiperRef]);

  return (
    <div className="specialist__shedule-table">
      {(getMounthName(currentMounth) !== getMounthName(selectedMounth) ||
        activeIndex) && (
        <button
          className="specialist__shedule-table-button specialist__shedule-table-button--before"
          type="button"
          aria-label="Предыдущая неделя"
          onClick={() => prevSlide()}
        />
      )}
      <ul className="specialist__shedule-list">
        <Swiper
          ref={swiperRef}
          slidesPerView="auto"
          noSwipingClass="swiper-slide"
        >
          {arr.map((el, id) => getDaySlide(el, id))}
        </Swiper>
      </ul>
      <button
        className="specialist__shedule-table-button specialist__shedule-table-button--next"
        type="button"
        aria-label="Следующая неделя"
        onClick={() => nextSlide(arr)}
      />
      <ul className="specialist__shedule-table-time-list">
        {!chosenEmpty &&
          Object.values(arr[selectedDay][1]).map((el) => createTimeElement(el))}
      </ul>
      {chosenEmpty && (
        <SpecialistDayInfo
          selectedDay={selectedDay}
          arr={arr}
          selectedMounth={selectedMounth}
          setCurrentDay={onDaySlideClickHandler}
        />
      )}
    </div>
  );
};

SpecialistSheduleDays.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.array).isRequired,
  selectedMounth: PropTypes.number.isRequired,
  currentMounth: PropTypes.number.isRequired,
  nextMounth: PropTypes.func.isRequired,
  swiperMounthRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default SpecialistSheduleDays;
