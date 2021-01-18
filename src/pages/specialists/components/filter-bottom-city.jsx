import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../../components/common/select';

const FilterBottomCity = ({ selectData }) => {
  return (
    <div className="filter__bottom-group filter__bottom-group--city">
      <h3 className="filter__bottom-group-title">Медицинский центр</h3>
      <Select
        selectClass="filter__bottom-city-select"
        data={selectData}
        defaultOption="Выберите город"
      />
    </div>
  );
};

FilterBottomCity.propTypes = {
  selectData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilterBottomCity;
