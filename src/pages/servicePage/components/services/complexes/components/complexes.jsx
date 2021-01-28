import React from 'react';
import { ReactComponent as SearchIcon } from 'icons/search-icon.svg';
import { ReactComponent as ExpandIcon } from 'icons/expand-icon.svg';
import { ReactComponent as CartIcon } from 'icons/cart-icon.svg';
import { css, useTheme } from '@emotion/react';
import Select from 'common/select';
import Picture from 'common/picture';
import { breakpointsMap } from 'src/constants/styles';

const Complexes = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <div
        className="search__container-input-group"
        css={css`
          display: flex;
          flex-direction: column;
          width: 100%;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
            flex-wrap: wrap;
            padding-right: 0;
          }
        `}
      >
        <div
          css={css`
            display:flex;
            flex-direction:column;
            .select {
              height: 100%;
              width: 100%;
              margin-bottom: 10px;
            }

            .select__control {
              padding-top: 7px;
              padding-bottom: 7px;
              border-radius: 4px !important;
              border-color: ${theme.colors.blue};
            }

            ${breakpointsMap.TABLET} {
              flex-direction: row;
              flex-wrap: wrap;
              margin-bottom: 10px;

              .select {
                width: 305px;
                flex-grow: 1;
                margin: 0;
                margin-right: 20px;

                &:last-of-type {
                  margin-right: 0;
                }
              }

              ${breakpointsMap.DESKTOP}{
                margin-right: 6px;
                margin-bottom: 0;
                .select {
                  margin-right: 6px;
                  width: 229px;
                }
              }
          `}
        >
          <Select
            selectClass="services-complexes"
            action={() => console.log(true)}
            data={{ value: 'test', labe: 'test' }}
            placeholder="Органы системы"
          />
          <Select
            selectClass="services-complexes"
            action={() => console.log(true)}
            data={{ value: 'test', labe: 'test' }}
            placeholder="Заболевания"
          />
        </div>
        <div
          css={css`
            display: flex;
            width: 628px;
            flex-grow: 1;
          `}
        >
          <input
            type="text"
            className="search__input"
            placeholder="Например, биохимический анализ крови"
            aria-label="Введите что хотите найти"
            aria-describedby="search-descr"
            css={css`
              padding-top: 17px;
              border: 1px solid ${theme.colors.blue};
              border-top-left-radius: 4px;
              border-bottom-left-radius: 4px;
              font-size: 13px;
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
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
            flex-wrap: wrap;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            min-width: 100%;
            min-height: 245px;
            margin-right: auto;
            margin-bottom: 10px;
            position: relative;
            box-shadow: ${theme.colors.boxShadow};

            &:nth-of-type(2n) {
              margin-right: 0;
            }

            ${breakpointsMap.DESKTOP} {
              min-width: 580px;
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
              padding-left: 21px;
              display: flex;
              flex-direction: column;
              padding-bottom: 20px;
              flex-grow: 1;
              padding-right: 80px;
            `}
          >
            <h3
              css={css`
                font-size: 16px;
                font-weight: 400;
              `}
            >
              Обследование печени, скрининг
            </h3>
            <div
              css={css`
                letter-spacing: -0.5px;
                margin-bottom: auto;
              `}
            >
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
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: flex-end;
              `}
            >
              <span
                css={css`
                  font-size: 26px;
                  margin-bottom: 5px;
                `}
              >
                1 100 ₽
              </span>
              <a
                href="/"
                css={css`
                  font-size: 12px;
                  color: ${theme.colors.blue};
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
                width: 60px;
                height: 60px;
                border-radius: 50%;
                appearance: none;
                border: none;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                right: 14px;
                bottom: 18px;
                background-color: transparent;
                background-image: linear-gradient(
                  -135deg,
                  rgba(255, 0, 235, 0.2) 0%,
                  rgba(154, 102, 245, 0.2) 50%,
                  rgba(43, 215, 255, 0.2) 100%
                );
              `}
            >
              <CartIcon fill="#9A66F5" />
            </button>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            min-width: 100%;
            min-height: 245px;
            margin-right: auto;
            margin-bottom: 10px;
            position: relative;
            box-shadow: ${theme.colors.boxShadow};

            &:nth-of-type(2n) {
              margin-right: 0;
            }

            ${breakpointsMap.DESKTOP} {
              min-width: 569px;
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
              padding-left: 21px;
              display: flex;
              flex-direction: column;
              padding-bottom: 20px;
              flex-grow: 1;
              padding-right: 80px;
            `}
          >
            <h3
              css={css`
                font-size: 16px;
                font-weight: 400;
              `}
            >
              Обследование печени, скрининг
            </h3>
            <div
              css={css`
                letter-spacing: -0.5px;
                margin-bottom: auto;
              `}
            >
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
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: flex-end;
              `}
            >
              <span
                css={css`
                  font-size: 26px;
                  margin-bottom: 5px;
                `}
              >
                1 100 ₽
              </span>
              <a
                href="/"
                css={css`
                  font-size: 12px;
                  color: ${theme.colors.blue};
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
                width: 60px;
                height: 60px;
                border-radius: 50%;
                appearance: none;
                border: none;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                right: 14px;
                bottom: 18px;
                background-color: transparent;
                background-image: linear-gradient(
                  -135deg,
                  rgba(255, 0, 235, 0.2) 0%,
                  rgba(154, 102, 245, 0.2) 50%,
                  rgba(43, 215, 255, 0.2) 100%
                );
              `}
            >
              <CartIcon fill="#9A66F5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complexes;
