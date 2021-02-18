import React from 'react';
import { css, useTheme } from '@emotion/react';
import { ReactComponent as TelIcon } from 'icons/tel-icon.svg';
import { ReactComponent as MailIcon } from 'icons/mail.svg';
import { breakpointsMap } from 'src/constants/styles';
import Picture from 'common/picture';
import SliderControls from 'src/components/common/slider-controls';
import { ReactComponent as Star } from 'icons/star.svg';
import SectionInner from 'containers/section-inner';
import PositionsCatalog from '../../servicePage/components/services/common/positions-catalog';

const MedCenter = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        .section__inner {
          padding-left: 0;
        }
      `}
    >
      <SectionInner>
        <h2
          className="main__title"
          css={css`
            margin-bottom: 53px;
          `}
        >
          Лабдиагностика г. Пермь, ул. Хабаровская, 56
        </h2>
        <div
          css={css`
            padding-right: 5px;
            padding-left: 5px;
            margin-bottom: 31px;
          `}
        >
          <span
            css={css`
              position: relative;
              padding-left: 13px;
              margin-right: 60px;
            `}
          >
            <TelIcon
              fill="#000"
              width="9"
              height="10"
              css={css`
                position: absolute;
                top: 0;
                left: 0;
              `}
            />
            +7 (999) 999-99-99
          </span>
          <span
            css={css`
              position: relative;
              padding-left: 16px;
            `}
          >
            <MailIcon
              fill="#000"
              width="9"
              height="7"
              css={css`
                position: absolute;
                top: 3px;
                left: 0;
              `}
            />
            info@labdiag.ru
          </span>
        </div>
        <div
          css={css`
            padding-right: 10px;
            padding-left: 10px;
          `}
        >
          <h3
            css={css`
              margin-top: 0;
              margin-bottom: 35px;
              font-size: 16px;
              font-weight: 500;
            `}
          >
            Описание
          </h3>
          <p
            css={css`
              margin: 0;
              margin-bottom: 20.5px;
              font-size: 13px;
              line-height: 22px;
            `}
          >
            Приемы врачей и УЗИ ведутся по предварительной записи, тел.: (342) 2
            700 789, доб. 803.
            <br /> Забор анализов в порядке живой очереди, без записи.
          </p>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;

            ${breakpointsMap.DESKTOP} {
              flex-direction: row;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding-top: 3.5px;

              ${breakpointsMap.DESKTOP} {
                width: 570px;
                margin-right: auto;
              }
            `}
          >
            <div
              css={css`
                width: 100%;
                max-width: 370px;
                margin: 0 auto;

                ${breakpointsMap.TABLET} {
                  display: none;
                }
              `}
            >
              <h3
                css={css`
                  display: flex;
                  width: 100%;
                  align-items: center;
                  justify-content: center;
                  padding: 10px;
                  margin: 0;
                  margin-right: 8px;
                  margin-bottom: 8px;
                  background-color: ${theme.colors.blue};
                  border-radius: 4px;
                  color: ${theme.colors.white};
                  font-weight: 400;
                  text-align: left;
                `}
              >
                График приёма пациентов
              </h3>
              <div>
                <h4
                  css={css`
                    width: 100%;
                    padding: 10px;
                    margin: 0;
                    background-color: #f7f7f7;
                    border-radius: 4px;
                    font-size: 16px;
                    font-weight: 500;
                    text-align: center;
                    vertical-align: center;
                  `}
                >
                  Взятие крови
                </h4>
                <ul
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    padding: 0;
                    padding-right: 5px;
                    padding-left: 5px;
                    list-style: none;
                  `}
                >
                  <li
                    css={css`
                      display: flex;
                      width: 95px;
                      align-items: center;
                      justify-content: center;
                      padding: 10px;
                      background-color: ${theme.colors.colorText.hex};
                      border-radius: 4px;
                      color: ${theme.colors.white};
                    `}
                  >
                    ПН-ПТ
                  </li>
                  <li
                    css={css`
                      display: flex;
                      width: 95px;
                      align-items: center;
                      justify-content: center;
                      padding: 10px;
                      background-color: ${theme.colors.colorText.hex};
                      border-radius: 4px;
                      color: ${theme.colors.white};
                    `}
                  >
                    СБ
                  </li>
                  <li
                    css={css`
                      display: flex;
                      width: 95px;
                      align-items: center;
                      justify-content: center;
                      padding: 10px;
                      background-color: ${theme.colors.colorText.hex};
                      border-radius: 4px;
                      color: ${theme.colors.white};
                    `}
                  >
                    ВС
                  </li>
                </ul>
                <ul
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    padding: 0;
                    padding-right: 5px;
                    padding-left: 5px;
                    list-style: none;
                  `}
                >
                  <li
                    css={css`
                      display: flex;
                      width: 95px;
                      align-items: center;
                      justify-content: center;
                      padding: 10px 0;
                      background-color: #f7f7f7;
                      border-radius: 4px;
                      color: ${theme.colors.colorText.hex};
                    `}
                  >
                    07:00 - 19:00
                  </li>
                  <li
                    css={css`
                      display: flex;
                      width: 95px;
                      align-items: center;
                      justify-content: center;
                      padding: 10px 0;
                      background-color: #f7f7f7;
                      border-radius: 4px;
                      color: ${theme.colors.colorText.hex};
                    `}
                  >
                    07:00 - 19:00
                  </li>
                  <li
                    css={css`
                      display: flex;
                      width: 95px;
                      align-items: center;
                      justify-content: center;
                      padding: 10px 0;
                      background-color: #f7f7f7;
                      border-radius: 4px;
                      color: ${theme.colors.colorText.hex};
                    `}
                  >
                    07:00 - 19:00
                  </li>
                </ul>
              </div>
            </div>
            <table
              css={css`
                display: none;
                width: 100%;
                margin-bottom: 10px;

                ${breakpointsMap.TABLET} {
                  display: table;
                }
              `}
            >
              <thead>
                <tr
                  css={css`
                    display: flex;
                    padding-right: 5px;
                    padding-left: 5px;
                    margin-bottom: 6px;

                    ${breakpointsMap.DESKTOP} {
                      padding: 0;
                    }
                  `}
                >
                  <th
                    css={css`
                      display: flex;
                      width: 160px;
                      flex-grow: 1;
                      align-items: center;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      padding-left: 26px;
                      margin-right: 8px;
                      background-color: ${theme.colors.blue};
                      border-radius: 4px;
                      color: ${theme.colors.white};
                      font-weight: 400;
                      text-align: left;

                      ${breakpointsMap.DESKTOP} {
                        width: 263px;
                      }
                    `}
                  >
                    График приёма пациентов
                  </th>
                  <th
                    css={css`
                      display: flex;
                      width: 75px;
                      flex-grow: 0.5;
                      align-items: center;
                      justify-content: center;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      margin-right: 8px;
                      background-color: ${theme.colors.colorText.hex};
                      border-radius: 4px;
                      color: ${theme.colors.white};
                      font-weight: 400;
                      vertical-align: center;
                      ${breakpointsMap.DESKTOP} {
                        width: 90px;
                      }
                    `}
                  >
                    ПН-ПТ
                  </th>
                  <th
                    css={css`
                      display: flex;
                      width: 75px;
                      flex-grow: 0.5;
                      align-items: center;
                      justify-content: center;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      margin-right: 8px;
                      background-color: ${theme.colors.colorText.hex};
                      border-radius: 4px;
                      color: ${theme.colors.white};
                      font-weight: 400;

                      ${breakpointsMap.DESKTOP} {
                        width: 90px;
                      }
                    `}
                  >
                    СБ
                  </th>
                  <th
                    css={css`
                      display: flex;
                      width: 75px;
                      flex-grow: 0.5;
                      align-items: center;
                      justify-content: center;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      background-color: ${theme.colors.colorText.hex};
                      border-radius: 4px;
                      color: ${theme.colors.white};
                      font-weight: 400;

                      ${breakpointsMap.DESKTOP} {
                        width: 90px;
                      }
                    `}
                  >
                    ВС
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  css={css`
                    display: flex;
                    padding-right: 5px;
                    padding-left: 5px;
                    margin-bottom: 6px;

                    ${breakpointsMap.DESKTOP} {
                      padding: 0;
                    }
                  `}
                >
                  <td
                    css={css`
                      display: flex;
                      width: 160px;
                      flex-grow: 1;
                      align-items: center;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      padding-left: 26px;
                      margin-right: 8px;
                      background-color: #f7f7f7;
                      border-radius: 4px;
                      color: ${theme.colors.colorText.hex};
                      font-weight: 500;
                      text-align: left;

                      ${breakpointsMap.DESKTOP} {
                        width: 263px;
                      }
                    `}
                  >
                    Взятие крови
                  </td>
                  <td
                    css={css`
                      display: flex;
                      width: 75px;
                      flex-grow: 0.5;
                      align-items: center;
                      justify-content: center;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      margin-right: 8px;
                      background-color: #f7f7f7;
                      border-radius: 4px;
                      color: ${theme.colors.colorText.hex};
                      font-weight: 400;
                      vertical-align: center;
                      ${breakpointsMap.DESKTOP} {
                        width: 90px;
                      }
                    `}
                  >
                    07:00 - 19:00{' '}
                  </td>
                  <td
                    css={css`
                      display: flex;
                      width: 75px;
                      flex-grow: 0.5;
                      align-items: center;
                      justify-content: center;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      margin-right: 8px;
                      background-color: #f7f7f7;
                      border-radius: 4px;
                      color: ${theme.colors.colorText.hex};
                      font-weight: 400;

                      ${breakpointsMap.DESKTOP} {
                        width: 90px;
                      }
                    `}
                  >
                    07:00 - 19:00
                  </td>
                  <td
                    css={css`
                      display: flex;
                      width: 75px;
                      flex-grow: 0.5;
                      align-items: center;
                      justify-content: center;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      background-color: #f7f7f7;
                      border-radius: 4px;
                      color: ${theme.colors.colorText.hex};
                      font-weight: 400;

                      ${breakpointsMap.DESKTOP} {
                        width: 90px;
                      }
                    `}
                  >
                    07:00 - 19:00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <form
              action="post"
              css={css`
                display: flex;
                flex-direction: column;
                padding-top: 28px;
                padding-right: 35px;
                padding-bottom: 42px;
                padding-left: 35px;
                background-image: url('img/analyze-q-bg.png'),
                  linear-gradient(
                    to left,
                    RGBA(250, 0, 235, 1),
                    RGBA(154, 102, 245, 1),
                    RGBA(43, 215, 255, 1)
                  );
                background-position: 0 0;
                background-repeat: no-repeat;
                background-size: cover;
                color: ${theme.colors.white};
                @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
                  background-image: url('img/analyze-q-bg@2x.png'),
                    linear-gradient(
                      to left,
                      RGBA(250, 0, 235, 1),
                      RGBA(154, 102, 245, 1),
                      RGBA(43, 215, 255, 1)
                    );
                }

                ${breakpointsMap.DESKTOP} {
                  width: 600px;
                  padding-right: 24px;
                  padding-left: 24px;
                }
              `}
            >
              <legend
                css={css`
                  width: 100%;
                  margin-bottom: 25px;
                  font-size: 22px;
                  text-align: center;
                `}
              >
                Обратный звонок
              </legend>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;

                  ${breakpointsMap.TABLET} {
                    flex-direction: row;
                  }
                `}
              >
                <input
                  type="text"
                  placeholder="Ваше имя *"
                  css={css`
                    height: 37px;
                    flex-grow: 1;
                    padding-top: 9px;
                    padding-bottom: 11px;
                    padding-left: 14px;
                    border: none;
                    margin-bottom: 15px;
                    appearance: none;
                    color: ${theme.colors.colorText.hex};

                    ${breakpointsMap.TABLET} {
                      margin-right: 26px;
                    }
                  `}
                />
                <input
                  type="text"
                  placeholder="Желаемое время"
                  css={css`
                    height: 37px;
                    flex-grow: 1;
                    padding-top: 9px;
                    padding-bottom: 11px;
                    padding-left: 14px;
                    border: none;
                    margin-bottom: 15px;
                    appearance: none;
                    color: ${theme.colors.colorText.hex};
                  `}
                />
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 15px;

                  ${breakpointsMap.TABLET} {
                    flex-direction: row;
                  }
                `}
              >
                <input
                  type="text"
                  placeholder="Телефон *"
                  css={css`
                    min-width: 221px;
                    height: 37px;
                    flex-grow: 1;
                    padding-top: 9px;
                    padding-bottom: 11px;
                    padding-left: 14px;
                    border: none;
                    margin-bottom: 15px;
                    appearance: none;
                    color: ${theme.colors.colorText.hex};

                    ${breakpointsMap.TABLET} {
                      width: 312px;
                      flex-grow: 0;
                      margin-right: 26px;
                    }

                    ${breakpointsMap.DESKTOP} {
                      width: 263px;
                      margin-right: 25px;
                    }
                  `}
                />
                <div
                  className="form__input-checkbox-container"
                  css={css`
                    margin-bottom: 0;
                  `}
                >
                  <label
                    htmlFor="agree"
                    className="form__label form__label--checkbox"
                    css={css`
                      ${breakpointsMap.DESKTOP} {
                        margin-right: 0;
                      }
                    `}
                  >
                    <input
                      type="checkbox"
                      className="form__input form__input--checkbox"
                      id="agree"
                      name="agree"
                      aria-label="Нажимая на кнопку отправить вы соглашаетесь с нашей политикой конфиденциальности"
                    />
                    <span className="form__input-checkbox-span" />
                  </label>
                  <small className="form__agreement-hint">
                    Нажимая на кнопку отправить вы{' '}
                    <br
                      css={css`
                        display: none;
                        ${breakpointsMap.TABLET} {
                          display: block;
                        }
                      `}
                    />
                    соглашаетесь с нашей политикой
                    <br
                      css={css`
                        display: none;
                        ${breakpointsMap.TABLET} {
                          display: block;
                        }
                      `}
                    />{' '}
                    конфиденциальности
                  </small>
                </div>
              </div>
              <div
                css={css`
                  display: flex;
                  width: 100%;
                  flex-direction: column;
                  align-items: center;
                `}
              >
                <small
                  css={css`
                    font-size: 9px;
                  `}
                >
                  Звонки обрабатываются по будням с 08.00 до 20.00
                </small>
                <button
                  className="button"
                  type="submit"
                  aria-label="Отправить форму"
                  css={css`
                    width: 210px;
                    align-self: center;
                    padding-top: 15px;
                    padding-bottom: 17px;
                    border-radius: 6px;
                  `}
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          css={css`
            padding-top: 37px;
            padding-right: 5px;
            padding-left: 5px;
          `}
        >
          <h3
            css={css`
              margin: 0;
              margin-bottom: 38px;
              font-size: 16px;
              font-weight: 400;
            `}
          >
            Выбор специалсита
          </h3>
          <PositionsCatalog />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            padding-top: 37px;
            padding-right: 5px;
            padding-left: 5px;

            ${breakpointsMap.TABLET} {
              flex-direction: row;
              flex-wrap: wrap;
            }
          `}
        >
          <h3
            css={css`
              width: 100%;
              margin: 0;
              margin-bottom: 38px;
              font-size: 16px;
              font-weight: 500;
            `}
          >
            Эндокринологи
          </h3>
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
      </SectionInner>
      <div
        css={css`
          padding-top: 20.5px;
          padding-bottom: 23px;
          margin-bottom: 38px;
          background-image: ${theme.colors.linearGradient};
        `}
      >
        <SectionInner>
          <ul
            css={css`
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: space-between;
              justify-content: center;
              padding: 0;
              padding-right: 10px;
              padding-left: 10px;
              color: ${theme.colors.white};
              list-style: none;

              ${breakpointsMap.TABLET} {
                flex-wrap: nowrap;
              }

              ${breakpointsMap.DESKTOP} {
                justify-content: space-between;
                padding-right: 20px;
                padding-left: 20px;
                margin: 0;
              }
            `}
          >
            <li
              css={css`
                display: flex;
                min-height: 31px;
                align-items: center;
                padding-left: 30px;
                margin-right: 10px;
                margin-bottom: 10px;
                background-image: url('img/doctor-white.svg');
                background-position: left center;
                background-repeat: no-repeat;
                background-size: 23px 31px;

                ${breakpointsMap.DESKTOP} {
                  margin: 0;
                }
              `}
            >
              Работает без выходных
            </li>
            <li
              css={css`
                display: flex;
                min-height: 31px;
                align-items: center;
                padding-left: 30px;
                margin-right: 10px;
                margin-bottom: 10px;
                background-image: url('img/doctor-white.svg');
                background-position: left center;
                background-repeat: no-repeat;
                background-size: 23px 31px;

                ${breakpointsMap.DESKTOP} {
                  margin: 0;
                }
              `}
            >
              Работает без выходных
            </li>
            <li
              css={css`
                display: flex;
                min-height: 31px;
                align-items: center;
                padding-left: 30px;
                margin-right: 10px;
                margin-bottom: 10px;
                background-image: url('img/doctor-white.svg');
                background-position: left center;
                background-repeat: no-repeat;
                background-size: 23px 31px;

                ${breakpointsMap.DESKTOP} {
                  margin: 0;
                }
              `}
            >
              Работает без выходных
            </li>
            <li
              css={css`
                display: flex;
                min-height: 31px;
                align-items: center;
                padding-left: 30px;
                margin-right: 10px;
                margin-bottom: 10px;
                background-image: url('img/doctor-white.svg');
                background-position: left center;
                background-repeat: no-repeat;
                background-size: 23px 31px;

                ${breakpointsMap.TABLET} {
                  margin-right: 0;
                }

                ${breakpointsMap.DESKTOP} {
                  margin: 0;
                }
              `}
            >
              Работает без выходных
            </li>
          </ul>
        </SectionInner>
      </div>
      <SectionInner>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            padding-right: 5px;
            padding-left: 5px;

            ${breakpointsMap.DESKTOP} {
              flex-direction: row;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;

              ${breakpointsMap.DESKTOP} {
                margin-right: 69px;
              }
            `}
          >
            <h3
              css={css`
                margin: 0;
                margin-right: auto;
                margin-bottom: 10px;
                font-size: 16px;
                font-weight: 400;

                ${breakpointsMap.DESKTOP} {
                  display: flex;
                  align-items: center;
                  margin-bottom: 0;
                }
              `}
            >
              Лицензия
            </h3>
            <SliderControls />
            <div
              css={css`
                display: flex;
                width: 100%;
                justify-content: center;
                .reference__picture:nth-of-type(n + 2) {
                  display: none;
                }
                ${breakpointsMap.TABLET} {
                  .reference__picture:first-of-type {
                    margin-right: 40px;
                  }
                  .reference__picture:nth-of-type(n + 2) {
                    display: block;
                  }
                }
              `}
            >
              <Picture
                src="img/reference"
                containerClass="reference__picture"
              />
              <Picture
                src="img/reference"
                containerClass="reference__picture"
              />
            </div>
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              margin-bottom: 10px;
            `}
          >
            <h3
              css={css`
                margin: 0;
                margin-right: auto;
                margin-bottom: 10px;
                font-size: 16px;
                font-weight: 400;

                ${breakpointsMap.DESKTOP} {
                  display: flex;
                  align-items: center;
                  margin-bottom: 0;
                }
              `}
            >
              СЭЗ
            </h3>
            <SliderControls />
            <div
              css={css`
                display: flex;
                width: 100%;
                justify-content: center;
                .reference__picture:nth-of-type(n + 2) {
                  display: none;
                }
                ${breakpointsMap.TABLET} {
                  .reference__picture:first-of-type {
                    margin-right: 40px;
                  }
                  .reference__picture:nth-of-type(n + 2) {
                    display: block;
                  }
                }
              `}
            >
              <Picture
                src="img/reference"
                containerClass="reference__picture"
              />
              <Picture
                src="img/reference"
                containerClass="reference__picture"
              />
            </div>
          </div>
        </div>
        <div
          css={css`
            padding-right: 5px;
            padding-left: 5px;
          `}
        >
          <h3
            css={css`
              margin: 0;
              margin-right: auto;
              margin-bottom: 10px;
              font-size: 16px;
              font-weight: 400;
            `}
          >
            Отзывы
          </h3>
          <div
            css={css`
              ${breakpointsMap.DESKTOP} {
                display: flex;
              }
            `}
          >
            <div
              css={css`
                position: relative;
                padding-top: 35px;
                padding-bottom: 34px;
                margin-bottom: 31px;
                box-shadow: ${theme.colors.boxShadow};

                &:before {
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  display: block;
                  width: 100%;
                  height: 7px;
                  background-image: ${theme.colors.linearGradient};
                  content: '';
                }

                ${breakpointsMap.DESKTOP} {
                  width: 566px;
                  margin-right: auto;
                }
              `}
            >
              <div
                css={css`
                  padding-left: 33px;
                  margin-bottom: 13px;
                `}
              >
                {new Array(5).fill().map(() => (
                  <Star
                    fill="currentColor"
                    css={css`
                      color: #ddd;
                      cursor: pointer;

                      &:hover {
                        color: #ffab1a;
                      }
                    `}
                  />
                ))}
              </div>
              <div
                css={css`
                  padding-left: 53px;
                `}
              >
                Вопрос
              </div>
              <div
                css={css`
                  padding-top: 30px;
                  padding-left: 79px;
                  background-image: url('img/quotes.svg');
                  background-position: 50px 16px;

                  background-repeat: no-repeat;
                `}
              >
                Ответ
              </div>
            </div>
            <div
              css={css`
                position: relative;
                padding-top: 35px;
                padding-bottom: 34px;
                margin-bottom: 31px;
                box-shadow: ${theme.colors.boxShadow};

                &:before {
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  display: block;
                  width: 100%;
                  height: 7px;
                  background-image: ${theme.colors.linearGradient};
                  content: '';
                }

                ${breakpointsMap.DESKTOP} {
                  width: 566px;
                  margin-right: auto;
                }
              `}
            >
              <div
                css={css`
                  padding-left: 33px;
                  margin-bottom: 13px;
                `}
              >
                {new Array(5).fill().map(() => (
                  <Star
                    fill="currentColor"
                    css={css`
                      color: #ddd;
                      cursor: pointer;

                      &:hover {
                        color: #ffab1a;
                      }
                    `}
                  />
                ))}
              </div>
              <div
                css={css`
                  padding-left: 53px;
                `}
              >
                Вопрос
              </div>
              <div
                css={css`
                  padding-top: 30px;
                  padding-left: 79px;
                  background-image: url('img/quotes.svg');
                  background-position: 50px 16px;

                  background-repeat: no-repeat;
                `}
              >
                Ответ
              </div>
            </div>
          </div>
        </div>
      </SectionInner>
    </div>
  );
};

export default MedCenter;
