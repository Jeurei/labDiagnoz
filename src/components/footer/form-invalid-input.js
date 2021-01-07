import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const FormInvalidInput = ({ text }) => (
  <div
    className="form__invalid-input"
    css={css`
      color: rgba(255, 0, 0, 0.6);
      position: absolute;
      width: 100%;
      font-size: 10px;
      padding-left: 10px;
      bottom: -73px;
      left: -9px;
      text-align: left;
    `}
  >
    <p className="form__invalid-input-text">{text}</p>
  </div>
);

FormInvalidInput.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FormInvalidInput;
