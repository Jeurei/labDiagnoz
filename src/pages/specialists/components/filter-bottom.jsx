import React from 'react';
import PropTypes from 'prop-types';
import FilterBottomAdress from './filter-bottom-adress';
import FilterBottomAges from './filter-bottom-ages';
import FilterBottomCity from './filter-bottom-city';

const FilterBottom = ({ centresSelect }) => {
  return (
    <div className="filter__bottom">
      <FilterBottomCity
        selectData={centresSelect.map((el) => ({
          name: el.city,
          value: el.city,
          text: el.city,
        }))}
      />
      <FilterBottomAdress selectData={centresSelect} />
      <FilterBottomAges />
    </div>
  );
};

FilterBottom.propTypes = {
  centresSelect: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilterBottom;
