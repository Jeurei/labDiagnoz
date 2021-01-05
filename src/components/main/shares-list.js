import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import mapStateToPropsGenerator from '../../store/mapStateToProps';
import components from '../../constants/components';
import { randomId } from '../utils/common';
import Share from './share';

const SharesList = ({ shares }) => {
  return (
    <ul className="shares__list">
      {shares.map((el) => (
        <Share data={el} key={randomId()} />
      ))}
    </ul>
  );
};

SharesList.propTypes = {
  shares: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToPropsGenerator(components.SHARES),
  null,
)(SharesList);
