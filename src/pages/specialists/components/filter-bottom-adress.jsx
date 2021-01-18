import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../../components/common/select';
import { getFlatArr } from '../../utils/filter';

const FilterBottomAdress = ({ selectData }) => {
  console.log(
    '🚀 ~ file: filter-bottom-adress.jsx ~ line 7 ~ FilterBottomAdress ~ selectData',
    selectData,
  );
  const data = getFlatArr(
    selectData.map((city) =>
      city.centers.map((center) => ({
        name: 'center',
        value: `${city.city}-${center.adress}`,
        text: center.center,
      })),
    ),
  );

  return (
    <div className="filter__bottom-group filter__bottom-group--adress">
      <Select
        selectClass="filter__bottom-adress-select"
        data={data}
        defaultOption="Выберете адрес (все)"
      />
    </div>
  );
};

FilterBottomAdress.propTypes = {
  selectData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilterBottomAdress;
