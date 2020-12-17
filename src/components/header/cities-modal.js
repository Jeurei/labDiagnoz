import React from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/react';
import { nanoid } from 'nanoid';
import CitiesModalItem from './cities-modal-item';
import CrossButton from '../utils/crossButton';

const CitiesModal = ({ citiesData, closeHandler, setCurrentCity }) => {
  const fadeInRight = keyframes`
    0% {
      opacity:0;
      transform: translateY(-100px);
    }
    100% {
      opacity:1;
      transform: translateY(0);
    }
`;
  return (
    <div
      className="cities__modal"
      css={css`
        animation: ${fadeInRight} 1s ease-in-out;
      `}
    >
      <h3 className="cities__title">Выберете ваш населённый пункт</h3>
      <ul className="cities__list">
        {Object.values(citiesData).map((el) => (
          <CitiesModalItem key={nanoid()} cityName={el} action={setCurrentCity} />
        ))}
      </ul>
      <CrossButton
        buttonClass="cities__modal-close"
        label="Закрыть модальное окно с выбором города"
        action={closeHandler}
      />
    </div>
  );
};
CitiesModal.propTypes = {
  citiesData: PropTypes.objectOf(PropTypes.string).isRequired,
  closeHandler: PropTypes.func.isRequired,
  setCurrentCity: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
};

export default CitiesModal;
