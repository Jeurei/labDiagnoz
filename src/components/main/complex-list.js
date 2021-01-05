import React from 'react';
import PropTypes from 'prop-types';
import ComplexListItem from './complex-list-item';
import { randomId } from '../utils/common';

const ComplexList = ({ data }) => (
  <ul className="complex__list">
    {data.map((el) => (
      <ComplexListItem text={el} key={randomId()} />
    ))}
  </ul>
);

ComplexList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ComplexList;
