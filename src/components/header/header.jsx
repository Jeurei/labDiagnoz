import React, { useState, useEffect } from 'react';
import HeaderTop from './header-top';
import HeaderBottom from './header-bottom';
import SearchModal from './search-modal';
// import HeaderTopFixed from './header-top-fixed';
// import HeaderFixedContainer from 'containers/header-fixed-container';

const Header = () => {
  const HEADER_MIN_HEIGHT = 140;
  const animationDuration = 2;
  const headerAnimationDuration = 0.2;
  const [isSearchModalOpen, setSearhModalOpen] = useState(false);
  const [isBottomHeaderShown, setBottomHeaderHidden] = useState(false);
  const [isHidden, setHidden] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  let delta = 0;

  const deleteElement = () => {
    setDeleting(true);

    setTimeout(() => {
      setSearhModalOpen(false);
      setDeleting(false);
    }, animationDuration * 1000 - 550);
  };

  const onWheelEventHandler = (evt) => {
    const MAX_DELTA = 300;
    delta += evt.deltaY;

    if (delta >= MAX_DELTA) {
      delta = 0;
      window.removeEventListener('scroll', onWheelEventHandler);
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
    }, headerAnimationDuration * 1000);
  };

  const hideBottomHeader = () => {
    if (window.scrollY < HEADER_MIN_HEIGHT) {
      switchHeaderBottom(false);
    }
  };

  const showBottomHeader = () => {
    if (window.scrollY > HEADER_MIN_HEIGHT) {
      switchHeaderBottom(true);
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
    switchWindowListeners();
    return () => {
      removeListener();
    };
  }, []);

  return (
    <header className="header">
      {isSearchModalOpen && (
        <SearchModal
          isDeleting={isDeleting}
          animationDuration={animationDuration}
        />
      )}
      <HeaderTop
        openSearch={
          isSearchModalOpen ? deleteElement : searchButtonClickHandler
        }
      />
      <HeaderBottom
        isHidden={isHidden}
        animationDuration={headerAnimationDuration}
        clickHandler={switchHeaderBottom}
        headerBottomState={isBottomHeaderShown}
      />
    </header>
  );
};

export default Header;
