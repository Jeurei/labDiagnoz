import React from 'react';
import PropTypes from 'prop-types';
import { randomId } from '../utils/common';
import Hint from './hint';

const HintItem = ({ hints }) => (
  <li className="search-modal__search-examples-item">
    {hints.map((el) => (
      <Hint hint={el} key={randomId()} />
    ))}
  </li>
);

HintItem.propTypes = {
  hints: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HintItem;
