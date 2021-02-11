import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const FormFieldset = ({ children }) => (
  <fieldset
    className="form__input-group"
    css={css`
      padding-left: 0;
    `}
  >
    {children}
  </fieldset>
);

FormFieldset.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormFieldset;
