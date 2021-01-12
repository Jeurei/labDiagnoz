import React from 'react';
import PropTypes from 'prop-types';

const FormIosCheckbox = ({ action }) => (
  <label htmlFor="agreement" className="form__label form__label--checkbox">
    <input
      type="checkbox"
      className="form__input form__input--checkbox"
      id="agreement"
      name="agreement"
      aria-label="Нажимая на кнопку отправить вы соглашаетесь с нашей политикой конфиденциальности"
      onChange={(evt) => action(evt.currentTarget.checked)}
    />
    <span className="form__input-checkbox-span" />
  </label>
);

FormIosCheckbox.propTypes = {
  action: PropTypes.func.isRequired,
};

export default FormIosCheckbox;
