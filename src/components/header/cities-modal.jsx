import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import CrossButton from 'common/crossButton';
import { showing } from '../utils/animation';
import { randomId } from '../utils/common';
import CitiesModalItem from './cities-modal-item';

const CitiesModal = ({ citiesData, closeHandler, setCurrentCity }) => (
  <div
    className="cities__modal"
    css={css`
      animation: ${showing} 1s ease-in-out;
    `}
  >
    <h3 className="cities__title">Выберете ваш населённый пункт</h3>
    <ul className="cities__list">
      {Object.values(citiesData).map((el) => (
        <CitiesModalItem
          key={randomId()}
          cityName={el.name}
          action={setCurrentCity}
        />
      ))}
    </ul>
    <CrossButton
      buttonClass="cities__modal-close"
      label="Закрыть модальное окно с выбором города"
      action={closeHandler}
    />
  </div>
);
CitiesModal.propTypes = {
  citiesData: PropTypes.objectOf(PropTypes.string).isRequired,
  closeHandler: PropTypes.func.isRequired,
  setCurrentCity: PropTypes.func.isRequired,
};

export default CitiesModal;
