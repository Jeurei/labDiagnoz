import React from 'react';
import { useState } from 'react/cjs/react.development';
import Picture from '../../../components/common/picture';
import Form from './form';
import SpecialistWorkTime from './specialist-work-time';

const specialistInfo = (action) => {
  return (
    <div className="specialist__info">
      <h3 className="specialist__name">Мельникова Наталья Игоревна</h3>
      <ul className="specialist__info-list">
        <li className="specialist__info-item">Должность: Дерматовенеролог</li>
        <li className="specialist__info-item">
          Ведёт приём: Дети 0-18 лет, взрослые
        </li>
        <li className="specialist__info-item">
          Первичный прием: <span className="specialist__price">1 499 ₽</span>
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

const Specialist = () => {
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
      {specialistInfo(setSpecialistPopup)}
      <SpecialistWorkTime />
      {specialistPopup && <Form closeHandler={closeHandler} />}
    </div>
  );
};

export default Specialist;
