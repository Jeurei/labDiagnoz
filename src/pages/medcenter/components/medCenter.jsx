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
            margin-bottom: 31px;
            padding-left: 5px;
            padding-right: 5px;
          `}
        >
          <span
            css={css`
              padding-left: 13px;
              margin-right: 60px;
              position: relative;
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
              padding-left: 16px;
              position: relative;
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
            padding-left: 10px;
            padding-right: 10px;
          `}
        >
          <h3
            css={css`
              font-weight: 500;
              font-size: 16px;
              margin-top: 0;
              margin-bottom: 35px;
            `}
          >
            Описание
          </h3>
          <p
            css={css`
              margin: 0;
              font-size: 13px;
              line-height: 22px;
              margin-bottom: 20.5px;
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
              padding-top: 3.5px;
              display: flex;
              flex-direction: column;

              ${breakpointsMap.DESKTOP} {
                margin-right: auto;
                width: 570px;
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
                  background-color: ${theme.colors.blue};
                  color: ${theme.colors.white};
                  font-weight: 400;
                  width: 100%;
                  border-radius: 4px;
                  text-align: left;
                  margin-right: 8px;
                  padding: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin: 0;
                  margin-bottom: 8px;
                `}
              >
                График приёма пациентов
              </h3>
              <div>
                <h4
                  css={css`
                    margin: 0;
                    font-weight: 500;
                    font-size: 16px;
                    text-align: center;
                    vertical-align: center;
                    border-radius: 4px;
                    width: 100%;
                    padding: 10px;
                    background-color: #f7f7f7;
                  `}
                >
                  Взятие крови
                </h4>
                <ul
                  css={css`
                    list-style: none;
                    padding: 0;
                    display: flex;
                    justify-content: space-between;
                    padding-left: 5px;
                    padding-right: 5px;
                  `}
                >
                  <li
                    css={css`
                      padding: 10px;
                      border-radius: 4px;
                      background-color: ${theme.colors.colorText.hex};
                      color: ${theme.colors.white};
                      width: 95px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    ПН-ПТ
                  </li>
                  <li
                    css={css`
                      padding: 10px;
                      border-radius: 4px;
                      background-color: ${theme.colors.colorText.hex};
                      color: ${theme.colors.white};
                      width: 95px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    СБ
                  </li>
                  <li
                    css={css`
                      padding: 10px;
                      border-radius: 4px;
                      background-color: ${theme.colors.colorText.hex};
                      color: ${theme.colors.white};
                      width: 95px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    ВС
                  </li>
                </ul>
                <ul
                  css={css`
                    list-style: none;
                    padding: 0;
                    display: flex;
                    justify-content: space-between;
                    padding-left: 5px;
                    padding-right: 5px;
                  `}
                >
                  <li
                    css={css`
                      padding: 10px 0;
                      border-radius: 4px;
                      background-color: #f7f7f7;
                      color: ${theme.colors.colorText.hex};
                      width: 95px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    07:00 - 19:00
                  </li>
                  <li
                    css={css`
                      padding: 10px 0;
                      border-radius: 4px;
                      background-color: #f7f7f7;
                      color: ${theme.colors.colorText.hex};
                      width: 95px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    07:00 - 19:00
                  </li>
                  <li
                    css={css`
                      padding: 10px 0;
                      border-radius: 4px;
                      background-color: #f7f7f7;
                      color: ${theme.colors.colorText.hex};
                      width: 95px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    07:00 - 19:00
                  </li>
                </ul>
              </div>
            </div>
            <table
              css={css`
                width: 100%;
                margin-bottom: 10px;
                display: none;

                ${breakpointsMap.TABLET} {
                  display: table;
                }
              `}
            >
              <thead>
                <tr
                  css={css`
                    display: flex;
                    margin-bottom: 6px;
                    padding-left: 5px;
                    padding-right: 5px;

                    ${breakpointsMap.DESKTOP} {
                      padding: 0;
                    }
                  `}
                >
                  <th
                    css={css`
                      background-color: ${theme.colors.blue};
                      color: ${theme.colors.white};
                      font-weight: 400;
                      width: 160px;
                      border-radius: 4px;
                      text-align: left;
                      margin-right: 8px;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      display: flex;
                      align-items: center;
                      flex-grow: 1;
                      padding-left: 26px;

                      ${breakpointsMap.DESKTOP} {
                        width: 263px;
                      }
                    `}
                  >
                    График приёма пациентов
                  </th>
                  <th
                    css={css`
                      background-color: ${theme.colors.colorText.hex};
                      color: ${theme.colors.white};
                      font-weight: 400;
                      border-radius: 4px;
                      width: 75px;
                      margin-right: 8px;
                      vertical-align: center;
                      display: flex;
                      align-items: center;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      justify-content: center;
                      flex-grow: 0.5;
                      ${breakpointsMap.DESKTOP} {
                        width: 90px;
                      }
                    `}
                  >
                    ПН-ПТ
                  </th>
                  <th
                    css={css`
                      background-color: ${theme.colors.colorText.hex};
                      color: ${theme.colors.white};
                      font-weight: 400;
                      border-radius: 4px;
                      width: 75px;
                      margin-right: 8px;
                      display: flex;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      align-items: center;
                      justify-content: center;
                      flex-grow: 0.5;

                      ${breakpointsMap.DESKTOP} {
                        width: 90px;
                      }
                    `}
                  >
                    СБ
                  </th>
                  <th
                    css={css`
                      background-color: ${theme.colors.colorText.hex};
                      color: ${theme.colors.white};
                      font-weight: 400;
                      border-radius: 4px;
                      width: 75px;
                      display: flex;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      align-items: center;
                      justify-content: center;
                      flex-grow: 0.5;

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
                    margin-bottom: 6px;
                    padding-left: 5px;
                    padding-right: 5px;

                    ${breakpointsMap.DESKTOP} {
                      padding: 0;
                    }
                  `}
                >
                  <td
                    css={css`
                      background-color: #f7f7f7;
                      color: ${theme.colors.colorText.hex};
                      font-weight: 500;
                      width: 160px;
                      border-radius: 4px;
                      text-align: left;
                      margin-right: 8px;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      display: flex;
                      align-items: center;
                      flex-grow: 1;
                      padding-left: 26px;

                      ${breakpointsMap.DESKTOP} {
                        width: 263px;
                      }
                    `}
                  >
                    Взятие крови
                  </td>
                  <td
                    css={css`
                      background-color: #f7f7f7;
                      color: ${theme.colors.colorText.hex};
                      font-weight: 400;
                      border-radius: 4px;
                      width: 75px;
                      margin-right: 8px;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      vertical-align: center;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      flex-grow: 0.5;
                      ${breakpointsMap.DESKTOP} {
                        width: 90px;
                      }
                    `}
                  >
                    07:00 - 19:00{' '}
                  </td>
                  <td
                    css={css`
                      background-color: #f7f7f7;
                      color: ${theme.colors.colorText.hex};
                      font-weight: 400;
                      border-radius: 4px;
                      width: 75px;
                      margin-right: 8px;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      flex-grow: 0.5;

                      ${breakpointsMap.DESKTOP} {
                        width: 90px;
                      }
                    `}
                  >
                    07:00 - 19:00
                  </td>
                  <td
                    css={css`
                      background-color: #f7f7f7;
                      color: ${theme.colors.colorText.hex};
                      font-weight: 400;
                      border-radius: 4px;
                      width: 75px;
                      padding-top: 13px;
                      padding-bottom: 15px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      flex-grow: 0.5;

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
                padding-left: 35px;
                padding-bottom: 42px;
                padding-right: 35px;
                color: ${theme.colors.white};
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
                  padding-left: 24px;
                  padding-right: 24px;
                }
              `}
            >
              <legend
                css={css`
                  font-size: 22px;
                  text-align: center;
                  margin-bottom: 25px;
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
                    flex-grow: 1;
                    padding-top: 9px;
                    padding-bottom: 11px;
                    padding-left: 14px;
                    appearance: none;
                    border: none;
                    height: 37px;
                    margin-bottom: 15px;
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
                    flex-grow: 1;
                    padding-top: 9px;
                    padding-bottom: 11px;
                    padding-left: 14px;
                    appearance: none;
                    border: none;
                    height: 37px;
                    margin-bottom: 15px;
                    color: ${theme.colors.colorText.hex};
                  `}
                />
              </div>
              <div
                css={css`
                  display: flex;
                  margin-bottom: 15px;
                  flex-direction: column;

                  ${breakpointsMap.TABLET} {
                    flex-direction: row;
                  }
                `}
              >
                <input
                  type="text"
                  placeholder="Телефон *"
                  css={css`
                    flex-grow: 1;
                    padding-top: 9px;
                    padding-bottom: 11px;
                    padding-left: 14px;
                    appearance: none;
                    border: none;
                    min-width: 221px;
                    height: 37px;
                    margin-bottom: 15px;
                    color: ${theme.colors.colorText.hex};

                    ${breakpointsMap.TABLET} {
                      margin-right: 26px;
                      width: 312px;
                      flex-grow: 0;
                    }

                    ${breakpointsMap.DESKTOP} {
                      width: 263px;
                      margin-right: 15px;
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
            </form>
          </div>
        </div>
        <div
          css={css`
            padding-top: 37px;
            padding-left: 5px;
            padding-right: 5px;
          `}
        >
          <h3
            css={css`
              font-weight: 400;
              font-size: 16px;
              margin: 0;
              margin-bottom: 38px;
            `}
          >
            Выбор специалсита
          </h3>
          <PositionsCatalog />
        </div>
        <div
          css={css`
            padding-top: 37px;
            padding-left: 5px;
            padding-right: 5px;
            display: flex;
            flex-direction: column;

            ${breakpointsMap.TABLET} {
              flex-direction: row;
              flex-wrap: wrap;
            }
          `}
        >
          <h3
            css={css`
              font-weight: 500;
              font-size: 16px;
              margin: 0;
              margin-bottom: 38px;
              width: 100%;
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
              padding-bottom: 39px;
              box-shadow: ${theme.colors.boxShadow};
              align-self: center;
              margin-bottom: 29px;

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
              padding-bottom: 39px;
              box-shadow: ${theme.colors.boxShadow};
              align-self: center;
              margin-bottom: 29px;

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
              padding-bottom: 39px;
              box-shadow: ${theme.colors.boxShadow};
              align-self: center;
              margin-bottom: 29px;

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
              padding-bottom: 39px;
              box-shadow: ${theme.colors.boxShadow};
              align-self: center;
              margin-bottom: 29px;
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
          background-image: ${theme.colors.linearGradient};
          padding-top: 20.5px;
          padding-bottom: 23px;
          margin-bottom: 38px;
        `}
      >
        <SectionInner>
          <ul
            css={css`
              padding: 0;
              list-style: none;
              display: flex;
              color: ${theme.colors.white};
              padding-left: 10px;
              padding-right: 10px;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: center;
              align-items: space-between;

              ${breakpointsMap.TABLET} {
                flex-wrap: nowrap;
              }

              ${breakpointsMap.DESKTOP} {
                justify-content: space-between;
                margin: 0;
                padding-left: 20px;
                padding-right: 20px;
              }
            `}
          >
            <li
              css={css`
                padding-left: 30px;
                background-repeat: no-repeat;
                background-image: url('img/doctor-white.svg');
                background-position: left center;
                background-size: 23px 31px;
                display: flex;
                align-items: center;
                min-height: 31px;
                margin-right: 10px;
                margin-bottom: 10px;

                ${breakpointsMap.DESKTOP} {
                  margin: 0;
                }
              `}
            >
              Работает без выходных
            </li>
            <li
              css={css`
                padding-left: 30px;
                background-repeat: no-repeat;
                background-image: url('img/doctor-white.svg');
                background-position: left center;
                background-size: 23px 31px;
                display: flex;
                align-items: center;
                min-height: 31px;
                margin-right: 10px;
                margin-bottom: 10px;

                ${breakpointsMap.DESKTOP} {
                  margin: 0;
                }
              `}
            >
              Работает без выходных
            </li>
            <li
              css={css`
                padding-left: 30px;
                background-repeat: no-repeat;
                background-image: url('img/doctor-white.svg');
                background-position: left center;
                background-size: 23px 31px;
                display: flex;
                align-items: center;
                min-height: 31px;
                margin-right: 10px;
                margin-bottom: 10px;

                ${breakpointsMap.DESKTOP} {
                  margin: 0;
                }
              `}
            >
              Работает без выходных
            </li>
            <li
              css={css`
                padding-left: 30px;
                background-repeat: no-repeat;
                background-image: url('img/doctor-white.svg');
                background-position: left center;
                background-size: 23px 31px;
                min-height: 31px;
                display: flex;
                align-items: center;
                min-height: 31px;
                margin-right: 10px;
                margin-bottom: 10px;

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
            padding-left: 5px;
            padding-right: 5px;

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
                font-weight: 400;
                font-size: 16px;
                margin: 0;
                margin-right: auto;
                margin-bottom: 10px;

                ${breakpointsMap.DESKTOP} {
                  margin-bottom: 0;
                  display: flex;
                  align-items: center;
                }
              `}
            >
              Лицензия
            </h3>
            <SliderControls />
            <div
              css={css`
                display: flex;
                justify-content: center;
                width: 100%;
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
                font-weight: 400;
                font-size: 16px;
                margin: 0;
                margin-right: auto;
                margin-bottom: 10px;

                ${breakpointsMap.DESKTOP} {
                  margin-bottom: 0;
                  display: flex;
                  align-items: center;
                }
              `}
            >
              СЭЗ
            </h3>
            <SliderControls />
            <div
              css={css`
                display: flex;
                justify-content: center;
                width: 100%;
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
            padding-left: 5px;
            padding-right: 5px;
          `}
        >
          <h3
            css={css`
              font-weight: 400;
              font-size: 16px;
              margin: 0;
              margin-right: auto;
              margin-bottom: 10px;
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
                box-shadow: ${theme.colors.boxShadow};
                margin-bottom: 31px;

                &:before {
                  position: absolute;
                  content: '';
                  display: block;
                  width: 100%;
                  height: 7px;
                  bottom: 0;
                  left: 0;
                  background-image: ${theme.colors.linearGradient};
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
                      cursor: pointer;
                      color: #ddd;

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
                  padding-left: 79px;
                  padding-top: 30px;

                  background-repeat: no-repeat;
                  background-image: url('img/quotes.svg');
                  background-position: 50px 16px;
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
                box-shadow: ${theme.colors.boxShadow};
                margin-bottom: 31px;

                &:before {
                  position: absolute;
                  content: '';
                  display: block;
                  width: 100%;
                  height: 7px;
                  bottom: 0;
                  left: 0;
                  background-image: ${theme.colors.linearGradient};
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
                      cursor: pointer;
                      color: #ddd;

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
                  padding-left: 79px;
                  padding-top: 30px;

                  background-repeat: no-repeat;
                  background-image: url('img/quotes.svg');
                  background-position: 50px 16px;
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
