import React from 'react';
import SearchIcon from '../../../icons/search-icon.svg';
import Select from '../../common/select';

const FilterTop = () => {
  return (
    <div className="filter__top">
      <Select selectClass="filter__select" />
      <input
        type="text"
        className="search__input"
        placeholder="Введите ФИО врача"
        aria-label="Введите ФИО врача"
        aria-describedby="search-filter-descr"
      />
      <p className="visually-hidden" id="search-descr">
        Введите ФИО врача
      </p>
      <button
        className="search__button"
        type="button"
        name="search-button"
        aria-label="Кнопка поиска"
      >
        <SearchIcon
          width="25px"
          height="25px"
          transform="scale(1.2)"
          fill="none"
          stroke="currentColor"
        />
      </button>
    </div>
  );
};

export default FilterTop;
