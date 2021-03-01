import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

// TODO: Скорее всего опции беруться из объекта поэтому сделать шаблоном

const SelectComponent = ({ selectClass, data, placeholder, action }) => {
  return (
    <Select
      placeholder={placeholder}
      options={data}
      className={`${selectClass} select`}
      classNamePrefix="select"
      onChange={(value) => action(value)}
      noOptionsMessage={() => 'Не найдено'}
    />
  );
};

SelectComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  selectClass: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.func.isRequired,
};

export default SelectComponent;
