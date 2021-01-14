import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import components from '../../../constants/components';
import mapStateToPropsGenerator from '../../../store/mapStateToProps';
import Specialist from './specialist';
import { randomId } from '../../../components/utils/common';

const SpecialistsCatalog = ({ specialists }) => {
  return (
    <section className="specialists__catalog">
      {specialists.map((el) => (
        <Specialist data={el} key={randomId()} />
      ))}
    </section>
  );
};

SpecialistsCatalog.propTypes = {
  specialists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToPropsGenerator(components.SPECIALISTS),
  null,
)(SpecialistsCatalog);
