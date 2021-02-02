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
    text-transform: uppercase;
  `;

  return (
    <>
      <h2 className="main__title">Комплексный анализ</h2>
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

              ${breakpointsMap.DESKTOP} {
                padding-right: 26px;
              }
            `}
          >
            <div>
              <p
                css={css`
                  font-size: 13px;
                `}
              >
                Сифилис – венерическое заболевание: наиболее часто он передается
                половым путем. Кроме того, возможно заражение через кровь
                (например, при совместном использовании шприцев, бритв и пр.),
                плода от матери или бытовым путем (очень редко).
              </p>
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
                `}
              >
                Состав комплексного исследования
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

                      ${breakpointsMap.TABLET} {
                        width: 245px;
                        margin-right: 60px;
                      }

                      ${breakpointsMap.DESKTOP} {
                        margin-right: 70px;
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
                        width: 92px;
                        margin-right: 40px;
                      }

                      ${breakpointsMap.DESKTOP} {
                        width: 128px;
                        margin-right: 90px;
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
                          bottom: 10px;
                        }
                      `}
                    >
                      <CartIcon fill="#9A66F5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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
                padding-right: 18px;
                padding-bottom: 17px;
                padding-left: 18px;
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
                    font-weight: 300;
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
                <span>1 день, не считая дня забора и выходных</span>
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
                align-items: flex-end;
                padding-top: 25px;
                padding-right: 18px;
                padding-bottom: 22px;
                padding-left: 18px;
                background-image: url('img/analyze-left-bg.png');
                background-repeat: no-repeat;
                background-size: cover;
                line-height: 30px;

                @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
                  background-image: url(img/img/analyze-left-bg@2x.png);
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
