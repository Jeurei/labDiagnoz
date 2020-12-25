import React, { useState, useEffect } from 'react';
import HeaderTop from './header-top';
import HeaderBottom from './header-bottom';
import SearchModal from './search-modal';
import HeaderTopFixed from './header-top-fixed';
import HeaderFixedContainer from '../../containers/header-fixed-container';

const Header = () => {
  const HEADER_MIN_HEIGHT = 140;
  const [isSearchModalOpen, setSearhModalOpen] = useState(false);
  const [isFixedHeaderShown, setFixedHeaderState] = useState(false);

  const searchButtonClickHandler = () => {
    setSearhModalOpen(!isSearchModalOpen);
  };

  const hideFixedHeader = () => {
    if (window.scrollY < HEADER_MIN_HEIGHT) {
      setFixedHeaderState(false);
    }
  };

  const showFixedHeader = () => {
    if (window.scrollY >= HEADER_MIN_HEIGHT) {
      setFixedHeaderState(true);
    }
  };

  const switchWindowListeners = () => {
    if (!isFixedHeaderShown) {
      window.removeEventListener('scroll', hideFixedHeader);
      window.addEventListener('scroll', showFixedHeader);
    } else {
      window.addEventListener('scroll', hideFixedHeader);
      window.removeEventListener('scroll', showFixedHeader);
    }
  };

  const removeListener = () => {
    window.removeEventListener('scroll', hideFixedHeader);
  };

  useEffect(() => {
    switchWindowListeners();
  }, [isFixedHeaderShown]);

  useEffect(() => {
    switchWindowListeners();
    return () => {
      removeListener();
    };
  }, []);

  return (
    <header className="header">
      {isSearchModalOpen && <SearchModal />}
      <HeaderTop openSearch={searchButtonClickHandler} />
      <HeaderBottom />
      {isFixedHeaderShown && (
        <HeaderFixedContainer>
          <HeaderTopFixed openSearch={searchButtonClickHandler} />
        </HeaderFixedContainer>
      )}
    </header>
  );
};

export default Header;
