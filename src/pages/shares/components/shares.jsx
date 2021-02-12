import { css, useTheme } from '@emotion/react';
import React from 'react';
import Picture from 'common/picture';

const Shares = () => {
  const theme = useTheme();
  return (
    <>
      <h2 className="main__title">Акции</h2>
      <article
        css={css`
          height: 511px;
          width: 100%;
          background-image: url('img/sharesBg.png');
          background-repeat: no-repeat;
          background-size: 100%;
          padding-top: 57px;
          padding-left: 58px;
          padding-bottom: 64px;
          color: ${theme.colors.white};

          @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
            background-image: url('img/sharesBg@2x.png');
          }
        `}
      >
        <a
          href="/"
          css={css`
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
          `}
        >
          <Picture src="img/sharesLogo" labe="Логотип ЛабДиагностики" />
          <h2
            className="main__title"
            css={css`
              margin-top: auto;
              color: ${theme.colors.white};
              margin-bottom: 99px;

              &:after {
                opacity: 1;
                color: ${theme.colors.white};
                font-weight: 500;
              }
            `}
          >
            Акция диагностика со скидкой 50%
          </h2>
          <span
            css={css`
              color: ${theme.colors.white};
              font-size: 16px;
            `}
          >
            До конца акции осталось 3 дня 12 часов 11минут 11 секунд
          </span>
        </a>
      </article>
      <div
        css={css`
          .sharePage__img {
            width: 100%;
          }
        `}
      >
        {' '}
        <h3
          css={css`
            font-weight: 500;
            font-size: 16px;
            margin-bottom: 30px;
          `}
        >
          Обязанности:
        </h3>
        <p
          css={css`
            font-size: 13px;
            margin-bottom: 30px;
          `}
        >
          Ведение бухгалтерского учета государственных учреждений (операции с
          нефинансовыми активами, расчеты с дебиторами по доходам ( в т.ч. учет
          администрирования доходов главным администратором доходов),
          санкционирование, расчеты с поставщиками и подрядчиками)
        </p>
        <Picture src="img/sharesImg" imgClass="sharePage__img" />
      </div>
      <div>
        <h3
          css={css`
            font-weight: 500;
            font-size: 16px;
            margin-bottom: 30px;
          `}
        >
          Обязанности:
        </h3>
        <p
          css={css`
            font-size: 13px;
            margin-bottom: 30px;
            position: relative;
            padding-left: 7px;

            &:before {
              content: '';
              display: block;
              position: absolute;
              left: 0;
              background-image: ${theme.colors.linearGradient};
              height: 100%;
              width: 4px;
            }
          `}
        >
          Ведение бухгалтерского учета государственных учреждений (операции с
          нефинансовыми активами, расчеты с дебиторами по доходам ( в т.ч. учет
          администрирования доходов главным администратором доходов),
          санкционирование, расчеты с поставщиками и подрядчиками)
        </p>
      </div>
    </>
  );
};

export default Shares;
