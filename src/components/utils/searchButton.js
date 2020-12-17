import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../../icons/search-icon.svg';

const SearchButton = ({ buttonClass, label }) => (
  <button className={buttonClass} type="button" aria-label={label} name="search-button">
    <SearchIcon
      className="header-top__list-icon header-top__list-icon--search"
      width="19"
      height="19"
      stroke="currentColor"
      fill="none"
    />
  </button>
);

SearchButton.propTypes = {
  buttonClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SearchButton;
