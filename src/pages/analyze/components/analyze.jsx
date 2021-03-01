import React from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as SearchIcon } from 'icons/search-icon.svg';
import { css, useTheme, keyframes } from '@emotion/react';
import Select from 'common/select';
import { ReactComponent as CartIcon } from 'icons/cart-icon.svg';
import styled from '@emotion/styled';
import { breakpointsMap } from 'src/constants/styles';

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
        right: -30px;
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

const Analyze = () => {
  const { analyzename } = useParams();
  const theme = useTheme();
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
  `;
  const TextContainer = styled('p')`
    margin: 0;
  `;

  const SpanContainer = styled('span')`
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
  `;

  return (
    <>
      <h2 className="main__title">Анализ</h2>
      <section>
        <div
          className="search__container-input-group"
          css={css`
            position: relative;
          `}
        >
          <SearchIcon
            width="13px"
            height="13px"
            fill="none"
            stroke="currentColor"
            css={css`
              position: absolute;
              top: 16px;
              left: 22px;
              color: #000;

              ${breakpointsMap.DESKTOP} {
                top: 20px;
              }
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
              transform="scale(1)"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              opacity="1"
            />
          </button>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            padding-bottom: 39px;

            ${breakpointsMap.DESKTOP} {
              flex-direction: row;
            }
          `}
        >
          {/* left list */}
          <div
            css={css`
              display: none;

              ${breakpointsMap.DESKTOP} {
                display: block;
                width: 221px;
                margin-right: 56px;
              }
            `}
          >
            <ul
              css={css`
                padding: 0;
                list-style: none;
              `}
            >
              <li>
                <a
                  href="/"
                  css={css`
                    color: ${theme.colors.blue};
                    text-decoration: underline;

                    &:hover,
                    &:active {
                      color: ${theme.colors.blue};
                    }
                  `}
                >
                  Синонимы Русские
                </a>
              </li>
            </ul>
          </div>
          <div
            css={css`
              padding-right: 10px;
              padding-left: 10px;

              ${breakpointsMap.TABLET} {
                padding: 0;
              }

              ${breakpointsMap.DESKTOP} {
                padding-right: 26px;
                padding-left: 26px;
                border-left: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.6);
              }
            `}
          >
            <div>
              <h3
                css={css`
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Расширенный анализ крови с лейкоформулой (5-diff), микроскопия,
                ретикулоциты, СОЭ + фотофискация препарата при выявлении
                патологии
              </h3>
              <p
                css={css`
                  font-size: 13px;
                `}
              >
                Тест выявляет антитела против кардиолипина (липида, который
                входит в состав мембраны митохондрий и бактерий). Эти антитела
                присутствуют в крови у больных сифилисом.
              </p>
            </div>
            <div>
              <h3
                css={css`
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Синонимы русские
              </h3>
              <p
                css={css`
                  font-size: 13px;
                `}
              >
                Неспецифический антифосфолипидный (реагиновый) тест, современный
                аналог реакции Вассермана (RW).
              </p>
            </div>
            <div
              css={css`
                display: flex;
                width: 100%;
                min-height: 195px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding-right: 10px;
                padding-left: 10px;
                margin-bottom: 36px;
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
              `}
            >
              <p
                css={css`
                  color: ${theme.colors.white};
                  font-size: 22px;
                  font-weight: 500;
                `}
              >
                Понятно ли вам описание анализа?
              </p>
              <div
                css={css`
                  display: flex;
                  width: 100%;
                  justify-content: center;
                `}
              >
                <button
                  type="button"
                  className="button"
                  css={css`
                    padding: 14px 33px 18px 35px;
                    border: none;
                    margin-right: 24px;
                  `}
                >
                  Да
                </button>
                <button
                  type="button"
                  css={css`
                    padding-bottom: 4px;
                    border: none;
                    appearance: none;
                    background: transparent;
                    color: ${theme.colors.white};
                    text-decoration: underline;
                    text-transform: uppercase;
                  `}
                >
                  Нет
                </button>
              </div>
            </div>
            <table
              css={css`
                display: flex;
                width: 100%;
                flex-direction: column;
                padding-top: 16px;
                border-top: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.6);
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
                        margin-right: 41px;
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
          </div>
          {/* right list */}
          <div
            css={css`
              order: -1;
              padding-top: 26px;

              ${breakpointsMap.DESKTOP} {
                width: 270px;
                order: 0;
                box-shadow: ${theme.colors.boxShadow};
              }
            `}
          >
            <div
              css={css`
                padding-right: 8px;
                padding-bottom: 17px;
                padding-left: 8px;
              `}
            >
              <DashedContainer
                css={css`
                  justify-content: center;

                  ${breakpointsMap.DESKTOP} {
                    justify-content: flex-start;
                    padding-left: 20px;
                  }
                `}
              >
                <h3
                  css={css`
                    position: relative;
                    margin: 0;
                    margin-right: 20px;
                    font-size: 13px;
                    font-weight: 500;
                    text-transform: uppercase;

                    &:before {
                      position: absolute;
                      top: 0;
                      left: -20px;
                      display: block;
                      width: 13px;
                      height: 15px;
                      background-image: url('img/breadCrumbLogo.png');
                      content: '';
                      filter: grayscale(100%);
                    }
                    &:after {
                      position: absolute;
                      top: -4px;
                      right: -10px;
                      display: block;
                      width: 0.5px;
                      height: 23px;
                      background-color: ${theme.colors.colorText.hex};
                      content: '';
                      transform: rotate(23deg);
                    }
                  `}
                >
                  Исследование
                </h3>
                <time>18.110</time>
              </DashedContainer>
              <DashedContainer>
                <TextContainer
                  css={css`
                    font-size: 16px;
                    font-weight: 500;
                  `}
                >
                  Расширенный анализ крови с лейкоформулой (5-diff),
                  микроскопия, ретикулоциты, СОЭ + фотофискация препарата при
                  выявлении патологии
                </TextContainer>
              </DashedContainer>
              <DashedContainer>
                <SpanContainer
                  css={css`
                    margin-right: 34px;
                  `}
                >
                  срок
                </SpanContainer>
                <span
                  css={css`
                    position: relative;
                  `}
                >
                  1 день {spanHint('Не считая дня забора и выходных', 13)}
                </span>
              </DashedContainer>
              <DashedContainer
                css={css`
                  flex-direction: column;
                  align-items: flex-start;

                  .analyze-select {
                    width: 100%;
                    margin: 0;
                    border-radius: 4px;
                  }

                  .select__control {
                    border-color: ${theme.colors.blue};
                    border-radius: 4px;
                  }
                `}
              >
                <SpanContainer
                  css={css`
                    position: relative;
                    margin-bottom: 18px;
                  `}
                >
                  Биоматериал
                  {spanHint(
                    'Данный анализ можно сдать несколькими способами',
                    27,
                  )}
                </SpanContainer>
                <Select
                  selectClass="analyze-select"
                  placeholder="Цельная кровь(Цитрат натрия)"
                />
              </DashedContainer>
              <DashedContainer>
                <SpanContainer
                  css={css`
                    margin-right: auto;
                  `}
                >
                  Цена
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
                      top: 8px;
                      left: 7px;
                      display: block;
                      width: 15px;
                      height: 12px;
                      background-image: url('img/calendar.svg');
                      content: '';
                    }
                  `}
                >
                  1 день, не считая дня <br />
                  забора и выходных
                </span>
              </DashedContainer>
              <DashedContainer>
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
                      top: 8px;
                      left: 7px;
                      display: block;
                      width: 15px;
                      height: 12px;
                      background-image: url('img/discount.svg');
                      content: '';
                    }
                  `}
                >
                  Цена указана без <br />
                  взятия биоматериала
                </span>
              </DashedContainer>
              <DashedContainer>
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
                      top: 8px;
                      left: 7px;
                      display: block;
                      width: 15px;
                      height: 12px;
                      background-image: url('img/home.svg');
                      content: '';
                    }
                  `}
                >
                  Возможность взятия
                  <br />
                  материала на дому
                </span>
              </DashedContainer>
              <button
                type="button"
                className="button"
                css={css`
                  width: 100%;
                  padding-top: 17px;
                  padding-bottom: 19px;
                  border: none;
                `}
              >
                Добавить в корзину
              </button>
            </div>
            <a
              href="/"
              css={css`
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: center;
                padding-top: 25px;
                padding-bottom: 27px;
                margin-bottom: 21px;
                background-image: ${theme.colors.linearGradient};
                color: ${theme.colors.white};
                font-weight: 500;
                text-transform: uppercase;

                &:hover,
                &:active {
                  color: ${theme.colors.white};
                }
              `}
            >
              Скачать пример результата
            </a>
            <div
              css={css`
                display: flex;
                width: 100%;
                min-height: 206px;
                flex-direction: column;
                align-items: center;
                padding-top: 25px;
                padding-right: 10px;
                padding-bottom: 22px;
                padding-left: 10px;
                background-image: url('img/analyze-left-bg.png');
                background-repeat: no-repeat;
                background-size: cover;
                line-height: 30px;

                @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
                  background-image: url(img/analyze-left-bg@2x.png);
                }

                ${breakpointsMap.DESKTOP} {
                  padding-right: 18px;
                  padding-left: 18px;
                }
              `}
            >
              <p
                css={css`
                  position: relative;
                  padding-left: 100px;
                  margin: 0;
                  margin-bottom: auto;
                  color: ${theme.colors.white};
                  font-size: 22px;
                  font-weight: 500;

                  &:before {
                    position: absolute;
                    top: -10px;
                    left: -10px;
                    display: block;
                    width: 100px;
                    height: 100px;
                    background-image: url('img/discounts-1.svg');
                    content: '';
                  }
                `}
              >
                Провести исследование
                <br /> на дому
              </p>
              <button
                type="button"
                className="button"
                css={css`
                  width: 100%;
                  padding-top: 17px;
                  padding-bottom: 19px;
                  border: none;
                `}
              >
                вызвать врача на дом
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Analyze;
