import React from 'react';
import PropTypes from 'prop-types';
import { ENTER_KEY_CODE } from '../../constants/keys';
import { randomId } from '../utils/common';

// TODO: Скорее всего опции беруться из объекта поэтому сделать шаблоном

const selectOption = (data, id, checked = false) => {
  return (
    <React.Fragment key={randomId()}>
      <input
        id={`${data.name}-${id}`}
        className="select__input"
        type="radio"
        name={`${data.name}`}
        checked={checked}
        onChange={(evt) => console.log(evt.currentTarget.id)}
        value={data.value}
      />
      <label htmlFor={`${data.name}-${id}`} className="select__label">
        {data.text}
      </label>
    </React.Fragment>
  );
};

const Select = ({ selectClass, data, defaultOption }) => {
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
      <div className="select__title" data-default="0">
        {defaultOption}
      </div>
      <div className="select__content">
        {data.map((el, index) => selectOption(el, index + 1))}
      </div>
    </div>
  );
};

Select.defaultProps = {
  defaultOption: '',
};

Select.propTypes = {
  defaultOption: PropTypes.string,
  selectClass: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Select;
