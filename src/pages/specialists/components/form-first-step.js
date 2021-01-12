import React from 'react';
import Select from '../../../components/common/select';

const FormFirstStep = () => {
  return (
    <div className="specialist-form__form-step form-step">
      <div className="form-step__select-container">
        <h3 className="form-step__select-title">Населенный пункт</h3>
        <Select selectClass="form__step-select" />
      </div>
      <div className="form-step__select-container">
        <h3 className="form-step__select-title">Специализация</h3>
        <Select selectClass="form__step-select" />
      </div>
      <div className="form-step__select-container">
        <h3 className="form-step__select-title">Медицинский центр</h3>
        <Select selectClass="form__step-select" />
      </div>
      <div className="form-step__select-container">
        <h3 className="form-step__select-title">Врач ФИО</h3>
        <Select selectClass="form__step-select" />
      </div>
    </div>
  );
};

export default FormFirstStep;
