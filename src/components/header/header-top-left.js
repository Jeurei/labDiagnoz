import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CitiesModal from './cities-modal';
import TelIcon from '../../icons/tel-icon.svg';
import MarkMapIcon from '../../icons/map-mark-icon.svg';

const HeaderTopLeft = ({ citiesData }) => {
  const [citiesModalState, setCitiesModalState] = useState(false);
  const [currentCity, setCurrentCity] = useState(citiesData.currentCity);

  const onCitiesClickHandler = () => {
    setCitiesModalState(!citiesModalState);
  };

  const onClickClosePopupHandler = () => {
    setCitiesModalState(false);
  };

  useEffect(() => {
    setCitiesModalState(false);
  }, [currentCity]);

  return (
    <div className="header-top__left">
      <div className="header-top__left-cities-container">
        <div className="header-top__left-cities cities" data-state="default">
          <a
            href="some"
            className="cities__link"
            onClick={(evt) => {
              evt.preventDefault();
              onCitiesClickHandler();
            }}
            arial-label="Открыть попап для выбора города"
          >
            <span className="cities__city">{currentCity}</span>
          </a>
          {citiesModalState ? (
            <CitiesModal
              citiesData={citiesData.list}
              closeHandler={onClickClosePopupHandler}
              setCurrentCity={setCurrentCity}
              modalState={citiesModalState}
            />
          ) : (
            ''
          )}
        </div>
        <MarkMapIcon
          className="header-top__left-icon header-top__left-icon--cities"
          width="6.6"
          height="9.3"
          stroke="currentColor"
          fill="currentColor"
        />
      </div>
      <p className="header-top__left-tel">
        <TelIcon width="9" height="9.5" stroke="currentColor" />
        +7 (999) 999-99-99
      </p>
    </div>
  );
};

HeaderTopLeft.propTypes = {
  citiesData: PropTypes.shape({
    currentCity: PropTypes.string.isRequired,
    list: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default HeaderTopLeft;
