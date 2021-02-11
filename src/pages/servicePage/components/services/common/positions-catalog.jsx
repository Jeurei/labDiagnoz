import React from 'react';
import { useTheme, css } from '@emotion/react';
import { ReactComponent as DoctorIcon } from 'icons/doctor.svg';
import { breakpointsMap } from 'src/constants/styles';

const positionsList = () => {
  const theme = useTheme();

  return (
    <ul
      css={css`
        display: flex;
        padding: 0;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;

        ${breakpointsMap.TABLET} {
          flex-direction: row;
        }
      `}
    >
      <li
        css={css`
          box-shadow: ${theme.colors.boxShadow};
          list-style: none;
          font-size: 16px;
          margin-bottom: 15px;
          position: relative;

          .icon {
            position: absolute;
            color: ${theme.colors.blue};
            left: 15px;
            top: 4px;
          }

          &:hover {
            background-color: ${theme.colors.blue};
            color: ${theme.colors.altColorText};

            a {
              color: ${theme.colors.altColorText};
            }

            .icon {
              color: ${theme.colors.altColorText};
            }
          }

          ${breakpointsMap.TABLET} {
            width: 245px;
            margin-bottom: 30px;
            margin-right: 10px;
            flex-grow: 1;

            &:nth-of-type(2n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 355px;
              flex-grow: 0;
            }
          }

          ${breakpointsMap.DESKTOP} {
            flex-grow: 0;
            width: 370.5px;
            margin-right: 30px;

            &:nth-of-type(2n) {
              margin-right: 30px;
            }

            &:nth-of-type(3n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 370px;
            }
          }
        `}
      >
        <DoctorIcon className="icon" fill="currentColor" />
        <a
          href="/"
          css={css`
            width: 100%;
            height: 100%;
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 51.5px;
            display: block;
            font-weight: 500;
          `}
        >
          Аллерголог
        </a>
      </li>
      <li
        css={css`
          box-shadow: ${theme.colors.boxShadow};
          list-style: none;
          font-size: 16px;
          margin-bottom: 15px;
          position: relative;

          .icon {
            position: absolute;
            color: ${theme.colors.blue};
            left: 15px;
            top: 4px;
          }

          &:hover {
            background-color: ${theme.colors.blue};
            color: ${theme.colors.altColorText};

            a {
              color: ${theme.colors.altColorText};
            }

            .icon {
              color: ${theme.colors.altColorText};
            }
          }

          ${breakpointsMap.TABLET} {
            width: 245px;
            margin-bottom: 30px;
            margin-right: 10px;
            flex-grow: 1;

            &:nth-of-type(2n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 355px;
              flex-grow: 0;
            }
          }

          ${breakpointsMap.DESKTOP} {
            flex-grow: 0;
            width: 370.5px;
            margin-right: 30px;

            &:nth-of-type(2n) {
              margin-right: 30px;
            }

            &:nth-of-type(3n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 370px;
            }
          }
        `}
      >
        <DoctorIcon className="icon" fill="currentColor" />
        <a
          href="/"
          css={css`
            width: 100%;
            height: 100%;
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 51.5px;
            display: block;
            font-weight: 500;
          `}
        >
          Аллерголог
        </a>
      </li>
      <li
        css={css`
          box-shadow: ${theme.colors.boxShadow};
          list-style: none;
          font-size: 16px;
          margin-bottom: 15px;
          position: relative;

          .icon {
            position: absolute;
            color: ${theme.colors.blue};
            left: 15px;
            top: 4px;
          }

          &:hover {
            background-color: ${theme.colors.blue};
            color: ${theme.colors.altColorText};

            a {
              color: ${theme.colors.altColorText};
            }

            .icon {
              color: ${theme.colors.altColorText};
            }
          }

          ${breakpointsMap.TABLET} {
            width: 245px;
            margin-bottom: 30px;
            margin-right: 10px;
            flex-grow: 1;

            &:nth-of-type(2n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 355px;
              flex-grow: 0;
            }
          }

          ${breakpointsMap.DESKTOP} {
            flex-grow: 0;
            width: 370.5px;
            margin-right: 30px;

            &:nth-of-type(2n) {
              margin-right: 30px;
            }

            &:nth-of-type(3n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 370px;
            }
          }
        `}
      >
        <DoctorIcon className="icon" fill="currentColor" />
        <a
          href="/"
          css={css`
            width: 100%;
            height: 100%;
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 51.5px;
            display: block;
            font-weight: 500;
          `}
        >
          Аллерголог
        </a>
      </li>
      <li
        css={css`
          box-shadow: ${theme.colors.boxShadow};
          list-style: none;
          font-size: 16px;
          margin-bottom: 15px;
          position: relative;

          .icon {
            position: absolute;
            color: ${theme.colors.blue};
            left: 15px;
            top: 4px;
          }

          &:hover {
            background-color: ${theme.colors.blue};
            color: ${theme.colors.altColorText};

            a {
              color: ${theme.colors.altColorText};
            }

            .icon {
              color: ${theme.colors.altColorText};
            }
          }

          ${breakpointsMap.TABLET} {
            width: 245px;
            margin-bottom: 30px;
            margin-right: 10px;
            flex-grow: 1;

            &:nth-of-type(2n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 355px;
              flex-grow: 0;
            }
          }

          ${breakpointsMap.DESKTOP} {
            flex-grow: 0;
            width: 370.5px;
            margin-right: 30px;

            &:nth-of-type(2n) {
              margin-right: 30px;
            }

            &:nth-of-type(3n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 370px;
            }
          }
        `}
      >
        <DoctorIcon className="icon" fill="currentColor" />
        <a
          href="/"
          css={css`
            width: 100%;
            height: 100%;
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 51.5px;
            display: block;
            font-weight: 500;
          `}
        >
          Аллерголог
        </a>
      </li>
    </ul>
  );
};

const PositionsCatalog = () => {
  return (
    <div
      css={css`
        padding-top: 23px;
        width: 100%;
      `}
    >
      {positionsList()}
    </div>
  );
};

export default PositionsCatalog;
