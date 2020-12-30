import React from 'react';
import PropTypes from 'prop-types';
import { ENTER_KEY_CODE } from '../../constants/keys';

// TODO: Скорее всего опции беруться из объекта поэтому сделать шаблоном

const Select = ({ selectClass }) => {
  const DEFAULT__STATE = 'default';
  const ACTIVE__STATE = 'active';
  const onSelectClickHandler = (evt) => {
    const target = evt.currentTarget;
    if (target.classList.contains('select')) {
      if (target.dataset.state === 'default') {
        target.dataset.state = ACTIVE__STATE;
      } else {
        target.dataset.state = DEFAULT__STATE;
      }
    }
  };
  return (
    <div
      className={`${selectClass} select`}
      data-state={DEFAULT__STATE}
      onClick={(evt) => {
        onSelectClickHandler(evt);
      }}
      onKeyDown={(evt) => {
        if (evt.key === ENTER_KEY_CODE) onSelectClickHandler(evt);
      }}
      role="button"
      tabIndex="0"
    >
      <div className="select__title" data-default="Option 0">
        Option 0
      </div>
      <div className="select__content">
        <input
          id="1"
          className="select__input"
          type="radio"
          name="category"
          checked
          onChange={(evt) => console.log(evt.currentTarget.id)}
        />
        <label htmlFor="1" className="select__label">
          Option 0
        </label>
        <input
          id="2"
          className="select__input"
          type="radio"
          name="category"
          checked
          onChange={(evt) => console.log(evt.currentTarget.id)}
        />
        <label htmlFor="2" className="select__label">
          Option 0
        </label>
      </div>
    </div>
  );
};

Select.propTypes = {
  selectClass: PropTypes.string.isRequired,
};

export default Select;
