import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const SpecialistDayInfo = ({
  selectedDay,
  arr,
  currentMounth,
  setCurrentDay,
}) => {
  let closestDay = Number(selectedDay);

  while (!Object.values(arr[closestDay][1]).length) {
    closestDay += 1;
  }

  return (
    <>
      <p className="specialist__chosen-day-info">
        {Number(
          format(
            new Date(2021, currentMounth, arr[selectedDay][0]),
            'dd MMMM',
            {
              locale: ru,
            },
          ),
        ) + 1}{' '}
        нет доступного времени для записи.
      </p>
      <p className="specialist__closest-day">
        Ближайшее время записи,{' '}
        <a
          className="specialist__closest-day-link"
          href="/"
          aria-label="Хотите посмотреть время записи на это число?"
          id={closestDay}
          onClick={(evt) => {
            evt.preventDefault();
            setCurrentDay(evt.currentTarget.id);
          }}
        >
          {Number(
            format(
              new Date(2021, currentMounth, arr[closestDay][0]),
              'dd MMMM',
              {
                locale: ru,
              },
            ),
          ) + 1}{' '}
        </a>
      </p>
    </>
  );
};

SpecialistDayInfo.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  arr: PropTypes.arrayOf(PropTypes.array).isRequired,
  currentMounth: PropTypes.number.isRequired,
  setCurrentDay: PropTypes.func.isRequired,
};

export default SpecialistDayInfo;
