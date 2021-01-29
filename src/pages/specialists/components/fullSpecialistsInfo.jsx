import React from 'react';
import { ReactComponent as MapMark } from 'icons/map-mark-icon.svg';
import { useParams, useRouteMatch } from 'react-router-dom';
import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import { connect } from 'react-redux';
import mapStateToPropsGenerator from 'store/mapStateToProps';
import Components from 'constants/components';
import PropTypes from 'prop-types';
import { breakpointsMap } from 'src/constants/styles';
import { randomId } from 'src/components/utils/common';
import Ymap from 'src/components/footer/ymap';
import Specialist from './specialist';

const FullSpecialistInfo = ({ specialists }) => {
  const { specialistId } = useParams();
  const { path } = useRouteMatch();
  const theme = useTheme();
  const currSpecialist = specialists.find((el) => el.id === specialistId);

  const Tab = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;

    &:hover {
      background-image: ${theme.colors.linearGradient};
    }

    &:last-child {
      border-bottom: none;
    }

    ${breakpointsMap.TABLET} {
      flex-grow: 1;
      width: 245px;
      border-bottom: none;

      ${breakpointsMap.DESKTOP} {
        width: 245px;

        &:nth-of-type(2n) {
          border-left: 1px solid rgba(${theme.colors.colorText.rgb}, 0.2);
          border-right: 1px solid rgba(${theme.colors.colorText.rgb}, 0.2);
        }
      }
    }
  `;

  const TabLink = styled('a')`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 21px;
    padding-bottom: 22px;
    font-size: ${theme.fontSizes.altFs};
    line-height: ${theme.fontSizes.altLh};

    &:hover {
      color: ${theme.colors.altColorText};
    }
  `;

  const TabsContainer = styled.div`
    paddint-top: 30px;
  `;

  const TabList = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;
    padding: 0;
    margin-top: 0;
    box-shadow: ${theme.colors.boxShadow};

    ${breakpointsMap.TABLET} {
      flex-direction: row;
      flex-wrap: wrap;
    }

    ${breakpointsMap.DESKTOP} {
      flex-wrap: nowrap;
    }
  `;

  return (
    <>
      <h1 className="main__title">Специалист</h1>
      <div
        css={css`
          display: flex;
          margin-bottom: 37px;
        `}
      >
        <p
          css={css`
            margin-right: 64px;
            white-space: nowrap;
            font-size: 16px;
          `}
        >
          Врач принимает в{' '}
        </p>
        <ul
          css={css`
            list-style: none;
            display: flex;
            padding: 0;
            width: 100%;
          `}
        >
          {new Array(3).fill().map(() => (
            <li
              css={css`
                display: flex;
                align-items: center;
                padding: 0 43px;
                font-size: 16px;
                position: relative;

                &:nth-of-type(2n) {
                  border-left: 1px solid ${theme.colors.colorText.hex};
                  border-right: 1px solid ${theme.colors.colorText.hex};
                }
              `}
            >
              <MapMark
                css={css`
                  position: absolute;
                  top: 6px;
                  left: 20px;
                `}
              />
              г. Пермь, ул. Докучаева, 40А
            </li>
          ))}
        </ul>
      </div>
      <div
        css={css`
          margin-bottom: 37px;
          box-shadow: 1px 1px 22px 0 RGBA(74, 74, 74, 0.2);
        `}
      >
        <Specialist data={currSpecialist} />
        <TabsContainer>
          <TabList>
            <Tab key={randomId()}>
              <TabLink>Стоимость услуг </TabLink>
            </Tab>
            <Tab key={randomId()}>
              <TabLink>Гинеколог</TabLink>
            </Tab>
            <Tab key={randomId()}>
              <TabLink>УЗИ</TabLink>
            </Tab>
            <Tab key={randomId()}>
              <TabLink>г.Пермь ул. Малая Филевская д. 35, оф. 305</TabLink>
            </Tab>
          </TabList>
        </TabsContainer>
        <div
          css={css`
            display: flex;
            padding-right: 25px;
          `}
        >
          <div
            css={css`
              margin-right: auto;
              padding-left: 44px;
            `}
          >
            <ul
              css={css`
                list-style: none;
                padding: 0;
                margin: 0;
              `}
            >
              <li
                className="tab"
                css={css`
                  ${breakpointsMap.DESKTOP} {
                    margin-bottom: 12px;
                    background-color: ${theme.colors.white};
                    border-radius: 4px;
                    box-shadow: ${theme.colors.boxShadow};
                    padding-top: 0;
                    width: 644px;
                    padding-left: 0;

                    &:last-of-type {
                      padding-left: 0;
                    }

                    .tab__title {
                      position: relative;
                      display: flex;
                      width: 100%;
                      height: 100%;
                      padding: 35px 24px;
                      min-height: 36px;
                      align-items: center;
                      padding-left: 11px;
                      border-radius: 4px;
                      font-size: 16px;
                      font-weight: 400;
                      justify-content: flex-end;

                      &::after {
                        position: absolute;
                        top: 11px;
                        right: 13px;
                        width: 9px;
                        height: 9px;
                        border: 1px solid $color-text;
                        border-top: 0;
                        border-left: 0;
                        background-color: transparent;
                        content: '';
                        transform: rotate(45deg);
                        transition: transform 0.35s ease-in-out;
                      }
                    }

                    .tab__content {
                      position: relative;
                      max-height: 1px;
                      padding: 0;
                      padding-left: 2px;
                      font-weight: 300;
                      letter-spacing: -1px;
                      overflow-y: hidden;
                      transition: max-height 350ms ease-in-out;
                    }

                    .tab__content-title {
                      margin-bottom: 8px;
                      font-weight: 300;
                    }

                    .tab__checkbox {
                      display: none;

                      &:checked + .tab__title {
                        background-image: linear-gradient(
                          to right,
                          #ff00eb,
                          #2bd7ff
                        );
                        color: ${theme.colors.white};

                        &::after {
                          top: 15px;
                          border-color: ${theme.colors.white};
                          transform: rotate(-135deg);
                        }
                      }

                      &:checked ~ .tab__content {
                        max-height: 350px;
                        transition: max-height 500ms ease-in-out;
                      }
                    }

                    .tab__list {
                      padding: 0;
                      letter-spacing: 0;
                      list-style: none;
                    }

                    .tab__list-item {
                      margin-bottom: 11px;
                    }
                  }
                `}
              >
                <input
                  className="tab__checkbox"
                  type="checkbox"
                  id="tab-analyse"
                  name="tab-group"
                  onChange={() => console.log('hi')}
                />
                <label htmlFor="tab-analyse" className="tab__title">
                  Прием врача акушера-гинеколога лечебно-диагностический
                  <span
                    css={css`
                      font-size: 26px;
                      margin-left: auto;
                    `}
                  >
                    1 100 ₽
                  </span>
                </label>
                <div className="tab__content">
                  <h3 className="tab__content-title">
                    Врач акушер-гинеколог и специалист ультразвуковой
                    диагностики. Эксперт о планированию беременности, ведению
                    беременности и родов, ведению пациенток в послеродовой
                    период, по диагностике и лечению причин невынашивания
                    беременности.
                  </h3>
                </div>
              </li>
              <li
                className="tab"
                css={css`
                  ${breakpointsMap.DESKTOP} {
                    margin-bottom: 12px;
                    background-color: ${theme.colors.white};
                    border-radius: 4px;
                    box-shadow: ${theme.colors.boxShadow};
                    padding-top: 0;
                    width: 644px;

                    &:last-of-type {
                      padding-left: 0;
                    }

                    .tab__title {
                      position: relative;
                      display: flex;
                      width: 100%;
                      height: 100%;
                      padding: 35px 24px;
                      min-height: 36px;
                      align-items: center;
                      padding-left: 11px;
                      border-radius: 4px;
                      font-size: 16px;
                      font-weight: 400;

                      &::after {
                        position: absolute;
                        top: 11px;
                        right: 13px;
                        width: 9px;
                        height: 9px;
                        border: 1px solid $color-text;
                        border-top: 0;
                        border-left: 0;
                        background-color: transparent;
                        content: '';
                        transform: rotate(45deg);
                        transition: transform 0.35s ease-in-out;
                      }
                    }

                    .tab__content {
                      position: relative;
                      max-height: 1px;
                      padding: 0;
                      padding-left: 2px;
                      font-weight: 300;
                      letter-spacing: -1px;
                      overflow-y: hidden;
                      transition: max-height 350ms ease-in-out;
                    }

                    .tab__content-title {
                      margin-bottom: 8px;
                      font-weight: 300;
                    }

                    .tab__checkbox {
                      display: none;

                      &:checked + .tab__title {
                        background-image: linear-gradient(
                          to right,
                          #ff00eb,
                          #2bd7ff
                        );
                        color: ${theme.colors.white};

                        &::after {
                          top: 15px;
                          border-color: ${theme.colors.white};
                          transform: rotate(-135deg);
                        }
                      }

                      &:checked ~ .tab__content {
                        max-height: 350px;
                        transition: max-height 500ms ease-in-out;
                      }
                    }

                    .tab__list {
                      padding: 0;
                      letter-spacing: 0;
                      list-style: none;
                    }

                    .tab__list-item {
                      margin-bottom: 11px;
                    }
                  }
                `}
              >
                <input
                  className="tab__checkbox"
                  type="checkbox"
                  id="tab-2"
                  name="tab-group"
                  onChange={() => console.log('hi')}
                />
                <label htmlFor="tab-2" className="tab__title">
                  Отзывы
                </label>
                <div className="tab__content">
                  <ul
                    css={css`
                      list-style: none;
                      padding: 0;
                    `}
                  >
                    <li
                      css={css`
                        position: relative;
                        padding-top: 35px;
                        padding-bottom: 15px;
                        &:not(:last-of-type):before {
                          position: absolute;
                          content: '';
                          display: block;
                          width: 100%;
                          height: 7px;
                          bottom: 0;
                          left: 0;
                          background-image: ${theme.colors.linearGradient};
                        }
                      `}
                    >
                      <div
                        css={css`
                          padding-left: 33px;
                        `}
                      >
                        Вопрос
                      </div>
                      <div
                        css={css`
                          padding-left: 55px;
                        `}
                      >
                        Ответ
                      </div>
                    </li>
                    <li
                      css={css`
                        position: relative;
                        padding-top: 35px;
                        padding-bottom: 15px;
                        &:not(:last-of-type):before {
                          position: absolute;
                          content: '';
                          display: block;
                          width: 100%;
                          height: 7px;
                          bottom: 0;
                          left: 0;
                          background-image: ${theme.colors.linearGradient};
                        }
                      `}
                    >
                      <div
                        css={css`
                          padding-left: 33px;
                        `}
                      >
                        Вопрос
                      </div>
                      <div
                        css={css`
                          padding-left: 55px;
                        `}
                      >
                        Ответ
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              box-shadow: 1px 1px 22px 0 RGBA(74, 74, 74, 0.2);
              width: 424px;
            `}
          >
            <div
              css={css`
                margin-bottom: 38px;
                width: 100%;
                height: 384px;
              `}
            >
              <Ymap />
            </div>
            <div
              css={css`
                display: flex;
                padding-right: 20px;
                padding-left: 20px;
                margin-bottom: 17px;
              `}
            >
              <button
                type="button"
                className="button"
                css={css`
                  width: 185px;
                  padding: 12px 0 14px 0;
                  display: flex;
                  justify-content: center;
                  margin-right: auto;
                  font-weight: 400;
                  text-transform: none;
                `}
              >
                Показать на карте
              </button>
              <button
                type="button"
                className="button"
                css={css`
                  width: 185px;
                  padding: 12px 0 14px 0;
                  display: flex;
                  justify-content: center;
                  margin-right: auto;
                  font-weight: 400;
                  text-transform: none;
                `}
              >
                Панорама
              </button>
            </div>
            <div
              css={css`
                display: flex;
                padding-left: 20px;
                padding-right: 20px;
                margin-bottom: 14px;
              `}
            >
              <div
                css={css`
                  width: 50%;
                  position: relative;
                  padding-left: 31px;
                  &:before {
                    position: absolute;
                    content: '';
                    display: block;
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background-image: ${theme.colors.linearGradient};
                    top: -7px;
                    left: 0;
                  }

                  &:after {
                    position: absolute;
                    content: url('img/walker.svg');
                    display: block;
                    width: 9px;
                    height: 15.5px;
                    top: 0px;
                    left: 9px;
                  }
                `}
              >
                <span
                  css={css`
                    border-bottom: 1px solid ${theme.colors.blue};
                  `}
                >
                  Пешком
                </span>
              </div>
              <div
                css={css`
                  width: 50%;
                  position: relative;
                  padding-left: 31px;

                  &:before {
                    position: absolute;
                    content: '';
                    display: block;
                    width: 28px;
                    height: 28px;
                    background-image: ${theme.colors.linearGradient};
                    border-radius: 50%;
                    top: -7px;
                    left: 0;
                  }

                  &:after {
                    position: absolute;
                    content: url('img/car.svg');
                    display: block;
                    width: 9px;
                    height: 15.5px;
                    top: -2px;
                    left: 5px;
                  }
                `}
              >
                <span
                  css={css`
                    border-bottom: 1px solid ${theme.colors.blue};
                  `}
                >
                  На машине
                </span>
              </div>
            </div>
            <p
              css={css`
                padding-left: 50px;
                position: relative;
                margin-bottom: 35px;

                &:after {
                  position: absolute;
                  top: 0;
                  left: 20px;
                  border: 1px solid ${theme.colors.colorText.hex};
                  border-width: 0 3px 3px 0;
                  border-radius: 2px;
                  content: '';
                  transform: rotate(45deg);
                  content: '';
                  width: 10px;
                  height: 15px;
                }
              `}
            >
              Въезд со стороны ул. Малая Филёвская
              <br /> Парковка с торца дома
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

FullSpecialistInfo.propTypes = {
  specialists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToPropsGenerator(Components.SPECIALISTS),
  null,
)(FullSpecialistInfo);
