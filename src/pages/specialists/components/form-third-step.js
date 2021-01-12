import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FormIosCheckbox from '../../../components/common/form-ios-checkbox';
import FormFieldset from '../../../components/footer/form-fieldset';
import FormInput from '../../../components/common/form-input';
import MaskedFormInput from '../../../components/common/masked-input';
import { errorMessagesMap } from '../../../constants/form';

const FormThirdStep = ({ action }) => {
  const [inputsField, setInputsField] = useState({
    name: '',
    email: '',
    tel: '',
  });
  const [formValidation, setFormValidation] = useState({
    isNameValid: true,
    isTelValid: true,
    isEmailValid: true,
  });

  const onChangeInputValueHandler = (obj) => {
    setInputsField({ ...inputsField, ...obj });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const isRequiredAreNotEmpty = () => {
    if (inputsField.name && inputsField.tel) {
      return true;
    }
    return false;
  };

  const changeValidation = (obj) => {
    setFormValidation({ ...formValidation, ...obj });
  };

  const checkNameInput = (value) => {
    onChangeInputValueHandler(value);
    if (value.name.length !== 0) {
      changeValidation({ isNameValid: true });
    } else {
      changeValidation({ isNameValid: false });
    }
  };

  const checkTelInput = (value) => {
    onChangeInputValueHandler(value);
    if (value.tel.replace(/[^0-9]/g, '').length === 11) {
      changeValidation({ isTelValid: true });
    } else {
      changeValidation({ isTelValid: false });
    }
  };

  const checkEmailInput = (value) => {
    onChangeInputValueHandler(value);
    if (validateEmail(value.email)) {
      changeValidation({ isEmailValid: true });
    } else if (value.email !== '') {
      changeValidation({ isEmailValid: false });
    } else {
      changeValidation({ isEmailValid: true });
    }
  };

  useEffect(() => {
    if (
      formValidation.isNameValid &&
      formValidation.isEmailValid &&
      formValidation.isTelValid &&
      isRequiredAreNotEmpty()
    ) {
      action(true, inputsField);
    } else {
      action(false, inputsField);
    }
  }, [formValidation]);

  return (
    <div className="specialist-form__form-step form-step">
      <h3 className="form-step__title">Заполните личные данные</h3>
      <FormFieldset>
        <FormInput
          name="spec-name"
          id="spec-name"
          inputClass="form__input"
          description="Введите ваше имя"
          placeholder="Ваше имя"
          type="text"
          descriptionId="client-name_descr"
          text="Введите имя"
          action={checkNameInput}
          formValidation={formValidation.isNameValid}
          errorMessage={errorMessagesMap.NAME}
        />
        <MaskedFormInput
          name="spec-tel"
          id="spec-tel"
          inputClass="form__input"
          description="Введите ваш телефон"
          placeholder="Ваш телефон"
          type="tel"
          descriptionId="client-tel_descr"
          text="Введите номер телефона"
          action={checkTelInput}
          formValidation={formValidation.isTelValid}
          errorMessage={errorMessagesMap.TEL}
        />
        <FormInput
          name="spec-email"
          id="spec-email"
          inputClass="form__input"
          description="Введите ваш email"
          placeholder="Ваш email"
          type="email"
          descriptionId="client-_descr"
          text="Введите email"
          action={checkEmailInput}
          formValidation={formValidation.isEmailValid}
          errorMessage={errorMessagesMap.EMAIL}
        />
      </FormFieldset>
      <div className="form__input-checkbox-container">
        <FormIosCheckbox action={action} />
        <small className="form__agreement-hint">
          Нажимая на кнопку отправить вы соглашаетесь с нашей политикой
          конфиденциальности
        </small>
      </div>
    </div>
  );
};

FormThirdStep.propTypes = {
  action: PropTypes.func.isRequired,
};

export default FormThirdStep;
