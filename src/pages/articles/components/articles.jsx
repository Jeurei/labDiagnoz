import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import React from 'react';
import { breakpointsMap } from 'src/constants/styles';
import { Link } from 'react-router-dom';
import { randomId } from 'src/components/utils/common';
import { ReactComponent as SearchIcon } from 'icons/search-icon.svg';
import Picture from 'common/picture';

const Articles = () => {
  const theme = useTheme();

  const createTab = () => {
    const Tab = styled.li`
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      &:hover {
        background-image: ${theme.colors.linearGradient};
      }

      &:last-child {
        border-bottom: none;
      }

      ${breakpointsMap.TABLET} {
        width: 245px;
        flex-grow: 1;
        border-bottom: none;

        ${breakpointsMap.DESKTOP} {
          width: 245px;

          &:nth-of-type(2n) {
            border-right: 1px solid rgba(${theme.colors.colorText.rgb}, 0.2);
            border-left: 1px solid rgba(${theme.colors.colorText.rgb}, 0.2);
          }
        }
      }
    `;

    const TabLink = styled(Link)`
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      padding-top: 21px;
      padding-bottom: 22px;
      font-size: ${theme.fontSizes.altFs};
      line-height: ${theme.fontSizes.altLh};

      &:hover {
        color: ${theme.colors.altColorText};
      }
    `;

    return (
      <Tab key={randomId()}>
        <TabLink to="/">Все публикации (135)</TabLink>
      </Tab>
    );
  };

  const TabsContainer = styled.div`
    margin-bottom: 31px;
  `;

  const TabList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    box-shadow: ${theme.colors.boxShadow};
    list-style: none;

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
      <h2 className="main__title">Пресс центр</h2>
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
            transform="scale(1)"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            opacity="1"
          />
        </button>
      </div>
      <TabsContainer>
        <TabList>{new Array(4).fill('').map(() => createTab())}</TabList>
      </TabsContainer>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;

          ${breakpointsMap.TABLET} {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
          }
        `}
      >
        <article
          css={css`
            display: flex;
            width: 320px;
            min-height: 269px;
            flex-direction: column;
            padding-bottom: 25px;
            margin-bottom: 33px;
            box-shadow: ${theme.colors.boxShadow};

            .articlePage__article {
              width: 100%;
            }

            ${breakpointsMap.TABLET} {
              width: 340px;
              margin-right: auto;
            }

            ${breakpointsMap.DESKTOP} {
              width: 269px;
              margin-right: 30px;

              &:nth-of-type(4n) {
                margin-right: 0;
              }
            }
          `}
        >
          <Picture
            src="img/articlesimg"
            width="269"
            height="269"
            imgClass="articlePage__article"
          />
          <h3
            css={css`
              padding-top: 27px;
              padding-right: 21px;
              padding-left: 19px;
              margin: 0;
              margin-bottom: 12px;
              font-size: 16px;
              font-weight: 500;
            `}
          >
            Врачи диагностировали у Байдена две трещины в костях ноги
          </h3>
          <div
            css={css`
              display: flex;
              padding-left: 34px;
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
        </article>
        <article
          css={css`
            display: flex;
            width: 320px;
            min-height: 269px;
            flex-direction: column;
            padding-bottom: 25px;
            margin-bottom: 33px;
            box-shadow: ${theme.colors.boxShadow};

            .articlePage__article {
              width: 100%;
            }

            ${breakpointsMap.TABLET} {
              width: 340px;
            }

            ${breakpointsMap.DESKTOP} {
              width: 269px;
              margin-right: 30px;

              &:nth-of-type(4n) {
                margin-right: 0;
              }
            }
          `}
        >
          <Picture
            src="img/articlesimg"
            width="269"
            height="269"
            imgClass="articlePage__article"
          />
          <h3
            css={css`
              padding-top: 27px;
              padding-right: 21px;
              padding-left: 19px;
              margin: 0;
              margin-bottom: 12px;
              font-size: 16px;
              font-weight: 500;
            `}
          >
            Врачи диагностировали у Байдена две трещины в костях ноги
          </h3>
          <div
            css={css`
              display: flex;
              padding-left: 34px;
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
        </article>
      </div>
    </>
  );
};

export default Articles;
