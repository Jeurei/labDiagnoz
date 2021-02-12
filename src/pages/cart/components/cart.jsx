import React from 'react';
import { ReactComponent as SearchIcon } from 'icons/search-icon.svg';
import { css, useTheme, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { breakpointsMap } from 'src/constants/styles';
import FormIosCheckbox from 'src/components/common/form-ios-checkbox';
import { ReactComponent as FileIcon } from 'icons/file.svg';
import { ReactComponent as LinkIcon } from 'icons/link.svg';
import CrossButton from 'common/crossButton';
import { ReactComponent as CartIcon } from 'icons/cart-icon.svg';

const spanHint = (text, delta = 0) => {
  const theme = useTheme();
  const showingAimation = keyframes`
    0%{
      opacity: 0;
    }

    100%{
      opacity: 1;
    }
  `;
  return (
    <span
      css={css`
        position: absolute;
        top: -2px;
        right: 0;
        display: flex;
        width: 18px;
        height: 18px;
        align-items: center;
        justify-content: center;
        background-color: #8978f7;
        border-radius: 50%;
        color: ${theme.colors.white};
        cursor: pointer;
        font-size: 11px;

        &:hover:after {
          position: absolute;
          z-index: 10;
          top: calc(-100% - ${delta}px);
          display: flex;
          width: 207px;
          align-items: center;
          justify-content: center;
          padding: 4px 0 6px 0;
          animation: ${showingAimation} 0.3s forwards ease-in-out;
          background-color: ${theme.colors.blue};
          border-radius: 4px;
          color: ${theme.colors.white};
          content: '${text}';
          font-size: 11px;
          text-align: center;
          text-transform: none;
        }

        &:hover:before {
          position: absolute;
          z-index: 1;
          top: -9px;
          display: flex;
          width: 8px;
          height: 8px;
          animation: ${showingAimation} 0.3s forwards ease-in-out;
          background-color: ${theme.colors.blue};
          content: '';
          transform: rotate(45deg);
        }
      `}
    >
      !
    </span>
  );
};

const Cart = () => {
  const theme = useTheme();
  const showingAimation = keyframes`
    0%{
      opacity: 0;
    }

    100%{
      opacity: 1;
    }
  `;
  const DashedContainer = styled.div`
    position: relative;
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 5px;
    border-bottom: 1px dashed ${theme.colors.colorText.hex};

    &:first-of-type {
      padding-top: 0;
    }

    &:last-of-type {
      border-bottom: none;
    }

    ${breakpointsMap.DESKTOP} {
      padding-top: 22px;
      padding-bottom: 22px;
    }
  `;
  const TextContainer = styled('p')`
    margin: 0;
  `;

  const SpanContainer = styled('span')`
    font-size: 14px;
  `;

  return (
    <>
      <h2 className="main__title">Корзина</h2>
      <section>
        <div
          className="search__container-input-group"
          css={css`
            position: relative;
          `}
        >
          <SearchIcon
            width="25px"
            height="25px"
            fill="none"
            stroke="currentColor"
            css={css`
              position: absolute;
              top: 16px;
              left: 16px;
              color: #000;
            `}
          />
          <input
            type="text"
            className="search__input"
            placeholder="Введите название анализа"
            aria-label="Введите что хотите найти"
            aria-describedby="search-descr"
            css={css`
              padding-left: 44px;
              border: 1px solid ${theme.colors.blue};
              &:before {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 13px;
                height: 13px;
                background-image: url('img/search-icon.svg');
                content: '';
              }
            `}
          />
          <p className="visually-hidden" id="search-descr">
            Введите ваш поисковый запрос…
          </p>
          <button
            className="search__button"
            type="button"
            name="search-button"
            aria-label="Кнопка поиска"
          >
            <SearchIcon
              width="25px"
              height="25px"
              transform="scale(1.2)"
              fill="none"
              stroke="currentColor"
            />
          </button>
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
              padding-right: 10px;
              padding-left: 25px;
              flex-grow: 1;

              ${breakpointsMap.DESKTOP} {
                padding-right: 26px;
                padding-left: 10px;
              }
            `}
          >
            <h3
              css={css`
                font-weight: 400;
                font-size: 16px;
                margin-bottom: 20px;

                ${breakpointsMap.DESKTOP} {
                  margin-bottom: 40px;
                }
              `}
            >
              Анализы
            </h3>
            <table
              css={css`
                display: flex;
                width: 100%;
                flex-direction: column;
                padding-top: 16px;
                margin-bottom: 31px;
              `}
            >
              <thead
                className="table__head"
                css={css`
                  display: none;
                  width: 100%;

                  ${breakpointsMap.TABLET} {
                    display: block;
                  }
                `}
              >
                <tr
                  className="table__row"
                  css={css`
                    display: flex;
                    padding-top: 26.5px;
                    padding-left: 12px;
                    border-top: 1px dashed
                      rgba(${theme.colors.colorText.rgb}, 0.2);
                    margin-bottom: 20px;
                    font-size: 12px;
                  `}
                >
                  <th
                    css={css`
                      display: flex;
                      font-size: 12px;
                      font-weight: 400;

                      ${breakpointsMap.TABLET} {
                        width: 83px;
                      }

                      ${breakpointsMap.DESKTOP} {
                        width: 120px;
                      }
                    `}
                  >
                    Код
                  </th>
                  <th
                    className="table__row-head"
                    css={css`
                      display: flex;
                      width: 325px;
                      font-size: 12px;
                      font-weight: 400;
                    `}
                  >
                    Название
                  </th>
                  <th
                    className="table__row-head"
                    css={css`
                      display: flex;
                      font-size: 12px;
                      font-weight: 400;

                      ${breakpointsMap.TABLET} {
                        width: 91px;
                      }

                      ${breakpointsMap.DESKTOP} {
                        width: 174px;
                      }
                    `}
                  >
                    Б/М
                  </th>
                  <th
                    className="table__row-head"
                    css={css`
                      display: flex;
                      font-size: 12px;
                      font-weight: 400;
                    `}
                  >
                    Цена
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="table__row"
                  css={css`
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0 17px;
                    padding-top: 27px;
                    padding-bottom: 27px;
                    box-shadow: ${theme.colors.boxShadow};
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
                      flex-direction: column;
                      justify-content: center;
                      align-items: flex-start;
                      margin-bottom: 15px;
                      font-size: 16px;
                      font-weight: 500;

                      ${breakpointsMap.TABLET} {
                        width: 325px;
                        min-width: 325px;
                        margin-bottom: 0;
                      }
                    `}
                  >
                    <span>Общий анализ крови (5-diff), капиллярная кровь</span>
                    <a
                      href="/"
                      css={css`
                        color: #946df6;
                        font-size: 12px;
                        padding-left: 12px;
                        position: relative;

                        &:before {
                          content: '';
                          width: 11px;
                          height: 9px;
                          background-repeat: no-repeat;
                          position: absolute;
                          left: 0;
                          top: 3px;
                          background-image: url('img/pink-home.svg');
                        }
                      `}
                    >
                      Можно сдать на дому
                    </a>
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
                        width: 92px;
                      }

                      ${breakpointsMap.DESKTOP} {
                        width: 174px;
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
                        margin-bottom: 10px;
                        font-size: 26px;
                        word-spacing: 10px;
                      `}
                    >
                      1 100 ₽
                    </span>
                    <span
                      css={css`
                        font-size: 12px;
                        position: relative;
                        word-spacing: 5px;
                      `}
                    >
                      Срок 1 день
                      {spanHint()}
                    </span>
                  </td>
                  <td
                    css={css`
                      .cartPage__delete-button {
                        top: 27px;
                      }

                      ${breakpointsMap.TABLET} {
                        .cartPage__delete-button {
                          top: 37px;
                        }
                      }
                    `}
                  >
                    <CrossButton
                      buttonClass="cartPage__delete-button"
                      label="Удалить анализ из корзины"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <h3
                css={css`
                  font-weight: 400;
                  font-size: 16px;
                  margin-bottom: 20px;

                  ${breakpointsMap.DESKTOP} {
                    margin-bottom: 40px;
                  }
                `}
              >
                Комплексы
              </h3>
              <table
                css={css`
                  width: 100%;
                `}
              >
                <tbody>
                  <tr
                    css={css`
                      width: 100%;
                      background-color: #f7f7f7;

                      counter-reset: row;

                      .table__row:nth-of-type(n + 2):after {
                        counter-increment: row;
                        content: counter(row);
                      }
                    `}
                  >
                    <tr
                      className="table__row"
                      css={css`
                        position: relative;
                        display: flex;
                        flex-wrap: wrap;
                        padding: 0 17px;
                        padding-left: 89px;
                        padding-top: 27px;
                        padding-bottom: 27px;
                        background-color: ${theme.colors.white};
                        box-shadow: ${theme.colors.boxShadow};
                        margin-bottom: 36px;

                        &:before {
                          content: '';
                          position: absolute;
                          background-color: ${theme.colors.blue};
                          height: 100%;
                          width: 36px;
                          left: 0;
                          top: 0;
                          color: ${theme.colors.white};
                        }

                        &:after {
                          content: 'Комплекс';
                          position: absolute;
                          left: -20px;
                          top: 45%;
                          font-size: 14px;
                          text-transform: uppercase;
                          transform: rotate(-90deg);
                          color: ${theme.colors.white};
                          font-weight: 500;
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
                          flex-direction: column;
                          justify-content: center;
                          align-items: flex-start;
                          margin-bottom: 15px;
                          font-size: 16px;

                          ${breakpointsMap.TABLET} {
                            width: 255px;
                            min-width: 255px;
                            margin-bottom: 0;
                          }
                        `}
                      >
                        <span>
                          Общий анализ крови (5-diff), капиллярная кровь
                        </span>
                        <a
                          href="/"
                          css={css`
                            color: #946df6;
                            font-size: 12px;
                            padding-left: 12px;
                            position: relative;

                            &:before {
                              content: '';
                              width: 11px;
                              height: 9px;
                              background-repeat: no-repeat;
                              position: absolute;
                              left: 0;
                              top: 3px;
                              background-image: url('img/pink-home.svg');
                            }
                          `}
                        >
                          Можно сдать на дому
                        </a>
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
                            width: 92px;
                          }

                          ${breakpointsMap.DESKTOP} {
                            width: 174px;
                            margin-bottom: 0;
                          }
                        `}
                      >
                        <a
                          href="/"
                          css={css`
                            position: relative;
                            display: flex;
                            align-items: center;
                            height: 100%;

                            &:after,
                            &:before {
                              content: '';
                              display: block;
                              width: 10px;
                              height: 1px;
                              top: 8px;
                              position: absolute;
                              right: -18px;
                              background-color: ${theme.colors.colorText.hex};
                            }

                            &:after {
                              transform: rotate(45deg);
                            }
                            &:before {
                              transform: rotate(-45deg);
                              right: -25px;
                            }

                            ${breakpointsMap.TABLET} {
                              &:after,
                              &:before {
                                top: 25px;
                              }

                              &:after {
                                transform: rotate(45deg);
                                right: -14px;
                              }
                              &:before {
                                transform: rotate(-45deg);
                                right: -21px;
                              }
                            }

                            ${breakpointsMap.DESKTOP} {
                              &:after,
                              &:before {
                                top: 31px;
                              }
                            }
                          `}
                        >
                          Развернуть
                        </a>
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
                        <small
                          css={css`
                            font-size: 12px;
                            text-decoration: line-through;
                            margin-bottom: 5px;
                          `}
                        >
                          1 100 ₽
                        </small>
                        <span
                          css={css`
                            margin-bottom: 10px;
                            font-size: 26px;
                            word-spacing: 10px;
                          `}
                        >
                          1 100 ₽
                        </span>
                        <span
                          css={css`
                            font-size: 12px;
                            position: relative;
                            word-spacing: 5px;
                          `}
                        >
                          Срок 1 день
                          {spanHint()}
                        </span>
                      </td>
                      <td
                        css={css`
                          .cartPage__delete-button {
                            top: 25px;
                          }

                          ${breakpointsMap.TABLET} {
                            .cartPage__delete-button {
                              top: 45px;
                            }
                          }
                        `}
                      >
                        <CrossButton
                          buttonClass="cartPage__delete-button"
                          label="Удалить анализ из корзины"
                        />
                      </td>
                    </tr>
                    <tr
                      className="table__row"
                      css={css`
                        position: relative;
                        display: flex;
                        flex-wrap: wrap;
                        padding: 0 17px;
                        padding-top: 27px;
                        padding-bottom: 27px;
                        background-color: ${theme.colors.white};
                        box-shadow: ${theme.colors.boxShadow};
                        margin-left: 40px;
                        margin-right: 40px;
                        padding-left: 86px;
                        margin-bottom: 36px;

                        &:before {
                          content: '';
                          position: absolute;
                          background-color: ${theme.colors.blue};
                          height: 100%;
                          width: 36px;
                          left: 0;
                          top: 0;
                          color: ${theme.colors.white};
                        }

                        &:after {
                          counter-increment: row;
                          position: absolute;
                          left: 15px;
                          top: 45%;
                          font-size: 14px;
                          text-transform: uppercase;
                          color: ${theme.colors.white};
                          font-weight: 500;
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
                          flex-direction: column;
                          justify-content: center;
                          align-items: flex-start;
                          margin-bottom: 15px;
                          font-size: 16px;

                          ${breakpointsMap.TABLET} {
                            width: 250px;
                            min-width: 250px;
                            margin-bottom: 0;
                          }
                        `}
                      >
                        <span>
                          Общий анализ крови (5-diff), капиллярная кровь
                        </span>
                        <a
                          href="/"
                          css={css`
                            color: #946df6;
                            font-size: 12px;
                            padding-left: 12px;
                            position: relative;

                            &:before {
                              content: '';
                              width: 11px;
                              height: 9px;
                              background-repeat: no-repeat;
                              position: absolute;
                              left: 0;
                              top: 3px;
                              background-image: url('img/pink-home.svg');
                            }
                          `}
                        >
                          Можно сдать на дому
                        </a>
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
                            width: 92px;
                          }

                          ${breakpointsMap.DESKTOP} {
                            width: 174px;
                            margin-bottom: 0;
                          }
                        `}
                      >
                        <a
                          href="/"
                          css={css`
                            position: relative;
                            display: flex;
                            align-items: center;
                            height: 100%;

                            &:after,
                            &:before {
                              content: '';
                              display: block;
                              width: 10px;
                              height: 1px;
                              top: 8px;
                              position: absolute;
                              right: -18px;
                              background-color: ${theme.colors.colorText.hex};
                            }

                            &:after {
                              transform: rotate(45deg);
                            }
                            &:before {
                              transform: rotate(-45deg);
                              right: -25px;
                            }

                            ${breakpointsMap.TABLET} {
                              &:after,
                              &:before {
                                top: 19px;
                              }

                              &:after {
                                transform: rotate(45deg);
                                right: -14px;
                              }
                              &:before {
                                transform: rotate(-45deg);
                                right: -21px;
                              }
                            }

                            ${breakpointsMap.DESKTOP} {
                              &:after,
                              &:before {
                                top: 31px;
                              }
                            }
                          `}
                        >
                          Развернуть
                        </a>
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
                        <small
                          css={css`
                            font-size: 12px;
                            text-decoration: line-through;
                            margin-bottom: 5px;
                          `}
                        >
                          1 100 ₽
                        </small>
                        <span
                          css={css`
                            margin-bottom: 10px;
                            font-size: 26px;
                            word-spacing: 10px;
                          `}
                        >
                          1 100 ₽
                        </span>
                        <span
                          css={css`
                            font-size: 12px;
                            position: relative;
                            word-spacing: 5px;
                          `}
                        >
                          Срок 1 день
                          {spanHint()}
                        </span>
                      </td>
                      <td
                        css={css`
                          .cartPage__delete-button {
                            top: 25px;
                          }

                          ${breakpointsMap.DESKTOP} {
                            .cartPage__delete-button {
                              top: 45px;
                            }
                          }
                        `}
                      >
                        <CrossButton
                          buttonClass="cartPage__delete-button"
                          label="Удалить анализ из корзины"
                        />
                      </td>
                    </tr>
                    <tr
                      className="table__row"
                      css={css`
                        position: relative;
                        display: flex;
                        flex-wrap: wrap;
                        padding: 0 17px;
                        padding-top: 27px;
                        padding-bottom: 27px;
                        background-color: ${theme.colors.white};
                        box-shadow: ${theme.colors.boxShadow};
                        margin-left: 40px;
                        margin-right: 40px;
                        padding-left: 86px;
                        margin-bottom: 36px;

                        &:before {
                          content: '';
                          position: absolute;
                          background-color: ${theme.colors.blue};
                          height: 100%;
                          width: 36px;
                          left: 0;
                          top: 0;
                          color: ${theme.colors.white};
                        }

                        &:after {
                          counter-increment: row;
                          position: absolute;
                          left: 15px;
                          top: 45%;
                          font-size: 14px;
                          text-transform: uppercase;
                          color: ${theme.colors.white};
                          font-weight: 500;
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
                          flex-direction: column;
                          justify-content: center;
                          align-items: flex-start;
                          margin-bottom: 15px;
                          font-size: 16px;

                          ${breakpointsMap.TABLET} {
                            width: 250px;
                            min-width: 250px;
                            margin-bottom: 0;
                          }
                        `}
                      >
                        <span>
                          Общий анализ крови (5-diff), капиллярная кровь
                        </span>
                        <a
                          href="/"
                          css={css`
                            color: #946df6;
                            font-size: 12px;
                            padding-left: 12px;
                            position: relative;

                            &:before {
                              content: '';
                              width: 11px;
                              height: 9px;
                              background-repeat: no-repeat;
                              position: absolute;
                              left: 0;
                              top: 3px;
                              background-image: url('img/pink-home.svg');
                            }
                          `}
                        >
                          Можно сдать на дому
                        </a>
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
                            width: 92px;
                          }

                          ${breakpointsMap.DESKTOP} {
                            width: 174px;
                            margin-bottom: 0;
                          }
                        `}
                      >
                        <a
                          href="/"
                          css={css`
                            position: relative;
                            display: flex;
                            align-items: center;
                            height: 100%;

                            &:after,
                            &:before {
                              content: '';
                              display: block;
                              width: 10px;
                              height: 1px;
                              top: 8px;
                              position: absolute;
                              right: -18px;
                              background-color: ${theme.colors.colorText.hex};
                            }

                            &:after {
                              transform: rotate(45deg);
                            }
                            &:before {
                              transform: rotate(-45deg);
                              right: -25px;
                            }

                            ${breakpointsMap.TABLET} {
                              &:after,
                              &:before {
                                top: 19px;
                              }

                              &:after {
                                transform: rotate(45deg);
                                right: -14px;
                              }
                              &:before {
                                transform: rotate(-45deg);
                                right: -21px;
                              }
                            }

                            ${breakpointsMap.DESKTOP} {
                              &:after,
                              &:before {
                                top: 31px;
                              }
                            }
                          `}
                        >
                          Развернуть
                        </a>
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
                        <small
                          css={css`
                            font-size: 12px;
                            text-decoration: line-through;
                            margin-bottom: 5px;
                          `}
                        >
                          1 100 ₽
                        </small>
                        <span
                          css={css`
                            margin-bottom: 10px;
                            font-size: 26px;
                            word-spacing: 10px;
                          `}
                        >
                          1 100 ₽
                        </span>
                        <span
                          css={css`
                            font-size: 12px;
                            position: relative;
                            word-spacing: 5px;
                          `}
                        >
                          Срок 1 день
                          {spanHint()}
                        </span>
                      </td>
                      <td
                        css={css`
                          .cartPage__delete-button {
                            top: 25px;
                          }

                          ${breakpointsMap.DESKTOP} {
                            .cartPage__delete-button {
                              top: 45px;
                            }
                          }
                        `}
                      >
                        <CrossButton
                          buttonClass="cartPage__delete-button"
                          label="Удалить анализ из корзины"
                        />
                      </td>
                    </tr>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                  margin-bottom: 30px;
                `}
              >
                Взятие биоматериала
              </h3>
              <ul
                css={css`
                  list-style: none;
                  padding: 0;
                `}
              >
                <li
                  css={css`
                    padding-top: 10px;
                    padding-bottom: 10px;
                    font-size: 13px;
                    border-top: 1px dashed
                      rgba(${theme.colors.colorText.rgb}, 0.4);
                    border-bottom: 1px dashed
                      rgba(${theme.colors.colorText.rgb}, 0.4);
                  `}
                >
                  <a
                    href="/"
                    css={css`
                      display: block;
                      width: 100%;
                      height: 100%;
                    `}
                  >
                    Сыворотка
                  </a>
                </li>
              </ul>
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
              <caption
                css={css`
                  display: flex;
                  justify-content: flex-start;
                  margin-bottom: 20px;
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Также рекомендуется
              </caption>
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
                      padding-right: 60px;
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
                        margin-right: 29px;
                      }

                      ${breakpointsMap.DESKTOP} {
                        width: 128px;
                        margin-right: 0;
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

                      ${breakpointsMap.DESKTOP} {
                        margin-right: auto;
                      }
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
                      <CartIcon fill="#9A66F5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* right list */}
          <div
            css={css`
              order: -1;
              padding-top: 26px;

              ${breakpointsMap.DESKTOP} {
                align-self: flex-start;
                width: 270px;
                order: 0;
                box-shadow: ${theme.colors.boxShadow};
              }
            `}
          >
            <div
              css={css`
                padding-right: 18px;
                padding-bottom: 12px;
                padding-left: 18px;
              `}
            >
              <DashedContainer>
                <SpanContainer
                  css={css`
                    margin-right: auto;
                  `}
                >
                  Анализ
                </SpanContainer>
                <span
                  css={css`
                    position: relative;
                    font-size: 15px;
                  `}
                >
                  1 100 ₽
                </span>
              </DashedContainer>
              <DashedContainer>
                <SpanContainer
                  css={css`
                    margin-right: auto;
                  `}
                >
                  Взятие биоматериала
                </SpanContainer>
                <span
                  css={css`
                    position: relative;
                    font-size: 15px;
                  `}
                >
                  1 100 ₽
                </span>
              </DashedContainer>
              <DashedContainer>
                <SpanContainer
                  css={css`
                    margin-right: auto;
                  `}
                >
                  Стоимость
                </SpanContainer>
                <span
                  css={css`
                    font-size: 26px;
                  `}
                >
                  1 100 ₽
                </span>
              </DashedContainer>
              <DashedContainer>
                <SpanContainer
                  css={css`
                    margin-right: auto;
                  `}
                >
                  Оплата
                </SpanContainer>
                <span
                  css={css`
                    position: relative;
                    font-size: 14px;
                  `}
                >
                  Онлайн / В медцентре
                </span>
              </DashedContainer>
              <DashedContainer>
                <form
                  action="post"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                  `}
                >
                  <input
                    type="email"
                    css={css`
                      apearance: none;
                      border: none;
                      border: 1px solid ${theme.colors.blue};
                      background: transparent;
                      font-size: 13px;
                      padding-top: 20px;
                      flex-grow: 1;
                      padding-bottom: 23px;
                      border-radius: 4px;
                      padding-left: 14px;
                      margin-bottom: 25px;
                    `}
                    placeholder="Ваш e-mail *"
                  />
                  <input
                    type="tel"
                    placeholder="Ваш телефон *"
                    css={css`
                      appearance: none;
                      border: none;
                      border: 1px solid ${theme.colors.blue};
                      background: transparent;
                      font-size: 13px;
                      padding-top: 20px;
                      flex-grow: 1;
                      padding-bottom: 23px;
                      border-radius: 4px;
                      padding-left: 14px;
                      margin-bottom: 25px;
                    `}
                  />
                  <textarea
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="10"
                    placeholder="Комментарий *"
                    css={css`
                      appearance: none;
                      border: none;
                      border: 1px solid ${theme.colors.blue};
                      background: transparent;
                      font-size: 13px;
                      padding-top: 20px;
                      flex-grow: 1;
                      padding-bottom: 23px;
                      resize: none;
                      border-radius: 4px;
                      padding-left: 14px;
                      margin-bottom: 19px;
                      height: 113px;
                    `}
                  />
                  <div
                    className="form__input-checkbox-container"
                    css={css`
                      margin-bottom: 9px;
                    `}
                  >
                    <FormIosCheckbox
                      id="agreement"
                      name="agreement"
                      label="Нажимая на кнопку отправить вы соглашаетесь с нашей политикой
          конфиденциальности"
                    />
                    <small
                      className="form__agreement-hint"
                      css={css`
                        font-size: 10px;
                        line-height: 14px;
                        letter-spacing: -0.2px;
                      `}
                    >
                      Нажимая на кнопку отправить вы соглашаетесь с нашей
                      политикой конфиденциальности
                    </small>
                  </div>
                  <button
                    type="submit"
                    className="button"
                    css={css`
                      width: 100%;
                      padding-top: 17px;
                      padding-bottom: 19px;
                      border: none;
                      margin-bottom: 23px;
                    `}
                  >
                    Оплатить
                  </button>
                  <div
                    css={css`
                      display: flex;
                    `}
                  >
                    <span
                      css={css`
                        position: relative;
                        padding-left: 48px;

                        &:before {
                          position: absolute;
                          top: 0;
                          left: 0;
                          display: block;
                          width: 28px;
                          height: 28px;
                          background-image: ${theme.colors.linearGradient};
                          border-radius: 50%;
                          content: '';
                        }

                        &:after {
                          position: absolute;
                          top: 5px;
                          left: 5px;
                          display: block;
                          width: 18px;
                          height: 18px;
                          background-image: url('img/white-clock.svg');
                          content: '';
                        }
                      `}
                    >
                      Принимаем анализы
                      <br />
                      7:30-19:00
                    </span>
                  </div>
                </form>
              </DashedContainer>
              <DashedContainer>
                <a
                  href="/"
                  css={css`
                    position: relative;
                    padding-bottom: 9px;
                    font-size: 12px;
                    margin-right: auto;

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
                  Адреса и время работы <br />
                  медицинских центров
                </a>
                <ul
                  css={css`
                    padding: 0;
                    list-style: none;
                    display: flex;
                    margin: 0;
                  `}
                >
                  <li>
                    <a
                      href="/"
                      css={css`
                        width: 23px;
                        height: 26px;
                      `}
                    >
                      <FileIcon />
                    </a>
                  </li>
                  <li
                    css={css`
                      margin-left: 16px;
                    `}
                  >
                    <a
                      href="/"
                      css={css`
                        width: 22px;
                        height: 22px;
                        position: relative;

                        &:hover:after {
                          position: absolute;
                          z-index: 10;
                          top: calc(-100% - 42px);
                          left: -106px;
                          display: flex;
                          width: 136px;
                          align-items: center;
                          justify-content: center;
                          padding: 8px 0 8px 0;
                          animation: ${showingAimation} 0.3s forwards
                            ease-in-out;
                          background-color: ${theme.colors.blue};
                          border-radius: 4px;
                          color: ${theme.colors.white};
                          content: 'Скопировать ссылку';
                          font-size: 11px;
                          text-align: center;
                          text-transform: none;
                        }

                        &:hover:before {
                          position: absolute;
                          z-index: 1;
                          top: -23px;
                          left: 10px;
                          display: flex;
                          width: 8px;
                          height: 8px;
                          animation: ${showingAimation} 0.3s forwards
                            ease-in-out;
                          background-color: ${theme.colors.blue};
                          content: '';
                          transform: rotate(45deg);
                        }
                      `}
                    >
                      <LinkIcon />
                    </a>
                  </li>
                </ul>
              </DashedContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
