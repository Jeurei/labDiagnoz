import React, { useRef, useState } from 'react';
import { getDate, getMonth, getYear } from 'date-fns';
import PropTypes from 'prop-types';
import { useEffect } from 'react/cjs/react.development';
import SpecialistSheduleMounth from './specialist-shedule-mounth';
import SpecialistSheduleDays from './specialist-shedule-days';
import { getMounthName } from '../../utils/specialist-shedule';

const getTodayDay = (currentDate) => {
  return Number(getDate(currentDate)) - 1;
};

const SpecialistShedule = ({ time }) => {
  const currentDate = new Date();
  const [currentYear, setCurrentYear] = useState(getYear(currentDate));
  const [currentMounth, setCurrentMounth] = useState(getMonth(currentDate));
  const [selectedMounth, setSelectedMounth] = useState(getMonth(currentDate));
  const swiperMounthRef = useRef(null);
  const [currentDay, setCurrentDay] = useState(getTodayDay(currentDate));
  const arrayOfMounthes = new Array(12).fill().map((el, id) => {
    const mounthName = getMounthName(id);
    return { [id]: mounthName.charAt(0).toUpperCase() + mounthName.slice(1) };
  });
  const arrayOfMoutnhtesUntilNewYear = arrayOfMounthes.slice(currentMounth, 3);
  const arrayOfAvailableMounthes = Object.entries(time[currentYear]).slice(
    currentMounth,
    3,
  );
  if (
    Object.values(time[currentYear][currentMounth][currentDay]).length === 0
  ) {
    if (currentDay === Object.values(currentMounth).length) {
      setSelectedMounth((prev) => prev + 1);
      setCurrentDay(0);
    } else {
      setCurrentDay((prev) => prev + 1);
    }
  }

  const arrayOfDaysFromNow = Object.entries(
    time[currentYear][selectedMounth],
  ).slice(currentDay);

  const prevMounthClickHandler = () => {
    setSelectedMounth((prev) => prev - 1);
  };

  const nextMounthClickHandler = () => {
    setSelectedMounth((prev) => prev + 1);
  };

  useEffect(() => {
    if (Number(selectedMounth) === 0) {
      setCurrentDay(getTodayDay(currentDate));
    } else {
      setCurrentDay(0);
    }
  }, [selectedMounth]);

  return (
    <div className="specialist__shedule">
      <SpecialistSheduleMounth
        arr={arrayOfMoutnhtesUntilNewYear}
        nextMounth={nextMounthClickHandler}
        prevMounth={prevMounthClickHandler}
        swiperRef={swiperMounthRef}
      />
      <SpecialistSheduleDays
        arr={arrayOfDaysFromNow}
        currentMounth={currentMounth}
        selectedMounth={selectedMounth}
        prevMounth={prevMounthClickHandler}
        nextMounth={nextMounthClickHandler}
        swiperMounthRef={swiperMounthRef}
        availableMounthes={arrayOfAvailableMounthes}
      />
    </div>
  );
};

SpecialistShedule.propTypes = {
  time: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SpecialistShedule;
