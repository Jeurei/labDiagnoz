import React from 'react';
import PropTypes from 'prop-types';
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

export default SpecialistsCatalog;
