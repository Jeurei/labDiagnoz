import React from 'react';
import FilterBottomAdress from './filter-bottom-adress';
import FilterBottomAges from './filter-bottom-ages';
import FilterBottomCity from './filter-bottom-city';

const FilterBottom = () => {
  return (
    <div className="filter__bottom">
      <FilterBottomCity />
      <FilterBottomAdress />
      <FilterBottomAges />
    </div>
  );
};

export default FilterBottom;
