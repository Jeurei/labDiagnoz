import React from 'react';
import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'src/constants/styles';

const NotFound = () => {
  const theme = useTheme();
  return (
    <>
      <div
        css={css`
          display: flex;
          min-height: 305px;
          align-items: flex-end;
          margin-bottom: 59px;
          background-image: url('img/404.svg');
          background-position: left;
          background-repeat: no-repeat;
          background-size: 100% 305px;

          ${breakpointsMap.TABLET} {
            background-size: auto;
          }
        `}
      >
        <h1
          className="main__title"
          css={css`
            margin-bottom: 0;
            font-size: 16px;
            line-height: 18px;

            &:after {
              top: calc(100% + 5px);
            }
          `}
        >
          Страница не найдена. Если вы уверены что здесь должна
          <br
            css={css`
              display: none;
              ${breakpointsMap.TABLET} {
                display: block;
              }
            `}
          />
          быть страница, обратитесь по e-mail
          <a
            href="mailto:info@labdiag.ru"
            css={css`
              margin-left: 3px;
              text-decoration: underline;
            `}
          >
            info@labdiag.ru
          </a>
        </h1>
      </div>
      <a
        className="vacansy__link"
        href="/"
        css={css`
          position: relative;
          padding-bottom: 9px;
          font-size: 13px;

          &:before {
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
            width: 102px;
            height: 4px;
            background-image: ${theme.colors.linearGradient};
            content: '';
          }
        `}
      >
        Вернуться на Главную
      </a>
    </>
  );
};

export default NotFound;
