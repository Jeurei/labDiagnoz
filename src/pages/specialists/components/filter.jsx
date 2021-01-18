import React from 'react';
import PropTypes from 'prop-types';
import FilterBottom from './filter-bottom';
import FilterTop from './filter-top';

const Filter = ({ filter }) => {
  return (
    <section className="specialists__filter filter">
      <FilterTop filter={filter.specialistsCategrories} />
      <FilterBottom centresSelect={filter.centers} />
    </section>
  );
};

Filter.propTypes = {
  filter: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default Filter;
