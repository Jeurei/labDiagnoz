import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../../components/common/select';
import SpecialistShedule from './specialist-shedule';
import { getFlatArr } from '../../utils/filter';

const SpecialistWorkTime = ({ time, adresses }) => {
  const data = getFlatArr(
    getFlatArr(adresses).map((city) =>
      city.center.map((center) => ({
        name: 'center',
        value: `${city.city}-${center.adress}`,
        text: `${city.city}, ${center.adress}, ${center.name}`,
      })),
    ),
  );

  return (
    <div className="specialist__work-time">
      <Select
        selectClass="specialist__adress"
        data={data}
        defaultOption="Выберите адрес"
      />
      <SpecialistShedule time={time} />
    </div>
  );
};

SpecialistWorkTime.propTypes = {
  time: PropTypes.objectOf(PropTypes.object).isRequired,
  adresses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SpecialistWorkTime;
