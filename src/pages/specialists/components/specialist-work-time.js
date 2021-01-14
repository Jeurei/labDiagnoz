import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../../components/common/select';
import SpecialistShedule from './specialist-shedule';

const SpecialistWorkTime = ({ data }) => {
  return (
    <div className="specialist__work-time">
      <Select selectClass="specialist__adress" />
      <SpecialistShedule data={data} />
    </div>
  );
};

SpecialistWorkTime.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SpecialistWorkTime;
