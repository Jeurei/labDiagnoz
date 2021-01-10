import React from 'react';
import Select from '../../common/select';

const FilterBottomCity = () => {
  return (
    <div className="filter__bottom-group filter__bottom-group--city">
      <h3 className="filter__bottom-group-title">Медицинский центр</h3>
      <Select selectClass="filter__bottom-city-select" />
    </div>
  );
};

export default FilterBottomCity;
