import React from 'react';
import { ReactComponent as FixedCircleIcon } from 'icons/fixedCircle.svg';
import { css, useTheme, keyframes } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';

const FixedCircle = () => {
  const theme = useTheme();
  const bouncingAnimation = keyframes`
    0% {
      transform: translateY(-5px);
    }

    100% {
      transform: translateY(5px);
    }
    `;

  return (
    <div
      css={css`
        position: fixed;
        bottom: 15px;
        right: 20px;
        width: 57px;
        height: 57px;
        background-image: ${theme.colors.linearGradient};
        border-radius: 50%;
        animation: ${bouncingAnimation} 1s infinite alternate;
        z-index: 200;

        &:hover {
          animation: none;
        }

        ${breakpointsMap.DESKTOP} {
          left: 10px;
        }
      `}
    >
      <a
        href="/"
        css={css`
          width: 100%;
          height: 100%;
          display: block;
          color: ${theme.colors.altColorText};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          &:hover {
            color: ${theme.colors.altColorText};
          }
        `}
      >
        <FixedCircleIcon fill="#fff" />
        Запись
      </a>
    </div>
  );
};

export default FixedCircle;
