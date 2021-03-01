import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Specialist from './specialist';
import { randomId } from '../../../components/utils/common';

// TODO: COMPONENT CARD!!!!!!

const SpecialistsCatalog = ({ specialists }) => {
  return (
    <section className="specialists__catalog">
      {specialists.map((el) => (
        <div
          css={css`
            margin-bottom: 37px;
            box-shadow: 1px 1px 22px 0 RGBA(74, 74, 74, 0.2);
          `}
        >
          <Specialist data={el} key={randomId()} />
        </div>
      ))}
    </section>
  );
};

SpecialistsCatalog.propTypes = {
  specialists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SpecialistsCatalog;
