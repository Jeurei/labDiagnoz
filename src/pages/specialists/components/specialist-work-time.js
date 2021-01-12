import React from 'react';
import Select from '../../../components/common/select';
import SpecialistShedule from './specialist-shedule';

const SpecialistWorkTime = () => {
  return (
    <div className="specialist__work-time">
      <Select selectClass="specialist__adress" />
      <SpecialistShedule />
    </div>
  );
};

export default SpecialistWorkTime;
