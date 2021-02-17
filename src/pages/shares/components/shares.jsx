import { css, useTheme } from '@emotion/react';
import React from 'react';
import Picture from 'common/picture';
import { breakpointsMap } from 'src/constants/styles';
import { connect } from 'react-redux';
import Components from 'constants/components';
import mapStateToPropsGenerator from 'store/mapStateToProps';
import { ReactComponent as CartIcon } from 'icons/cart-icon.svg';
import Specialist from 'src/pages/specialists/components/specialist';
import PropTypes from 'prop-types';
import PositionsCatalog from 'src/pages/servicePage/components/services/common/positions-catalog';
import { Link } from 'react-router-dom';
import { ReactComponent as ExpandIcon } from 'icons/expand-icon.svg';
import Socials from 'src/components/footer/socials';
import { ReactComponent as ShareIcon } from 'icons/share.svg';
import { ReactComponent as GridIcon } from 'icons/grid.svg';

const Shares = ({ specialists }) => {
  const theme = useTheme();
  return (
    <>
      <h2 className="main__title">Акции</h2>
      <article
        css={css`
          width: 100%;
          height: 511px;
          padding-top: 57px;
          padding-bottom: 64px;
          padding-left: 58px;
          background-image: url('img/sharesBg.png');
          background-repeat: no-repeat;
          background-size: 100%;
          color: ${theme.colors.white};

          @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
            background-image: url('img/sharesBg@2x.png');
          }
        `}
      >
        <a
          href="/"
          css={css`
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: column;
          `}
        >
          <Picture src="img/sharesLogo" labe="Логотип ЛабДиагностики" />
          <h2
            className="main__title"
            css={css`
              margin-top: auto;
              margin-bottom: 99px;
              color: ${theme.colors.white};

              &:after {
                color: ${theme.colors.white};
                font-weight: 500;
                opacity: 1;
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
          padding-right: 10px;
          padding-left: 10px;
          .sharePage__img {
            width: 100%;
          }
        `}
      >
        <h3
          css={css`
            margin-bottom: 30px;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Обязанности:
        </h3>
        <p
          css={css`
            margin-bottom: 30px;
            font-size: 13px;
          `}
        >
          Ведение бухгалтерского учета государственных учреждений (операции с
          нефинансовыми активами, расчеты с дебиторами по доходам ( в т.ч. учет
          администрирования доходов главным администратором доходов),
          санкционирование, расчеты с поставщиками и подрядчиками)
        </p>
        <Picture src="img/sharesImg" imgClass="sharePage__img" />
      </div>
      <div
        css={css`
          padding-right: 10px;
          padding-left: 10px;
        `}
      >
        <h3
          css={css`
            margin-bottom: 30px;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Обязанности:
        </h3>
        <p
          css={css`
            position: relative;
            padding-left: 7px;
            margin-bottom: 30px;
            font-size: 13px;

            &:before {
              position: absolute;
              left: 0;
              display: block;
              width: 4px;
              height: 100%;
              background-image: ${theme.colors.linearGradient};
              content: '';
            }
          `}
        >
          Ведение бухгалтерского учета государственных учреждений (операции с
          нефинансовыми активами, расчеты с дебиторами по доходам ( в т.ч. учет
          администрирования доходов главным администратором доходов),
          санкционирование, расчеты с поставщиками и подрядчиками)
        </p>
      </div>
      <div
        css={css`
          padding-right: 10px;
          padding-left: 10px;
        `}
      >
        <h3
          css={css`
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Классификация болезней
        </h3>
        <ul
          css={css`
            padding: 0;
            padding-left: 18px;
            list-style: none;
          `}
        >
          <li
            css={css`
              position: relative;

              &:before {
                position: absolute;
                top: 5px;
                left: -18px;
                display: block;
                width: 7px;
                height: 7px;
                background-color: ${theme.colors.blue};
                border-radius: 50%;
                content: '';
              }
            `}
          >
            острый
          </li>
        </ul>
        <ul
          css={css`
            padding: 0;
            padding-left: 18px;

            counter-reset: counter;
            list-style: none;
          `}
        >
          <li
            css={css`
              position: relative;

              &:before {
                position: absolute;
                top: -2px;
                left: -23px;
                display: block;
                width: 18px;
                height: 18px;
                background-color: ${theme.colors.blue};
                border-radius: 50%;
                content: '';
              }

              &:after {
                position: absolute;
                top: -1px;
                left: -17px;
                display: block;
                width: 18px;
                height: 18px;
                color: ${theme.colors.white};
                content: counter(counter);
                counter-increment: counter;
              }
            `}
          >
            острый
          </li>
        </ul>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding-right: 10px;
          padding-left: 10px;
          margin-bottom: 10px;

          ${breakpointsMap.TABLET} {
            padding: 0;
          }

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
          }
        `}
      >
        <ul
          css={css`
            flex-grow: 1;
            padding: 0;
            margin-right: 3px;
            margin-bottom: 10px;
            list-style: none;
          `}
        >
          <li
            css={css`
              padding-top: 21px;
              padding-bottom: 18px;
              padding-left: 16px;
              margin-bottom: 3px;
              background-color: ${theme.colors.blue};
              color: ${theme.colors.white};
              font-size: 16px;
            `}
          >
            Таблица
          </li>
          <li
            css={css`
              padding-top: 18px;
              padding-bottom: 18px;
              padding-left: 16px;
              background-color: #fafafa;
              font-size: 13px;
            `}
          >
            Данные таблицы
          </li>
        </ul>
        <ul
          css={css`
            flex-grow: 1;
            padding: 0;
            margin-right: 3px;
            margin-bottom: 10px;
            list-style: none;
          `}
        >
          <li
            css={css`
              padding-top: 21px;
              padding-bottom: 18px;
              padding-left: 16px;
              margin-bottom: 3px;
              background-color: ${theme.colors.blue};
              color: ${theme.colors.white};
              font-size: 16px;
            `}
          >
            Таблица
          </li>
          <li
            css={css`
              padding-top: 18px;
              padding-bottom: 18px;
              padding-left: 16px;
              background-color: #fafafa;
              font-size: 13px;
            `}
          >
            Данные таблицы
          </li>
        </ul>
        <ul
          css={css`
            flex-grow: 1;
            padding: 0;
            margin-bottom: 10px;
            list-style: none;
          `}
        >
          <li
            css={css`
              padding-top: 21px;
              padding-bottom: 18px;
              padding-left: 16px;
              margin-bottom: 3px;
              background-color: ${theme.colors.blue};
              color: ${theme.colors.white};
              font-size: 16px;
            `}
          >
            Таблица
          </li>
          <li
            css={css`
              padding-top: 18px;
              padding-bottom: 18px;
              padding-left: 16px;
              background-color: #fafafa;
              font-size: 13px;
            `}
          >
            Данные таблицы
          </li>
        </ul>
      </div>
      <div
        css={css`
          width: 100%;
          background-color: #f7f7f7;

          ${breakpointsMap.TABLET} {
            display: flex;
            flex-direction: column;
          }

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
          }
        `}
      >
        <div
          css={css`
            padding-top: 17px;
            padding-left: 10px;

            ${breakpointsMap.DESKTOP} {
              width: 390px;
              flex-grow: 1;
              padding-left: 32px;
            }
          `}
        >
          <h3
            css={css`
              font-size: 13px;
              font-weight: 400;
            `}
          >
            Заборный пункт
          </h3>
          <p
            css={css`
              margin: 0;
              margin-top: 10px;
              margin-bottom: 10px;
              font-weight: 500;
            `}
          >
            г. Пермь, ул. Культуры, д. 52, оф. 345
          </p>
          <ul
            css={css`
              display: flex;
              padding: 0;
              list-style: none;
            `}
          >
            <li
              css={css`
                width: 31px;
                height: 31px;
                background-color: ${theme.colors.blue};
                background-image: url('img/doctor-white.svg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                border-radius: 50%;
                content: '';
              `}
            />
          </ul>
        </div>
        <div
          className="baloon"
          css={css`
            min-width: auto;
            background-color: ${theme.colors.white};
            box-shadow: ${theme.colors.boxShadow};

            ${breakpointsMap.DESKTOP} {
              width: 390px;
              flex-grow: 1;
            }
          `}
        >
          <div
            className="baloon__middle"
            css={css`
              border-bottom: none;
            `}
          >
            <div
              className="baloon__middle-container"
              css={css`
                padding-left: 0;

                ${breakpointsMap.TABLET} {
                  display: flex;
                  justify-content: center;
                }
              `}
            >
              <div
                className="baloon__shedule"
                css={css`
                  width: 100%;
                `}
              >
                <p
                  className="baloon__shedule-working-time"
                  css={css`
                    padding-left: 30px;
                  `}
                >
                  Сегодня с
                  <span
                    className="baloon__shedule-time"
                    css={css`
                      &:after {
                        display: none;
                      }
                    `}
                  >
                    7:00 - 19:00
                  </span>
                  <svg
                    className="baloon__shedule-working-time-icon"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    css={css`
                      left: 15px;
                    `}
                  >
                    <g transform="translate(-1064.471 -174.964)">
                      <g transform="translate(1064.471 174.964)">
                        <g transform="translate(0 0)">
                          <path
                            d="M1209.971,258.964a4.5,4.5,0,1,0,4.5,4.5,4.513,4.513,0,0,0-4.5-4.5Zm0,8.1a3.6,3.6,0,1,1,3.6-3.6A3.61,3.61,0,0,1,1209.971,267.064Zm.225-5.85h-.675v2.7l2.34,1.44.36-.585-2.025-1.215Z"
                            transform="translate(-1205.471 -258.964)"
                            fill="#000"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
                <p
                  className="baloon__shedule-state"
                  css={css`
                    padding-left: 20px;
                  `}
                >
                  Открыто
                </p>
                <ul
                  className="shedule shedule--shown"
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    padding-right: 10px;
                    padding-left: 10px;
                  `}
                >
                  <li
                    className="shedule__item"
                    css={css`
                      ${breakpointsMap.TABLET} {
                        flex-direction: row;
                        margin-right: 5px;
                      }

                      ${breakpointsMap.DESKTOP} {
                        flex-direction: column;
                      }
                    `}
                  >
                    <p className="shedule__day">ПН</p>
                    <div
                      css={css`
                        display: flex;
                        flex-direction: column;
                        margin-left: 10px;
                      `}
                    >
                      <time className="shdeule__time">07:00</time>
                      <time className="shdeule__time">19:00</time>
                    </div>
                  </li>
                  <li
                    className="shedule__item"
                    css={css`
                      ${breakpointsMap.TABLET} {
                        flex-direction: row;
                        margin-right: 5px;
                      }

                      ${breakpointsMap.DESKTOP} {
                        flex-direction: column;
                      }
                    `}
                  >
                    <p className="shedule__day">ПН</p>
                    <div
                      css={css`
                        display: flex;
                        flex-direction: column;
                        margin-left: 10px;
                      `}
                    >
                      <time className="shdeule__time">07:00</time>
                      <time className="shdeule__time">19:00</time>
                    </div>
                  </li>
                  <li
                    className="shedule__item"
                    css={css`
                      ${breakpointsMap.TABLET} {
                        flex-direction: row;
                        margin-right: 5px;
                      }

                      ${breakpointsMap.DESKTOP} {
                        flex-direction: column;
                      }
                    `}
                  >
                    <p className="shedule__day">ПН</p>
                    <div
                      css={css`
                        display: flex;
                        flex-direction: column;
                        margin-left: 10px;
                      `}
                    >
                      <time className="shdeule__time">07:00</time>
                      <time className="shdeule__time">19:00</time>
                    </div>
                  </li>
                  <li
                    className="shedule__item"
                    css={css`
                      ${breakpointsMap.TABLET} {
                        flex-direction: row;
                        margin-right: 5px;
                      }

                      ${breakpointsMap.DESKTOP} {
                        flex-direction: column;
                      }
                    `}
                  >
                    <p className="shedule__day">ПН</p>
                    <div
                      css={css`
                        display: flex;
                        flex-direction: column;
                        margin-left: 10px;
                      `}
                    >
                      <time className="shdeule__time">07:00</time>
                      <time className="shdeule__time">19:00</time>
                    </div>
                  </li>
                  <li
                    className="shedule__item"
                    css={css`
                      ${breakpointsMap.TABLET} {
                        flex-direction: row;
                        margin-right: 5px;
                      }

                      ${breakpointsMap.DESKTOP} {
                        flex-direction: column;
                      }
                    `}
                  >
                    <p className="shedule__day">ПН</p>
                    <div
                      css={css`
                        display: flex;
                        flex-direction: column;
                        margin-left: 10px;
                      `}
                    >
                      <time className="shdeule__time">07:00</time>
                      <time className="shdeule__time">19:00</time>
                    </div>
                  </li>
                  <li
                    className="shedule__item"
                    css={css`
                      ${breakpointsMap.TABLET} {
                        flex-direction: row;
                        margin-right: 5px;
                      }

                      ${breakpointsMap.DESKTOP} {
                        flex-direction: column;
                      }
                    `}
                  >
                    <p className="shedule__day">ПН</p>
                    <div
                      css={css`
                        display: flex;
                        flex-direction: column;
                        margin-left: 10px;
                      `}
                    >
                      <time className="shdeule__time">07:00</time>
                      <time className="shdeule__time">19:00</time>
                    </div>
                  </li>
                  <li
                    className="shedule__item"
                    css={css`
                      ${breakpointsMap.TABLET} {
                        flex-direction: row;
                        margin-right: 5px;
                      }

                      ${breakpointsMap.DESKTOP} {
                        flex-direction: column;
                      }
                    `}
                  >
                    <p className="shedule__day">ПН</p>
                    <div
                      css={css`
                        display: flex;
                        flex-direction: column;
                        margin-left: 10px;
                      `}
                    >
                      <time className="shdeule__time">07:00</time>
                      <time className="shdeule__time">19:00</time>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          css={css`
            position: relative;

            &:after {
              position: absolute;
              top: 40px;
              right: 10px;
              display: block;
              width: 17px;
              height: 1px;
              background-color: ${theme.colors.blue};
              content: '';
              transform: rotate(45deg);
            }

            &:before {
              position: absolute;
              top: 52px;
              right: 10px;
              display: block;
              width: 17px;
              height: 1px;
              background-color: ${theme.colors.blue};
              content: '';
              transform: rotate(-45deg);
            }

            &:hover {
              background-image: ${theme.colors.linearGradient};

              &:before,
              &:after {
                background-color: ${theme.colors.white};
              }
            }

            ${breakpointsMap.DESKTOP} {
              width: 390px;
              flex-grow: 1;

              &:after {
                top: 50px;
              }

              &:before {
                top: 62px;
              }
            }
          `}
        >
          <a
            href="/"
            css={css`
              position: relative;
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              justify-content: flex-start;
              padding-top: 29px;
              padding-bottom: 62px;
              padding-left: 38px;
              font-size: 16px;

              &:after {
                position: absolute;
                top: 68px;
                left: 38px;
                display: block;
                width: 130px;
                height: 14px;
                color: #9a66f5;
                content: '///////////';
                font-size: 22px;
                font-weight: 500;
                letter-spacing: 4.5px;
                opacity: 0.6;
                transform: skew(-16deg, 0deg);
              }

              &:hover {
                color: ${theme.colors.white};

                &:after {
                  color: ${theme.colors.white};
                }
              }

              ${breakpointsMap.DESKTOP} {
                &:after {
                  top: 78px;
                }
              }
            `}
          >
            Перейти на страницу
            <br />
            медицинского центра
          </a>
        </div>
      </div>
      <div
        css={css`
          margin-top: 10px;
        `}
      >
        <Specialist data={specialists[0]} />
      </div>
      <div
        css={css`
          padding-right: 10px;
          padding-left: 10px;
        `}
      >
        <h2
          css={css`
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Выберите специалиста
        </h2>
        <PositionsCatalog />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding-top: 37px;
          padding-right: 10px;
          padding-left: 10px;

          ${breakpointsMap.TABLET} {
            flex-direction: row;
            flex-wrap: wrap;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            width: 339px;
            flex-direction: column;
            align-items: center;
            align-self: center;
            margin-bottom: 29px;
            box-shadow: ${theme.colors.boxShadow};

            ${breakpointsMap.TABLET} {
              margin-right: auto;
            }

            ${breakpointsMap.DESKTOP} {
              margin-right: 31px;
            }
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
            Должность:
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
            width: 339px;
            flex-direction: column;
            align-items: center;
            align-self: center;
            padding-bottom: 39px;
            margin-bottom: 29px;
            box-shadow: ${theme.colors.boxShadow};

            ${breakpointsMap.DESKTOP} {
              margin-right: 31px;
            }
          `}
        >
          <Picture src="img/beatiful-young-fem" />
          <p
            css={css`
              font-size: 16px;
            `}
          >
            Мельникова Наталья Игоревна
          </p>
          <p
            css={css`
              font-size: 13px;
            `}
          >
            Должность: Дерматовенеролог
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
            width: 339px;
            flex-direction: column;
            align-items: center;
            align-self: center;
            padding-bottom: 39px;
            margin-bottom: 29px;
            box-shadow: ${theme.colors.boxShadow};

            ${breakpointsMap.TABLET} {
              margin-right: auto;
            }

            ${breakpointsMap.DESKTOP} {
              margin-right: 0;
            }
          `}
        >
          <Picture src="img/beatiful-young-fem" />
          <p
            css={css`
              font-size: 16px;
            `}
          >
            Мельникова Наталья Игоревна
          </p>
          <p
            css={css`
              font-size: 13px;
            `}
          >
            Должность: Дерматовенеролог
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
            width: 339px;
            flex-direction: column;
            align-items: center;
            align-self: center;
            padding-bottom: 39px;
            margin-bottom: 29px;
            box-shadow: ${theme.colors.boxShadow};
          `}
        >
          <Picture src="img/beatiful-young-fem" />
          <p
            css={css`
              font-size: 16px;
            `}
          >
            Мельникова Наталья Игоревна
          </p>
          <p
            css={css`
              font-size: 13px;
            `}
          >
            Должность: Дерматовенеролог
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
      </div>
      <table
        css={css`
          display: flex;
          width: 100%;
          flex-direction: column;
          padding-top: 16px;
          margin-top: 12px;
          margin-bottom: 31px;
        `}
      >
        <tbody>
          <tr
            className="table__row"
            css={css`
              position: relative;
              display: flex;
              flex-wrap: wrap;
              padding: 13px 17px;
              box-shadow: ${theme.colors.boxShadow};

              ${breakpointsMap.TABLET} {
                padding-top: 35px;
                padding-bottom: 35px;
              }

              ${breakpointsMap.DESKTOP} {
                padding-right: 70px;
              }
            `}
          >
            <td
              className="table__cell"
              css={css`
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                font-size: 12px;

                ${breakpointsMap.TABLET} {
                  width: 77px;
                  min-width: 77px;
                }

                ${breakpointsMap.DESKTOP} {
                  width: 115px;
                  margin-bottom: 0;
                }
              `}
            >
              18.110
            </td>
            <td
              className="table__cell"
              css={css`
                display: flex;
                width: 100%;
                align-items: center;
                margin-bottom: 15px;
                font-size: 16px;
                font-weight: 500;

                ${breakpointsMap.TABLET} {
                  width: 285px;
                  margin-bottom: 0;
                }

                ${breakpointsMap.DESKTOP} {
                  width: 268px;
                  margin-right: auto;
                  margin-bottom: 0;
                }
              `}
            >
              Общий анализ крови (5-diff), капиллярная кровь
            </td>
            <td
              className="table__cell"
              css={css`
                display: flex;
                width: 100%;
                align-items: center;
                margin-bottom: 10px;
                font-size: 12px;

                ${breakpointsMap.TABLET} {
                  width: 110px;
                  margin-right: 41px;
                }

                ${breakpointsMap.DESKTOP} {
                  width: 128px;
                  margin-right: auto;
                  margin-bottom: 0;
                }
              `}
            >
              Кровь (сыворотка)
            </td>
            <td
              className="table__cell"
              css={css`
                display: flex;
                width: 110px;
                flex-direction: column;
                justify-content: center;
              `}
            >
              <span
                css={css`
                  margin-bottom: 2px;
                  font-size: 26px;
                  font-weight: 500;
                `}
              >
                1 100 ₽
              </span>
              <span
                css={css`
                  font-size: 12px;
                `}
              >
                Срок 1 день
              </span>
            </td>
            <td>
              <button
                className="buy__button"
                type="button"
                css={css`
                  position: absolute;
                  right: 0;
                  bottom: 20px;
                  display: flex;
                  width: 60px;
                  height: 60px;
                  align-items: center;
                  justify-content: center;
                  border: none;
                  appearance: none;
                  background-color: transparent;
                  background-image: linear-gradient(
                    -135deg,
                    rgba(255, 0, 235, 0.2) 0%,
                    rgba(154, 102, 245, 0.2) 50%,
                    rgba(43, 215, 255, 0.2) 100%
                  );
                  border-radius: 50%;

                  ${breakpointsMap.TABLET} {
                    right: 16px;
                    bottom: 29px;
                  }

                  ${breakpointsMap.DESKTOP} {
                    bottom: 27px;
                  }
                `}
              >
                <CartIcon fill="#9A66F5" width="23.74px" height="21px" />{' '}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            position: relative;
            display: flex;
            min-width: 100%;
            min-height: 245px;
            margin-bottom: 10px;
            box-shadow: ${theme.colors.boxShadow};

            .complex__img {
              height: 100%;
            }

            @media (min-width: 400px) {
              padding-right: 60px;
            }
          `}
        >
          <Picture
            src="img/service-complex"
            imgClass="complex__img"
            containerClass="complex__img-container"
            alt="Изображение описывающющее анализ"
            width="126"
            height="245"
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              align-items: flex-start;
              padding-right: 21px;
              padding-bottom: 20px;
              padding-left: 21px;

              ${breakpointsMap.DESKTOP} {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding-right: 80px;
              }
            `}
          >
            <div
              css={css`
                margin-bottom: 10px;
                letter-spacing: -0.5px;

                ${breakpointsMap.DESKTOP} {
                  margin-bottom: 0;
                }
              `}
            >
              <Link
                to="/analyze/Обследование печени, скрининг"
                css={css`
                  margin-top: 15px;
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Обследование печени, скрининг
              </Link>
              <p>Анализы комплекса:</p>
              <ul
                css={css`
                  padding: 0;
                `}
              >
                <li>
                  30.31 / Коагулограмма (АПТВ,ПТВ,ТВ,МНО, РФМК, фибриноген)
                </li>
                <li> 45.2 / Взятие крови на показатель ImG</li>
                <li>
                  30.31 / Коагулограмма (АПТВ,ПТВ,ТВ,МНО, РФМК, фибриноген)
                </li>
                <li>
                  30.31 / Коагулограмма (АПТВ,ПТВ,ТВ,МНО, РФМК, фибриноген)
                </li>
              </ul>
              <a
                href="some"
                className="complex__expand-button"
                aria-label="нажмите что развернуть все анализы"
                role="button"
                tabIndex="0"
                css={css`
                  padding-left: 0;
                `}
              >
                Показать все анализы
              </a>
            </div>
            <a
              href="/"
              css={css`
                align-self: flex-start;
                padding-bottom: 5px;
                border-bottom: 1px solid ${theme.colors.blue};
                margin-bottom: 10px;
                font-size: 16px;
                font-weight: 500;

                @media (min-width: 400px) {
                  align-self: flex-end;
                }

                ${breakpointsMap.DESKTOP} {
                  align-self: center;
                  margin-bottom: 0;
                }
              `}
            >
              Показать анализы
            </a>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                align-self: flex-start;

                @media (min-width: 400px) {
                  align-self: flex-end;
                }

                ${breakpointsMap.DESKTOP} {
                  align-self: center;
                  margin-bottom: 0;
                }
              `}
            >
              <span
                css={css`
                  margin-bottom: 5px;
                  font-size: 12px;
                  font-weight: 500;
                  text-decoration: line-through;
                `}
              >
                1 100 ₽
              </span>
              <span
                css={css`
                  margin-bottom: 5px;
                  font-size: 26px;
                  font-weight: 500;
                `}
              >
                1 100 ₽
              </span>
              <a
                href="/"
                css={css`
                  color: ${theme.colors.blue};
                  font-size: 12px;
                `}
              >
                Включает 6 анализов
                <ExpandIcon
                  fill="none"
                  stroke={theme.colors.blue}
                  css={css`
                    transform: rotate(-455deg);
                  `}
                />
              </a>
            </div>
            <button
              className="buy__button"
              type="button"
              css={css`
                position: absolute;
                right: 14px;
                bottom: 30px;
                display: flex;
                width: 60px;
                height: 60px;
                align-items: center;
                justify-content: center;
                border: none;
                appearance: none;
                background-color: transparent;
                background-image: linear-gradient(
                  -135deg,
                  rgba(255, 0, 235, 0.2) 0%,
                  rgba(154, 102, 245, 0.2) 50%,
                  rgba(43, 215, 255, 0.2) 100%
                );
                border-radius: 50%;

                ${breakpointsMap.DESKTOP} {
                  bottom: 106px;
                }
              `}
            >
              <CartIcon fill="#9A66F5" width="23.74px" height="21px" />
            </button>
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 35px;
          padding-bottom: 35px;
          border-top: 1px dashed ${theme.colors.colorText.hex};
          border-bottom: 1px dashed ${theme.colors.colorText.hex};
          margin-top: 26px;
          margin-bottom: 26px;

          @media (min-width: 360px) {
            flex-direction: row;
            justify-content: flex-start;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;

            @media (min-width: 360px) {
              justify-content: flex-start;
              padding-left: 34px;
              margin-right: auto;
            }
          `}
        >
          <time
            css={css`
              position: relative;
              margin-right: 21px;

              &:before {
                position: absolute;
                top: 3px;
                left: -14px;
                display: block;
                width: 9px;
                height: 9px;
                background-image: url('img/clock.svg');
                background-repeat: no-repeat;
                background-size: 9px 9px;
                content: '';
              }
            `}
          >
            12:35
          </time>
          <span
            css={css`
              position: relative;

              &:before {
                position: absolute;
                top: 3px;
                left: -14px;
                display: block;
                width: 12px;
                height: 7.5px;
                background-image: url('img/views.svg');
                background-repeat: no-repeat;
                background-size: 12px 7.5px;
                content: '';
              }
            `}
          >
            532
          </span>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;

            .social__link {
              color: ${theme.colors.colorText.hex};
            }

            @media (min-width: 360px) {
              justify-content: flex-start;
            }
          `}
        >
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
                width: 46px;
                height: 4px;
                background-image: ${theme.colors.linearGradient};
                content: '';
              }
            `}
          >
            Поделиться
          </a>
          <Socials />
          <ShareIcon />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          min-height: 92px;
          flex-direction: column;
          margin-bottom: 10px;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
          }
        `}
      >
        <a
          href="/"
          css={css`
            position: relative;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            align-items: flex-end;
            justify-content: center;
            padding-top: 20px;
            padding-right: 47px;
            padding-bottom: 20px;
            background-color: #f7f7f7;

            &:before {
              position: absolute;
              top: 57px;
              left: 10px;
              display: block;
              width: 15px;
              height: 1px;
              background-color: ${theme.colors.colorText.hex};
              content: '';
              transform: rotate(45deg);
            }

            &:after {
              position: absolute;
              top: 46px;
              left: 10px;
              display: block;
              width: 15px;
              height: 1px;
              background-color: ${theme.colors.colorText.hex};
              content: '';
              transform: rotate(-45deg);
            }

            &:hover,
            &:active {
              background-image: ${theme.colors.linearGradient};
              color: ${theme.colors.white};

              &:before,
              &:after {
                background-color: ${theme.colors.white};
              }
            }

            ${breakpointsMap.DESKTOP} {
              padding-top: 0;
              padding-bottom: 0;
            }
          `}
        >
          <span
            css={css`
              font-size: 10px;
            `}
          >
            Предыдущая
          </span>
          <h3
            css={css`
              font-weight: 500;
              font-weight: 16px;
            `}
          >
            Врачи диагностировали у Байдена две трещины в костях ноги
          </h3>
        </a>
        <div
          css={css`
            padding-top: 20px;
            padding-bottom: 20px;
            background-image: ${theme.colors.linearGradient};

            ${breakpointsMap.DESKTOP} {
              width: 166px;
              padding: 0;
            }
          `}
        >
          <a
            href="/"
            css={css`
              display: flex;
              width: 100%;
              height: 100%;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: ${theme.colors.white};

              &:hover,
              &:active {
                color: ${theme.colors.white};
              }
            `}
          >
            <GridIcon />
            <span>Смотреть все</span>
          </a>
        </div>
        <a
          href="/"
          css={css`
            position: relative;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            align-items: flex-start;
            justify-content: center;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 47px;
            background-color: #f7f7f7;

            &:before {
              position: absolute;
              top: 57px;
              right: 10px;
              display: block;
              width: 15px;
              height: 1px;
              background-color: ${theme.colors.colorText.hex};
              content: '';
              transform: rotate(-45deg);
            }

            &:after {
              position: absolute;
              top: 46px;
              right: 10px;
              display: block;
              width: 15px;
              height: 1px;
              background-color: ${theme.colors.colorText.hex};
              content: '';
              transform: rotate(45deg);
            }

            &:hover,
            &:active {
              background-image: ${theme.colors.linearGradient};
              color: ${theme.colors.white};

              &:before,
              &:after {
                background-color: ${theme.colors.white};
              }
            }

            ${breakpointsMap.DESKTOP} {
              padding-top: 0;
              padding-bottom: 0;
            }
          `}
        >
          <span
            css={css`
              font-size: 10px;
            `}
          >
            Следующая
          </span>
          <h3
            css={css`
              font-weight: 500;
              font-weight: 16px;
            `}
          >
            Врачи диагностировали у Байдена две трещины в костях ноги
          </h3>
        </a>
      </div>
    </>
  );
};

Shares.propTypes = {
  specialists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      job: PropTypes.arrayOf(PropTypes.string),
      ages: PropTypes.number,
      price: PropTypes.number,
      adresses: PropTypes.arrayOf(
        PropTypes.shape({
          city: PropTypes.string,
          center: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string,
              adress: PropTypes.string,
            }),
          ),
        }),
      ),
    }),
  ).isRequired,
};

export default connect(
  mapStateToPropsGenerator(Components.SPECIALISTS),
  null,
)(Shares);
