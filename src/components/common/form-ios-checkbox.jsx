import React from 'react';
import PropTypes from 'prop-types';

const FormIosCheckbox = ({ action, id, name }) => (
  <label htmlFor={id} className="form__label form__label--checkbox">
    <input
      type="checkbox"
      className="form__input form__input--checkbox"
      id={id}
      name={name}
      aria-label="Нажимая на кнопку отправить вы соглашаетесь с нашей политикой конфиденциальности"
      onChange={(evt) => action(evt.currentTarget.checked)}
    />
    <span className="form__input-checkbox-span" />
  </label>
);

FormIosCheckbox.propTypes = {
  action: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormIosCheckbox;
