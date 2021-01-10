import React from 'react';

const FilterBottomAges = () => {
  return (
    <div className="filter__bottom-group filter__bottom-group--ages">
      <h3 className="filter__bottom-group-title">Возраст пациента</h3>
      <div className="filter__checkbox-group">
        <input
          type="checkbox"
          name="age-18"
          id="age-18"
          value="18"
          aria-label="Возраст больше 18"
          className="filter__input filter__input--checkbox"
        />
        <label className="filter__label" htmlFor="age-18">
          Взрослый 18+
        </label>
      </div>
      <div className="filter__checkbox-group">
        <input
          type="checkbox"
          name="age"
          id="age"
          value="0"
          aria-label="Возраст меньше 18"
          className="filter__input filter__input--checkbox"
        />
        <label className="filter__label" htmlFor="age">
          Детский
        </label>
      </div>
    </div>
  );
};

export default FilterBottomAges;
