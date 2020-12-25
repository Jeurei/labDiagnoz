import React from 'react';

// TODO: Возможно это тоже тянется с серва

const SearchBottom = () => (
  <div className="search__container">
    <div className="search__controls">
      <button
        type="button"
        className="search__control search__control--analyse"
        aria-label="Нажмите чтобы перейти к записям на анализ"
        name="analyse-button"
      >
        Выбрать анализы
      </button>
      <button
        type="button"
        className="search__control search__control--center"
        aria-label="Нажмите чтобы выбирать медицинские центры"
        name="center-button"
      >
        Выбрать медицинский центр
      </button>
      <button
        type="button"
        className="search__control search__control--doctor"
        aria-label="Нажмите чтобы перейти к выбору специалиста"
        name="doctor-button"
      >
        Запись к врачу
      </button>
      <button
        type="button"
        className="search__control search__control--shedule"
        aria-label="Нажмите чтобы узнать расписсания врачей"
        name="shedule-button"
      >
        Расписание приема врачей
      </button>
    </div>
  </div>
);

export default SearchBottom;
