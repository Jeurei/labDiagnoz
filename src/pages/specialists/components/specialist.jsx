import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Picture from 'common/picture';
import Form from 'common/form';
import { Link, useRouteMatch } from 'react-router-dom';
import { css, useTheme } from '@emotion/react';
import { numberWithSpaces } from '../../../utils/common';
import SpecialistWorkTime from './specialist-work-time';

const specialistInfo = (action, data) => {
  const { url } = useRouteMatch();
  const theme = useTheme();
  const agesMap = {
    1: 'Дети 0-18 лет',
    2: 'Взрослые',
    3: 'Дети 0-18 лет, взрослые',
  };
  return (
    <div className="specialist__info">
      <h3 className="specialist__name">
        <Link to={`${url}/${data.id}`}>{data.name}</Link>
      </h3>
      <ul className="specialist__info-list">
        <li className="specialist__info-item">
          Должность:{' '}
          <span
            css={css`
              font-weight: 500;
            `}
          >
            {data.job.reduce((acc, curr) => `${acc}, ${curr}`)}
          </span>
        </li>
        <li className="specialist__info-item">
          Ведёт приём:{' '}
          <span
            css={css`
              font-weight: 500;
            `}
          >
            {agesMap[data.ages]}
          </span>
        </li>
        <li className="specialist__info-item">
          Первичный прием:{' '}
          <span
            className="specialist__price"
            css={css`
              font-weight: 500;
            `}
          >
            {numberWithSpaces(data.price)} ₽
          </span>
        </li>
        <li
          className="specialist__info-item specialist__info-item--link"
          href="/"
          aria-label="Ссылка на услуги которые предоставляет данный специалист"
        >
          Все услуги
        </li>
      </ul>
      <button
        className="specialist__button button"
        type="button"
        aria-label="Записать на приём"
        onClick={() => action(true)}
      >
        Запишитесь на прием
      </button>
      <button
        type="button"
        className="specialist__button button"
        aria-label="Записать на онлайн консультацию"
        css={css`
          text-transform: uppercase;
          background-color: ${theme.colors.blue};

          &:hover,
          &:active {
            background-color: ${theme.colors.blue};
          }
        `}
      >
        online консультация
      </button>
      <p className="specialist__tel">
        Телефон для записи:{' '}
        <span
          css={css`
            font-weight: 500;
          `}
        >
          8 800 3000 789
        </span>
      </p>
    </div>
  );
};

const Specialist = ({ data }) => {
  const [specialistPopup, setSpecialistPopup] = useState(false);

  const closeHandler = () => {
    setSpecialistPopup(false);
  };

  return (
    <div className="specialists__specialist specialist">
      <Picture
        imgClass="specialist__img"
        containerClass="specialist__img-container"
        src="img/doctor"
        alt="Изображение специалиста"
      />
      {specialistInfo(setSpecialistPopup, data)}
      <SpecialistWorkTime adresses={data.adresses} time={data.time} />
      {specialistPopup && <Form closeHandler={closeHandler} data={data} />}
    </div>
  );
};

Specialist.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    job: PropTypes.arrayOf(PropTypes.string),
    ages: PropTypes.number,
    price: PropTypes.number,
    adresses: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string,
        center: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            adress: PropTypes.string,
          }),
        ),
      }),
    ),
    time: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default Specialist;
