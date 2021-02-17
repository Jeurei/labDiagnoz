import React, { useState, useEffect } from 'react';
import components from 'constants/components';
import { connect } from 'react-redux';
import mapDispatchToProps from 'store/mapDispatchToProps';
import PropTypes from 'prop-types';
import SearchModal from './search-modal';
import CitiesModal from './cities-modal';
import Cart from './cart';
import HeaderMobileTop from './header-mobile-top';
import HeaderMobileBottom from './header-mobile-bottom';

// import HeaderTopFixed from './header-top-fixed';
// import HeaderFixedContainer from 'containers/header-fixed-container';

const headerContext = React.createContext();

const Header = ({ cities, setCity, cart }) => {
  const HEADER_MIN_HEIGHT = 140;
  const animationDuration = 0.7;
  const headerAnimationDuration = 0.2;
  const MAX_MOBILE_WIDTH = 720;
  const [isSearchModalOpen, setSearhModalOpen] = useState(false);
  const [isBottomHeaderShown, setBottomHeaderHidden] = useState(false);
  const [isHidden, setHidden] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [citiesModalState, setCitiesModalState] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  let delta = 0;

  const deleteElement = () => {
    setDeleting(true);

    setTimeout(() => {
      setSearhModalOpen(false);
      setDeleting(false);
    }, animationDuration * 1000 - 550);
  };

  const onWheelEventHandler = (evt) => {
    const MAX_DELTA = 15;
    delta += evt.deltaY;

    if (delta >= MAX_DELTA) {
      delta = 0;
      window.removeEventListener('wheel', onWheelEventHandler);
      deleteElement();
    }
  };

  const searchButtonClickHandler = () => {
    setSearhModalOpen(true);

    window.addEventListener('wheel', onWheelEventHandler);
  };

  const switchHeaderBottom = (bool) => {
    setHidden(bool);

    setTimeout(() => {
      setBottomHeaderHidden(bool);
    }, 500);
  };

  const hideBottomHeader = () => {
    if (window.scrollY < HEADER_MIN_HEIGHT && isBottomHeaderShown) {
      switchHeaderBottom(false);
      setButtonClicked(false);
    }
  };

  const showBottomHeader = () => {
    if (window.scrollY > HEADER_MIN_HEIGHT && !isBottomHeaderShown) {
      switchHeaderBottom(true);
      setButtonClicked(false);
    }
  };

  const resizeHandler = () => {
    if (window.innerWidth < MAX_MOBILE_WIDTH) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  const switchWindowListeners = () => {
    if (!isBottomHeaderShown) {
      window.removeEventListener('scroll', hideBottomHeader);
      window.addEventListener('scroll', showBottomHeader);
    } else {
      window.addEventListener('scroll', hideBottomHeader);
      window.removeEventListener('scroll', showBottomHeader);
    }
  };

  const removeListener = () => {
    window.removeEventListener('scroll', hideBottomHeader);
  };

  useEffect(() => {
    switchWindowListeners();
  }, [isBottomHeaderShown]);

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    switchWindowListeners();
    return () => {
      removeListener();
    };
  }, []);

  const headerHandlers = {
    cities: {
      state: citiesModalState,
      onCitiesClickHandler: () => setCitiesModalState(!citiesModalState),
      onClickClosePopupHandler: () => setCitiesModalState(false),
    },
    cart: {
      state: cartModal,
      onClickHandler: () => setCartModal(!cartModal),
      onCloseClickHandler: () => setCartModal(false),
    },
  };

  const onButtonClickHandler = () => {
    setButtonClicked(true);
    showBottomHeader();
  };

  return (
    <header className="header">
      {isSearchModalOpen && (
        <SearchModal
          isDeleting={isDeleting}
          animationDuration={animationDuration}
        />
      )}
      <headerContext.Provider value={headerHandlers}>
        {isBottomHeaderShown ? (
          <HeaderMobileBottom
            isHidden={isHidden}
            buttonClicked={buttonClicked}
            clickHandler={onButtonClickHandler}
            headerBottomState={isBottomHeaderShown}
            animationDuration={headerAnimationDuration}
            openSearch={
              isSearchModalOpen ? deleteElement : searchButtonClickHandler
            }
          />
        ) : (
          <HeaderMobileTop
            isHidden={isHidden}
            buttonClicked={buttonClicked}
            animationDuration={headerAnimationDuration}
            openSearch={
              isSearchModalOpen ? deleteElement : searchButtonClickHandler
            }
          />
        )}
        {citiesModalState && (
          <CitiesModal
            citiesData={cities.list}
            closeHandler={headerHandlers.cities.onClickClosePopupHandler}
            setCurrentCity={setCity}
            modalState={citiesModalState}
          />
        )}
        {cartModal && (
          <Cart
            cartData={cart}
            closeHandler={headerHandlers.cart.onCloseClickHandler}
          />
        )}
      </headerContext.Provider>
    </header>
  );
};

Header.propTypes = {
  cities: PropTypes.shape({
    currentCity: PropTypes.string.isRequired,
    list: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
  setCity: PropTypes.func.isRequired,
  cart: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { cities, cart } = state;

  return { cities, cart };
};

export { headerContext };
export default connect(
  mapStateToProps,
  mapDispatchToProps(components.CITIES),
)(Header);
