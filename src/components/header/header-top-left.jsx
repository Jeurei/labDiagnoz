import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import components from 'constants/components';
import mapStateToPropsGenerator from 'store/mapStateToProps';
import mapDispatchToProps from 'store/mapDispatchToProps';
import { ReactComponent as TelIcon } from 'icons/tel-icon.svg';
import { ReactComponent as MarkMapIcon } from 'icons/map-mark-icon.svg';
import CitiesModal from './cities-modal';

const HeaderTopLeft = ({ cities, setCity }) => {
  const [citiesModalState, setCitiesModalState] = useState(false);

  const onCitiesClickHandler = () => {
    setCitiesModalState(!citiesModalState);
  };

  const onClickClosePopupHandler = () => {
    setCitiesModalState(false);
  };

  useEffect(() => {
    setCitiesModalState(false);
  }, [cities.currentCity]);

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
            <span className="cities__city">{cities.currentCity}</span>
          </a>
          {citiesModalState && (
            <CitiesModal
              citiesData={cities.list}
              closeHandler={onClickClosePopupHandler}
              setCurrentCity={setCity}
              modalState={citiesModalState}
            />
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
  cities: PropTypes.shape({
    currentCity: PropTypes.string.isRequired,
    list: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
  setCity: PropTypes.func.isRequired,
};

export default connect(
  mapStateToPropsGenerator(components.CITIES),
  mapDispatchToProps(components.CITIES),
)(HeaderTopLeft);
