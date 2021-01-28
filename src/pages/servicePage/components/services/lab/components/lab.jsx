import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as SearchIcon } from 'icons/search-icon.svg';
import { ReactComponent as CartIcon } from 'icons/cart-icon.svg';
import { css, useTheme } from '@emotion/react';
import CrossButton from 'common/crossButton';
import { breakpointsMap } from 'src/constants/styles';
import Select from 'common/select';

const Lab = () => {
  const theme = useTheme();

  const Tab = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;

    &:hover {
      background-color: ${theme.colors.blue};
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
    color: ${theme.colors.colorText};

    &:hover {
      color: ${theme.colors.altColorText};
    }
  `;

  const TabsContainer = styled.div`
    padding-top: 0ox;
  `;

  const TabList = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;
    padding: 0;
    box-shadow: ${theme.colors.boxShadow};

    ${breakpointsMap.TABLET} {
      flex-direction: row;
      flex-wrap: wrap;
    }

    ${breakpointsMap.DESKTOP} {
      flex-wrap: nowrap;
      width: 100%;
    }
  `;

  return (
    <div>
      <div className="search__container-input-group">
        <input
          type="text"
          className="search__input"
          placeholder="Введите ваш поисковый запрос…"
          aria-label="Введите что хотите найти"
          aria-describedby="search-descr"
          css={css`
            border: 1px solid ${theme.colors.blue};
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
      <TabsContainer>
        <div
          css={css`
            padding-left: 20px;
          `}
        >
          <span
            css={css`
              position: relative;

              .lab__reset {
                top: -4px;
                left: -20px;
              }
            `}
          >
            <CrossButton
              buttonClass="lab__reset"
              label="Сбросить фильтр"
              action={() => console.log(true)}
            />
            Сбросить фильтры
          </span>
        </div>
        <TabList>
          <Tab>
            <TabLink href="/">По типу (15)</TabLink>
          </Tab>
          <Tab>
            <TabLink href="/">По биоматериалу (15)</TabLink>
          </Tab>
          <Tab>
            <TabLink href="/">Для кого (15)</TabLink>
          </Tab>
          <Tab>
            <TabLink href="/">Органы (15)</TabLink>
          </Tab>
          <Tab>
            <TabLink href="/">По заболеваниям (15)</TabLink>
          </Tab>
        </TabList>
      </TabsContainer>
      <section
        css={css`
          display: flex;
          flex-direction: row;
          padding-bottom: 20px;
          flex-direction: column;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            .lab__select {
              width: 100%;
              margin-bottom: 10px;
            }

            .select__control {
              border-radius: 4px !important;
              border-color: ${theme.colors.blue};
            }

            ${breakpointsMap.TABLET} {
              flex-direction: row;
              flex-wrap: wrap;

              .lab__select {
                width: 305px;
                flex-grow: 1;
                margin: 0;
                margin-right: 20px;

                &:last-of-type {
                  margin-right: 0;
                }
              }
            }

            ${breakpointsMap.DESKTOP} {
              display: none;
            }
          `}
        >
          <Select
            placeholder="По типу"
            action={() => console.log(true)}
            selectClass="lab__select"
          />
          <Select
            placeholder="Выберите подраздел"
            action={() => console.log(true)}
            selectClass="lab__select"
          />
        </div>

        <TabsContainer
          css={css`
            width: 30%;
            min-height: 443px;
            margin-right: 30px;
            display: none;

            ${breakpointsMap.DESKTOP} {
              display: flex;
            }
          `}
        >
          <TabList
            css={css`
              flex-direction: column !important;
              height: 100%;
              padding: 30px 24px 15px 25px;
              margin: 0;
            `}
          >
            {new Array(6).fill('').map(() => (
              <li
                css={css`
                  padding-top: 35px;
                  position: relative;

                  &:first-of-type {
                    padding-top: 0;

                    &:before {
                      top: 3px;
                    }
                  }

                  &:before {
                    content: '';
                    display: block;
                    width: 10px;
                    height: 10px;
                    background-color: ${theme.colors.blue};
                    top: 38px;
                    left: -25px;
                    position: absolute;
                  }
                `}
              >
                <a href="/">Все</a>
              </li>
            ))}
          </TabList>
        </TabsContainer>
        <table
          css={css`
            margin-top: 12px;
            display: flex;
            flex-direction: column;
            width: 100%;

            ${breakpointsMap.DESKTOP} {
              width: 70%;
            }
          `}
        >
          <thead
            className="table__head"
            css={css`
              width: 100%;
              display: none;

              ${breakpointsMap.TABLET} {
                display: block;
              }
            `}
          >
            <tr
              className="table__row"
              css={css`
                display: flex;
                font-size: 12px;
                padding-left: 12px;
                margin-bottom: 20px;
                padding-top: 26.5px;
                border-top: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.2);
              `}
            >
              <th
                css={css`
                  font-weight: 400;
                  display: flex;
                  font-size: 12px;

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
                  font-weight: 400;
                  display: flex;
                  width: 325px;
                  font-size: 12px;
                `}
              >
                Название
              </th>
              <th
                className="table__row-head"
                css={css`
                  font-weight: 400;
                  display: flex;
                  font-size: 12px;

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
                  font-weight: 400;
                  display: flex;
                  font-size: 12px;
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
                display: flex;
                padding: 13px 17px;
                box-shadow: ${theme.colors.boxShadow};
                position: relative;
                flex-wrap: wrap;
              `}
            >
              <td
                className="table__cell"
                css={css`
                  font-size: 12px;
                  display: flex;
                  align-items: center;
                  margin-bottom: 10px;

                  ${breakpointsMap.TABLET} {
                    min-width: 77px;
                    width: 77px;
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
                  font-size: 16px;
                  display: flex;
                  align-items: center;
                  margin-bottom: 15px;
                  width: 100%;

                  ${breakpointsMap.TABLET} {
                    min-width: 325px;
                    width: 325px;
                  }
                `}
              >
                Общий анализ крови (5-diff), капиллярная кровь
              </td>
              <td
                className="table__cell"
                css={css`
                  font-size: 12px;
                  display: flex;
                  align-items: center;
                  margin-bottom: 10px;
                  width: 100%;

                  ${breakpointsMap.TABLET} {
                    width: 92px;
                  }

                  ${breakpointsMap.DESKTOP} {
                    width: 174px;
                  }
                `}
              >
                Кровь (сыворотка)
              </td>
              <td
                className="table__cell"
                css={css`
                  display: flex;
                  flex-direction: column;
                  display: flex;
                  justify-content: center;
                  width: 110px;
                `}
              >
                <span
                  css={css`
                    font-size: 26px;
                    margin-bottom: 2px;
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
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    appearance: none;
                    border: none;
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    bottom: 20px;
                    right: 0;
                    background-color: transparent;
                    background-image: linear-gradient(
                      -135deg,
                      rgba(255, 0, 235, 0.2) 0%,
                      rgba(154, 102, 245, 0.2) 50%,
                      rgba(43, 215, 255, 0.2) 100%
                    );

                    ${breakpointsMap.TABLET} {
                      bottom: 10px;
                      right: 16px;
                    }
                  `}
                >
                  <CartIcon fill="#9A66F5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Lab;
