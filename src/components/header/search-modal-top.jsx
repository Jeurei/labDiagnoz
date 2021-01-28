import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import mapStateToPropsGenerator from 'store/mapStateToProps';
import components from 'constants/components';
import Search from 'common/search';
import Hints from './hints';

const SearchModalContainerTop = ({ hints }) => (
  <div className="search__container-top">
    <Search />
    <Hints hints={hints} />
  </div>
);
SearchModalContainerTop.propTypes = {
  hints: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToPropsGenerator(components.HINTS),
  null,
)(SearchModalContainerTop);
