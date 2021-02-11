import React from 'react';
import Specialist from 'src/pages/specialists/components/specialist';
import { connect } from 'react-redux';
import Components from 'constants/components';
import mapStateToPropsGenerator from 'store/mapStateToProps';
import PropTypes from 'prop-types';
import Discounts from 'common/discounts';
import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'src/constants/styles';

const Speciality = ({ specialists }) => {
  const theme = useTheme();
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
          }
        `}
      >
        <div>
          <h2 className="main__title">Эндокринолог</h2>
          <div
            css={css`
              padding-right: 10px;
              padding-left: 10px;

              ${breakpointsMap.TABLET} {
                padding: 0;
              }
            `}
          >
            <h3
              css={css`
                margin-bottom: 35px;
                font-size: 16px;
                font-weight: 500;
              `}
            >
              Описание
            </h3>
            <p
              css={css`
                font-size: 13px;
              `}
            >
              <span
                css={css`
                  font-weight: bold;
                `}
              >
                Эндокринолог
              </span>{' '}
              – врач узкого профиля, который специализируется на диагностике,
              лечении и профилактике патологий эндокринной системы. Эндокринная
              система включает в себя щитовидную и паращитовидную железы,
              гипофиз, надпочечники, поджелудочную железу, шишкодвидное тело,
              яичники.
            </p>
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
                Сахарный диабет
              </li>
            </ul>
            <div>
              <h3
                css={css`
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Цены
              </h3>
              <div
                css={css`
                  display: flex;
                  margin-bottom: 44px;
                `}
              >
                <a
                  href="/"
                  type="button"
                  css={css`
                    position: relative;
                    display: block;
                    width: 103px;
                    padding-bottom: 5px;
                    margin-right: 70px;
                    background-color: transparent;
                    color: ${theme.colors.blue};
                    text-align: left;

                    &:hover,
                    &:active {
                      color: ${theme.colors.blue};
                    }

                    &:before {
                      position: absolute;
                      bottom: 0;
                      display: block;
                      width: 100%;
                      height: 4px;
                      background-image: ${theme.colors.linearGradient};
                      content: '';
                    }
                  `}
                >
                  Эндокринология
                  <br /> - врачебные
                  <br />
                  приемы
                </a>
                <a
                  href="/"
                  type="button"
                  css={css`
                    position: relative;
                    display: block;
                    width: 103px;
                    padding-bottom: 5px;
                    background-color: transparent;
                    text-align: left;

                    &:hover,
                    &:active {
                      color: ${theme.colors.colorText.hex};
                    }

                    &:before {
                      position: absolute;
                      bottom: 0;
                      display: block;
                      width: 100%;
                      height: 4px;
                      background-color: ${theme.colors.inactiveColor};
                      content: '';
                    }
                  `}
                >
                  Приемы
                  <br />
                  специалистов
                  <br />
                  дополнительные
                </a>
              </div>
              <table
                css={css`
                  display: flex;
                  flex-direction: column;
                  padding-top: 25px;
                  border-top: 1px dashed ${theme.colors.colorText.hex};
                `}
              >
                <thead
                  css={css`
                    display: none;

                    ${breakpointsMap.DESKTOP} {
                      display: block;
                      padding: 0 17px;
                      padding-bottom: 24px;
                    }
                  `}
                >
                  <tr
                    css={css`
                      display: flex;
                    `}
                  >
                    <th
                      css={css`
                        margin-right: 17px;
                        margin-right: 52px;
                        font-size: 12px;
                        font-weight: 400;
                      `}
                    >
                      Код
                    </th>
                    <th
                      css={css`
                        margin-right: 203px;
                        font-size: 12px;
                        font-weight: 400;
                      `}
                    >
                      Номенклатура
                    </th>
                    <th
                      css={css`
                        margin-right: 114px;
                        font-size: 12px;
                        font-weight: 400;
                      `}
                    >
                      Цена
                    </th>
                    <th
                      css={css`
                        margin-right: 0;
                        font-size: 12px;
                        font-weight: 400;
                      `}
                    >
                      Запись
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    css={css`
                      position: relative;
                      display: flex;
                      flex-direction: column;
                      padding: 13px 17px;
                      margin-bottom: 10px;
                      box-shadow: ${theme.colors.boxShadow};

                      @media (min-width: 465px) {
                        flex-direction: row;
                        flex-wrap: wrap;
                      }

                      ${breakpointsMap.TABLET} {
                        padding-top: 28px;
                        padding-bottom: 28px;
                      }
                    `}
                  >
                    <td
                      css={css`
                        display: flex;
                        width: 100%;
                        align-items: center;
                        margin-bottom: 10px;

                        ${breakpointsMap.TABLET} {
                          width: auto;
                          margin-right: 40px;
                          margin-bottom: 0;
                        }
                      `}
                    >
                      18.110
                    </td>
                    <td
                      css={css`
                        width: 100%;
                        margin-bottom: 10px;
                        font-size: 16px;
                        font-weight: 500;

                        @media (min-width: 465px) {
                          display: flex;
                          width: auto;
                          align-items: center;
                          margin: 0;
                          margin-right: auto;
                        }

                        ${breakpointsMap.TABLET} {
                          margin-right: 55px;
                        }
                      `}
                    >
                      Первичный прием терапевта
                    </td>
                    <td
                      css={css`
                        display: flex;
                        align-items: center;
                      `}
                    >
                      <span
                        css={css`
                          margin-right: 10px;
                          font-size: 26px;
                          font-weight: 500;

                          ${breakpointsMap.TABLET} {
                            margin-right: 59px;
                          }
                        `}
                      >
                        1 100 ₽
                      </span>
                      <button
                        type="button"
                        className="button"
                        css={css`
                          padding-top: 18px;
                          padding-bottom: 18px;
                          border: none;
                          border-radius: 4px;
                          width: 176px;
                        `}
                      >
                        Записаться
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          css={css`
            ${breakpointsMap.DESKTOP} {
              margin-left: 100px;
            }
          `}
        >
          <Discounts isColumn />
        </div>
      </div>
      <div>
        <h3
          css={css`
            font-weight: 500;
            margin-right: 30px;
          `}
        >
          Врачи эндокринологи в Перми
        </h3>
        <div
          css={css`
            box-shadow: ${theme.colors.boxShadow};
            width: 100%;
            margin-bottom: 46px;
          `}
        >
          <Specialist data={specialists[0]} />
        </div>
      </div>
      <div>
        <div
          css={css`
            padding-right: 10px;
            padding-left: 10px;

            ${breakpointsMap.DESKTOP} {
              padding-left: 0;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              margin-bottom: 44px;

              ${breakpointsMap.TABLET} {
                justify-content: flex-start;
              }
            `}
          >
            <a
              href="/"
              type="button"
              css={css`
                position: relative;
                display: block;
                width: 103px;
                padding-bottom: 5px;
                margin-right: 70px;
                background-color: transparent;
                color: ${theme.colors.blue};
                text-align: left;

                &:hover,
                &:active {
                  color: ${theme.colors.blue};
                }

                &:before {
                  position: absolute;
                  bottom: 0;
                  display: block;
                  width: 100%;
                  height: 4px;
                  background-image: ${theme.colors.linearGradient};
                  content: '';
                }
              `}
            >
              Заболевания
              <br /> - щитовидной
              <br />
              железы
            </a>
            <a
              href="/"
              type="button"
              css={css`
                position: relative;
                display: block;
                width: 103px;
                padding-bottom: 5px;
                background-color: transparent;
                text-align: left;

                &:hover,
                &:active {
                  color: ${theme.colors.colorText.hex};
                }

                &:before {
                  position: absolute;
                  bottom: 0;
                  display: block;
                  width: 100%;
                  height: 4px;
                  background-color: ${theme.colors.inactiveColor};
                  content: '';
                }
              `}
            >
              Патологии
              <br />
              надпочечников
            </a>
          </div>
          <div>
            <ul
              css={css`
                padding: 0;
                list-style: none;
              `}
            >
              <li
                css={css`
                  padding-top: 16.5px;
                  padding-bottom: 16.5px;
                  border-top: 1px dashed
                    rgba(${theme.colors.colorText.rgb}, 0.6);
                  border-bottom: 1px dashed
                    rgba(${theme.colors.colorText.rgb}, 0.6);
                `}
              >
                <a
                  href="/"
                  css={css`
                    font-size: 12px;
                    text-decoration: underline;
                    &:hover,
                    &:active {
                      color: ${theme.colors.colorText.hex};
                    }
                  `}
                >
                  Узловой зоб щитовдной железы
                </a>
              </li>
              <li
                css={css`
                  padding-top: 16.5px;
                  padding-bottom: 16.5px;
                  border-bottom: 1px dashed
                    rgba(${theme.colors.colorText.rgb}, 0.6);
                `}
              >
                <a
                  href="/"
                  css={css`
                    font-size: 12px;
                    text-decoration: underline;
                    &:hover,
                    &:active {
                      color: ${theme.colors.colorText.hex};
                    }
                  `}
                >
                  Узловой зоб щитовдной образование желез
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

Speciality.propTypes = {
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
)(Speciality);
