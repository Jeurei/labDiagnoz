import React from 'react';
import PropTypes from 'prop-types';
import { randomId } from '../utils/common';
import HintItem from './hints-item';

const Hints = ({ hints }) => {
  const MAX_QUANTITY_OF_HINTS_IN_GROUP = 3;
  const subarray = [];
  for (let i = 0; i < Math.ceil(hints.length / MAX_QUANTITY_OF_HINTS_IN_GROUP); i += 1) {
    subarray[i] = hints.slice(
      i * MAX_QUANTITY_OF_HINTS_IN_GROUP,
      i * MAX_QUANTITY_OF_HINTS_IN_GROUP + MAX_QUANTITY_OF_HINTS_IN_GROUP,
    );
  }
  return (
    <ul className="search-modal__search-examples">
      {subarray.map((el) => (
        <HintItem hints={el} key={randomId()} />
      ))}
    </ul>
  );
};

Hints.propTypes = {
  hints: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Hints;
