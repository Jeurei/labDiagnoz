import React from 'react';
import FilterBottom from './filter-bottom';
import FilterTop from './filter-top';

const Filter = () => {
  return (
    <section className="specialists__filter filter">
      <FilterTop />
      <FilterBottom />
    </section>
  );
};

export default Filter;
