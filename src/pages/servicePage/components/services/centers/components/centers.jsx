import { css } from '@emotion/react';
import React, { useState } from 'react';
import FormIosCheckbox from 'src/components/common/form-ios-checkbox';
import { breakpointsMap } from 'src/constants/styles';
import PositionsCatalog from '../../common/positions-catalog';

const Centers = () => {
  const [isAdults, setAdults] = useState(true);

  return (
    <section
      css={css`
        padding-top: 27px;
        display: flex;
        flex-direction: column;
        align-items: center;

        ${breakpointsMap.TABLET} {
          align-items: flex-start;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        <p
          css={css`
            margin-right: 15px;
          `}
        >
          Взрослое отделение
        </p>
        <FormIosCheckbox
          action={() => console.log(true)}
          id="centers__checkbox"
          name="centers__checkbox"
          label="Чтобы увидеть взрослое отделение"
        />
        <p>Детское отделение</p>
      </div>
      <PositionsCatalog />
    </section>
  );
};

export default Centers;
