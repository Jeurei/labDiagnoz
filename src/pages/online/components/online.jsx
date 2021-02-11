import React from 'react';
import Picture from 'common/picture';
import { css, useTheme } from '@emotion/react';

const Online = () => {
  const theme = useTheme();
  return (
    <>
      <h2 className="main__title">Онлайн консультация эндокринолога</h2>
      <p
        css={css`
          font-weight: 500;
        `}
      >
        Сео текстовое поле под контент, онлайн консультация эндокринолога в
        перми по выгодной цене, срочно! Недорогая консультация. Консультация из
        другого города, и таму подобный текст.
      </p>
      <div>
        <div
          css={css`
            display: flex;
            width: 369px;
            flex-direction: column;
            align-items: center;
            padding-bottom: 39px;
            box-shadow: ${theme.colors.boxShadow};
          `}
        >
          <Picture src="img/beatiful-young-fem" />
          <p
            css={css`
              font-size: 16px;
              font-weight: 500;
            `}
          >
            Мельникова Наталья Игоревна
          </p>
          <p
            css={css`
              font-size: 13px;
            `}
          >
            Должность:{' '}
            <span
              css={css`
                font-weight: 500;
              `}
            >
              Дерматовенеролог
            </span>
          </p>
          <button
            type="button"
            className="button"
            css={css`
              width: 297px;
              padding-top: 15px;
              padding-bottom: 17px;
              border: none;
            `}
          >
            Онлайн запись на прием
          </button>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 63px;
          `}
        >
          <h3
            css={css`
              font-size: 33px;
              font-weight: 500;
            `}
          >
            Как получить онлайн-консультацию?
          </h3>
          <p
            css={css`
              font-weight: 500;
            `}
          >
            Принцип проведения онлайн-консультаций поход на очный прием и
            включает сбор анамнеза, диагностику и выдачу рекомендаций
          </p>
          <ul
            css={css`
              display: flex;
              width: 100%;
              padding: 0;
              padding-top: 134px;
              list-style: none;
            `}
          >
            <li
              css={css`
                position: relative;
                width: 25%;

                &:before {
                  position: absolute;
                  top: -94px;
                  display: flex;
                  width: 60px;
                  height: 60px;
                  align-items: center;
                  justify-content: center;
                  background-color: ${theme.colors.blue};
                  border-radius: 50%;
                  color: ${theme.colors.white};
                  content: '1';
                  font-size: 22px;
                }

                &:after {
                  position: absolute;
                  top: -67px;
                  right: 7px;
                  display: flex;
                  width: 213px;
                  height: 1px;
                  border-top: 1px dashed ${theme.colors.colorText.hex};
                  content: '';
                }
              `}
            >
              <h4
                css={css`
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Оставьте заявку
              </h4>
            </li>
            <li
              css={css`
                position: relative;
                width: 25%;

                &:before {
                  position: absolute;
                  top: -94px;
                  display: flex;
                  width: 60px;
                  height: 60px;
                  align-items: center;
                  justify-content: center;
                  background-color: ${theme.colors.blue};
                  border-radius: 50%;
                  color: ${theme.colors.white};
                  content: '2';
                  font-size: 22px;
                }

                &:after {
                  position: absolute;
                  top: -67px;
                  right: 7px;
                  display: flex;
                  width: 213px;
                  height: 1px;
                  border-top: 1px dashed ${theme.colors.colorText.hex};
                  content: '';
                }
              `}
            >
              <h4
                css={css`
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Оставьте заявку
              </h4>
            </li>
            <li
              css={css`
                position: relative;
                width: 25%;

                &:before {
                  position: absolute;
                  top: -94px;
                  display: flex;
                  width: 60px;
                  height: 60px;
                  align-items: center;
                  justify-content: center;
                  background-color: ${theme.colors.blue};
                  border-radius: 50%;
                  color: ${theme.colors.white};
                  content: '3';
                  font-size: 22px;
                }

                &:after {
                  position: absolute;
                  top: -67px;
                  right: 7px;
                  display: flex;
                  width: 213px;
                  height: 1px;
                  border-top: 1px dashed ${theme.colors.colorText.hex};
                  content: '';
                }
              `}
            >
              <h4
                css={css`
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Оставьте заявку
              </h4>
            </li>
            <li
              css={css`
                position: relative;
                width: 25%;

                &:before {
                  position: absolute;
                  top: -94px;
                  display: flex;
                  width: 60px;
                  height: 60px;
                  align-items: center;
                  justify-content: center;
                  background-color: ${theme.colors.blue};
                  border-radius: 50%;
                  color: ${theme.colors.white};
                  content: '4';
                  font-size: 22px;
                }
              `}
            >
              <h4
                css={css`
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Оставьте заявку
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Online;
