import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const FormInvalidInput = ({ text }) => (
  <div
    className="form__invalid-input"
    css={css`
      position: absolute;
      bottom: 1px;
      left: -9px;
      width: 100%;
      padding-left: 10px;
      color: rgba(255, 0, 0, 0.6);
      font-size: 10px;
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
