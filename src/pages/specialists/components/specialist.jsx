import React from 'react';
import { useState } from 'react/cjs/react.development';
import PropTypes from 'prop-types';
import Picture from '../../../components/common/picture';
import Form from './form';
import SpecialistWorkTime from './specialist-work-time';

const specialistInfo = (action, data) => {
  const agesMap = {
    0: 'Дети 0-18 лет',
    1: 'Взрослые',
    2: 'Дети 0-18 лет, взрослые',
  };
  return (
    <div className="specialist__info">
      <h3 className="specialist__name">{data.name}</h3>
      <ul className="specialist__info-list">
        <li className="specialist__info-item">
          Должность: {data.job.reduce((acc, curr) => `${acc}, ${curr}`)}
        </li>
        <li className="specialist__info-item">
          Ведёт приём: {agesMap[data.ages]}
        </li>
        <li className="specialist__info-item">
          Первичный прием:{' '}
          <span className="specialist__price">{data.price} ₽</span>
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
      <p className="specialist__tel">Телефон для записи: 8 800 3000 789</p>
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
        src="../img/doctor"
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
    adresses: PropTypes.arrayOf(PropTypes.object),
    time: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default Specialist;
