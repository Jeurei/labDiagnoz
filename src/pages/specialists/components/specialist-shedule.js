import React, { useRef, useState } from 'react';
import { getDate, getMonth, getYear } from 'date-fns';
import PropTypes from 'prop-types';
import SpecialistSheduleMounth from './specialist-shedule-mounth';
import SpecialistSheduleDays from './specialist-shedule-days';
import { getMounthName } from '../../utils/specialist-shedule';

const SpecialistShedule = ({ data }) => {
  const currentDate = new Date();
  const [currentYear, setCurrentYear] = useState(getYear(currentDate));
  const [currentMounth, setCurrentMounth] = useState(getMonth(currentDate));
  const [selectedMounth, setSelectedMounth] = useState(currentMounth);
  const swiperMounthRef = useRef(null);
  const [currentDay, setCurrentDay] = useState(
    Number(getDate(currentDate)) - 1,
  );

  const arrayOfMounthes = new Array(12).fill().map((el, id) => {
    const mounthName = getMounthName(id);
    return { [id]: mounthName.charAt(0).toUpperCase() + mounthName.slice(1) };
  });
  const arrayOfMoutnhtesUntilNewYear = arrayOfMounthes.slice(
    currentMounth,
    arrayOfMounthes.length,
  );

  if (
    Object.values(data[currentYear][currentMounth][currentDay]).length === 0
  ) {
    if (currentDay === Object.values(currentMounth).length) {
      setSelectedMounth((prev) => prev + 1);
      setCurrentDay(0);
    } else {
      setCurrentDay((prev) => prev + 1);
    }
  }

  const arrayOfDaysFromNow = Object.entries(
    data[currentYear][selectedMounth],
  ).slice(currentDay, data[currentYear][selectedMounth].length);

  const nextMounthClickHandler = () => {
    setCurrentDay(0);
    setSelectedMounth((prev) => prev + 1);
  };

  return (
    <div className="specialist__shedule">
      <SpecialistSheduleMounth
        arr={arrayOfMoutnhtesUntilNewYear}
        nextMounth={nextMounthClickHandler}
        swiperRef={swiperMounthRef}
        currentMounth={currentMounth}
        selectedMounth={selectedMounth}
      />
      <SpecialistSheduleDays
        arr={arrayOfDaysFromNow}
        currentMounth={currentMounth}
        selectedMounth={selectedMounth}
        nextMounth={nextMounthClickHandler}
        swiperMounthRef={swiperMounthRef}
      />
    </div>
  );
};

SpecialistShedule.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SpecialistShedule;
