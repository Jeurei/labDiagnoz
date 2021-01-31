import React from 'react';
import { ReactComponent as MapMark } from 'icons/map-mark-icon.svg';
import { useParams, useRouteMatch } from 'react-router-dom';
import { css, useTheme } from '@emotion/react';

const FullSpecialistInfo = () => {
  const { specialistId } = useParams();
  const { path } = useRouteMatch();
  const theme = useTheme();
  return (
    <>
      <h1 className="main__title">Специалист</h1>
      <div
        css={css`
          display: flex;
          margin-bottom: 37px;
        `}
      >
        <p
          css={css`
            margin-right: 64px;
            white-space: nowrap;
            font-size: 16px;
          `}
        >
          Врач принимает в{' '}
        </p>
        <ul
          css={css`
            list-style: none;
            display: flex;
            padding: 0;
            width: 100%;
          `}
        >
          {new Array(3).fill().map(() => (
            <li
              css={css`
                display: flex;
                align-items: center;
                padding: 0 43px;
                font-size: 16px;
                position: relative;

                &:nth-of-type(2n) {
                  border-left: 1px solid ${theme.colors.colorText.hex};
                  border-right: 1px solid ${theme.colors.colorText.hex};
                }
              `}
            >
              <MapMark
                css={css`
                  position: absolute;
                  top: 6px;
                  left: 20px;
                `}
              />
              г. Пермь, ул. Докучаева, 40А
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FullSpecialistInfo;
