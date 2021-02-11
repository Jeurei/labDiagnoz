import React from 'react';
import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'src/constants/styles';

const Vacansies = () => {
  const theme = useTheme();
  return (
    <>
      <h2 className="main__title">Вакансии</h2>
      <div
        css={css`
          display: flex;
          padding-top: 10px;
          padding-bottom: 8px;
          padding-left: 23px;
          margin-bottom: 25px;
          background-image: ${theme.colors.linearGradient};
          color: ${theme.colors.white};

          ${breakpointsMap.TABLET} {
            font-size: 13px;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            width: 50%;
            flex-direction: column;
            padding-top: 18px;
            padding-bottom: 18px;
            border-right: 1px dashed ${theme.colors.white};

            ${breakpointsMap.TABLET} {
              flex-direction: row;
            }
          `}
        >
          <p
            css={css`
              margin: 0;
              margin-bottom: 10px;

              ${breakpointsMap.TABLET} {
                margin-right: 60px;
                margin-bottom: 0;
              }

              ${breakpointsMap.DESKTOP} {
                margin-right: 70px;
              }
            `}
          >
            Телефон отдела кадров
          </p>
          <p
            css={css`
              margin: 0;
            `}
          >
            2 700 789, доб. 800
          </p>
        </div>
        <div
          css={css`
            display: flex;
            width: 50%;
            flex-direction: column;
            padding-top: 18px;
            padding-bottom: 18px;
            margin-left: 20px;
            ${breakpointsMap.TABLET} {
              flex-direction: row;
            }
          `}
        >
          <p
            css={css`
              margin: 0;
              margin-bottom: 10px;

              ${breakpointsMap.TABLET} {
                margin-right: 60px;
                margin-bottom: 0;
              }

              ${breakpointsMap.DESKTOP} {
                margin-right: 70px;
              }
            `}
          >
            E-mail отдела кадров
          </p>
          <p
            css={css`
              margin: 0;
            `}
          >
            info@labdiag.perm.ru
          </p>
        </div>
      </div>
      <div
        css={css`
          margin-bottom: 30px;
        `}
      >
        <button
          type="button"
          css={css`
            padding-top: 21px;
            padding-right: 68px;
            padding-bottom: 22px;
            padding-left: 61px;
            border: none;
            appearance: none;
            background-color: ${theme.colors.white};
            box-shadow: ${theme.colors.boxShadow};

            &:hover {
              background-image: ${theme.colors.linearGradient};
              color: ${theme.colors.white};
            }
          `}
        >
          Медицинская деятельность
        </button>
      </div>
      <div>
        <article
          css={css`
            width: 100%;
            min-height: 396px;
            padding: 37px 34px;
            box-shadow: ${theme.colors.boxShadow};

            &:hover {
              background-image: ${theme.colors.linearGradient};
              * {
                color: ${theme.colors.white};
                opacity: 1;
              }

              .vacansy__sallary {
                border-top-color: ${theme.colors.white};
                border-bottom-color: ${theme.colors.white};
              }

              .vacansy__link {
                color: ${theme.colors.white};

                &:before {
                  background-color: ${theme.colors.white};
                  background-image: none;
                }
              }
            }

            ${breakpointsMap.TABLET} {
              width: 370px;
            }
          `}
        >
          <h3
            css={css`
              margin: 0;
              margin-bottom: 27px;
              font-size: 16px;
              font-weight: 500;
            `}
          >
            Бухгалтер
          </h3>
          <ul
            css={css`
              padding: 0;
              margin-bottom: 24px;
              list-style: none;
            `}
          >
            <li
              css={css`
                display: flex;
              `}
            >
              <p
                className="vacancy__op-text"
                css={css`
                  margin-right: auto;
                  opacity: 0.4;
                `}
              >
                График:
              </p>
              <p>Полный рабочий день</p>
            </li>
            <li
              css={css`
                display: flex;
              `}
            >
              <p
                className="vacancy__op-text"
                css={css`
                  margin-right: auto;
                  opacity: 0.4;
                `}
              >
                График:
              </p>
              <p>Полный рабочий день</p>
            </li>
            <li
              css={css`
                display: flex;
              `}
            >
              <p
                className="vacancy__op-text"
                css={css`
                  margin-right: auto;
                  opacity: 0.4;
                `}
              >
                График:
              </p>
              <p>Полный рабочий день</p>
            </li>
          </ul>
          <div
            className="vacansy__sallary"
            css={css`
              display: flex;
              padding-top: 35px;
              padding-bottom: 39px;
              border-top: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.4);
              border-bottom: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.4);
              margin-bottom: 28px;
            `}
          >
            <p
              className="vacancy__op-text"
              css={css`
                margin: 0;
                margin-right: auto;
                opacity: 0.4;
              `}
            >
              Оплата труда:
            </p>
            <span
              css={css`
                font-size: 26px;
                font-weight: 500;
              `}
            >
              31 100 ₽
            </span>
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
            Подробнее о вакансии
          </a>
        </article>
      </div>
    </>
  );
};

export default Vacansies;
