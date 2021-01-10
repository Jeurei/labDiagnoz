import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

const FeaturesItem = ({ data }) => (
  <li
    className="features__list-item"
    css={css`
      background-image: url('./img/${data.icon}');
    `}
  >
    <h3 className="features__list-item-title">{data.title}</h3>
    <p className="features__list-item-text">{data.text}</p>
  </li>
);

FeaturesItem.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default FeaturesItem;
