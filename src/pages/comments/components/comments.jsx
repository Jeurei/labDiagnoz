import React from 'react';
import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'src/constants/styles';
import styled from '@emotion/styled';
import { randomId } from 'src/components/utils/common';
import Select from 'common/select';
import FormIosCheckbox from 'common/form-ios-checkbox';
import { ReactComponent as Star } from 'icons/star.svg';

const Comments = () => {
  const theme = useTheme();

  const createTab = () => {
    const Tab = styled.li`
      position: relative;
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

        &:before {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 4px;
          background-image: ${theme.colors.linearGradient};
          content: '';
        }
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

    const TabLink = styled('a')`
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
        <TabLink to="/">Отзывы</TabLink>
      </Tab>
    );
  };

  const TabsContainer = styled.div`
    padding-top: 0;
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

  const FieldSet = styled.fieldset`
    padding: 0;
    padding-bottom: 5px;
    border: none;
  `;
  return (
    <>
      <h2 className="main__title">Отзывы</h2>
      <TabsContainer>
        <TabList>{new Array(5).fill().map(() => createTab())}</TabList>
      </TabsContainer>
      <form
        action="post"
        css={css`
          padding-bottom: 10px;

          ${breakpointsMap.DESKTOP} {
            display: flex;
            flex-wrap: wrap;
            padding-top: 27px;
            margin-bottom: 26px;
          }
        `}
      >
        <FieldSet
          css={css`
            padding-right: 0;
            padding-left: 0;
            margin-right: 30px;

            ${breakpointsMap.TABLET} {
              margin-right: 0;
            }

            ${breakpointsMap.DESKTOP} {
              margin-right: 30px;
            }
          `}
        >
          <legend
            css={css`
              margin-bottom: 15px;

              ${breakpointsMap.DESKTOP} {
                margin-bottom: 29px;
              }
            `}
          >
            Как к вам обращаться?
          </legend>
          <input
            type="text"
            className="search__input"
            placeholder="Ваше имя*"
            aria-label="Ваше имя*"
            aria-describedby="comment-name"
            css={css`
              width: 100%;
              padding-left: 28px;
              border: 1px solid ${theme.colors.blue};
              margin-bottom: 10px;
              border-radius: 4px;
              font-size: 13px;

              ${breakpointsMap.DESKTOP} {
                width: 245px;
                margin-bottom: 0;
              }
            `}
          />
          <p className="visually-hidden" id="comment-name">
            Введите ваше имя
          </p>
        </FieldSet>
        <FieldSet
          css={css`
            padding: 0;

            ${breakpointsMap.DESKTOP} {
              display: flex;
              padding-right: 0;
              padding-bottom: 5px;
              padding-left: 0;
              margin-right: 30px;
            }
          `}
        >
          <legend
            css={css`
              margin-bottom: 15px;

              ${breakpointsMap.DESKTOP} {
                margin-bottom: 29px;
              }
            `}
          >
            Данные о приеме
          </legend>
          <input
            type="date"
            className="search__input"
            placeholder="Дата приема"
            aria-label="Выберите дату приема"
            aria-describedby="coment-date"
            css={css`
              width: 100%;
              padding-left: 28px;
              border: 1px solid ${theme.colors.blue};
              margin-bottom: 10px;
              border-radius: 4px;
              font-size: 13px;

              ${breakpointsMap.DESKTOP} {
                width: 245px;
                margin-right: 30px;
                margin-bottom: 0;
              }
            `}
          />
          <p className="visually-hidden" id="comment-date">
            Выберите дату приема
          </p>
          <input
            type="time"
            className="search__input"
            placeholder="Время приема"
            aria-label="Выберите время приёма"
            aria-describedby="comment-time"
            css={css`
              width: 100%;
              padding-left: 28px;
              border: 1px solid ${theme.colors.blue};
              margin-bottom: 10px;
              border-radius: 4px;
              font-size: 13px;

              ${breakpointsMap.DESKTOP} {
                width: 245px;
                margin-bottom: 0;
              }
            `}
          />
          <p className="visually-hidden" id="reciever-birthdate">
            Выберите время приема
          </p>
        </FieldSet>
        <FieldSet
          css={css`
            padding-right: 0;
            padding-left: 0;
            margin-bottom: 10px;

            .select {
              width: 100%;
            }

            .select__control {
              height: 47px;
              border-color: ${theme.colors.blue};
            }

            .select__indicator {
              color: ${theme.colors.blue};
            }

            ${breakpointsMap.DESKTOP} {
              margin-bottom: 0;

              .select {
                width: 345px;
                height: 100%;
              }

              .select__control {
                height: 100%;
              }
            }
          `}
        >
          <legend
            css={css`
              margin-bottom: 15px;

              ${breakpointsMap.DESKTOP} {
                margin-bottom: 29px;
              }
            `}
          >
            Выберете о ком ваш отзыв
          </legend>
          <Select placeholder="Введите ФИО специалиста" />
        </FieldSet>
        <FieldSet
          css={css`
            display: flex;
            flex-direction: row;
            padding-top: 20px;
            padding-right: 0;
            padding-bottom: 20px;
            padding-left: 0;
            margin-bottom: 10px;
            ${breakpointsMap.DESKTOP} {
              width: 100%;
              padding-bottom: 24px;
            }
          `}
        >
          <div
            className="filter__checkbox-group"
            css={css`
              margin-right: 30px;

              ${breakpointsMap.DESKTOP} {
                margin-right: 176px;
              }
            `}
          >
            <input
              type="checkbox"
              name="anon"
              id="anon"
              value="true"
              aria-label="Хотите чтобы отзыв был анонимным?"
              className="filter__input filter__input--checkbox"
            />
            <label className="filter__label" htmlFor="anon">
              Анонимно
            </label>
          </div>
          <div
            className="filter__checkbox-group"
            css={css`
              margin-right: 0;
            `}
          >
            <input
              type="checkbox"
              name="non_anon"
              id="non_anon"
              value="0"
              aria-label="Вам не важна анонимность?"
              className="filter__input filter__input--checkbox"
            />
            <label className="filter__label" htmlFor="non_anon">
              Неважно
            </label>
          </div>
        </FieldSet>
        <FieldSet
          css={css`
            padding-right: 0;
            padding-left: 0;

            ${breakpointsMap.DESKTOP} {
              display: flex;
            }
          `}
        >
          <legend
            css={css`
              margin-bottom: 29px;
              text-align: left;
            `}
          >
            Оставьте подробный отзыв
          </legend>

          <div
            css={css`
              ${breakpointsMap.DESKTOP} {
                margin-right: 32px;
              }
            `}
          >
            <textarea
              className="form__input form__input--textarea"
              placeholder="Ваше сообщение"
              css={css`
                width: 100%;
                height: 247px;
                border-color: ${theme.colors.blue};

                ${breakpointsMap.DESKTOP} {
                  width: 795px;
                  margin-bottom: -3px;
                }
              `}
            />
          </div>
          <div
            css={css`
              ${breakpointsMap.DESKTOP} {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              }
            `}
          >
            <div
              css={css`
                margin-bottom: 10px;

                ${breakpointsMap.DESKTOP} {
                  margin-bottom: 0;
                }
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
              className="form__input-checkbox-container"
              css={css`
                ${breakpointsMap.DESKTOP} {
                  margin: 0;
                }
              `}
            >
              <FormIosCheckbox
                action={() => console.log(true)}
                id="agreement"
                name="agreement"
                label="Нажимая на кнопку отправить вы соглашаетесь с нашей политикой
          конфиденциальности"
              />
              <small
                className="form__agreement-hint"
                css={css`
                  opacity: 0.4;
                `}
              >
                Нажимая на кнопку отправить вы соглашаетесь с нашей политикой
                конфиденциальности
              </small>
            </div>
            <button
              className="form__button"
              type="submit"
              css={css`
                width: 100%;
              `}
            >
              Отправить
            </button>
          </div>
        </FieldSet>
      </form>
      <div>
        <h3
          css={css`
            margin: 0;
            margin-bottom: 29px;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Отзывы
        </h3>
        <ul
          css={css`
            padding: 0;
            list-style: none;

            ${breakpointsMap.DESKTOP} {
              display: flex;
              flex-wrap: wrap;
            }
          `}
        >
          <li
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
          </li>
          <li
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
          </li>
        </ul>
      </div>
    </>
  );
};

export default Comments;
