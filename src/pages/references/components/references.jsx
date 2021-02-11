import { css, useTheme } from '@emotion/react';
import React from 'react';
import { ReactComponent as SheduleIcon } from 'icons/shedule.svg';
import { breakpointsMap } from 'src/constants/styles';

const References = () => {
  const theme = useTheme();
  return (
    <>
      <h2 className="main__title">Справка в ФНС</h2>
      <div>
        <p
          css={css`
            padding-left: 10px;
            margin-bottom: 46px;
          `}
        >
          Справка об оплате медицинских услуг для представления в налоговые
          органы РФ выдаётся по требованию налогоплательщика, производившего
          оплату медицинских услуг, и оформляется бесплатно.
        </p>
        <p
          css={css`
            padding-left: 10px;
            margin-bottom: 46px;
          `}
        >
          Копия лицензии не предоставляется на основании разъяснений Федеральной
          Налоговой Службы.
        </p>
        <p
          css={css`
            padding-left: 10px;
            margin-bottom: 31px;
          `}
        >
          Справка оформляется в соответствии с Приказом Минздрава РФ N 289, МНС
          РФ N БГ-3-04/256 от 25.07.2001.
        </p>
      </div>
      <p
        css={css`
          display: flex;
          justify-content: center;
          padding-top: 21px;
          padding-right: 10px;
          padding-bottom: 25px;
          padding-left: 10px;
          background-image: ${theme.colors.linearGradient};
          color: ${theme.colors.white};
          text-align: center;
        `}
      >
        Пожалуйста! Просьба запрос на справку делать ОДИН раз. Узнать о ее
        готовности вы можете по тел. 2 700 789, доб. 881, 882, 883.
      </p>
      <div
        css={css`
          background-color: #f7f7f7;
          box-shadow: ${theme.colors.boxShadow};
        `}
      >
        <h3
          css={css`
            position: relative;
            padding-top: 22px;
            padding-bottom: 20px;
            padding-left: 0.625em;
            margin: 0;
            font-size: 16px;
            font-weight: 500;

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

            ${breakpointsMap.DESKTOP} {
              padding-left: 43px;
            }
          `}
        >
          Налогоплательщик
        </h3>
        <form
          action="post"
          css={css`
            background-color: ${theme.colors.white};
          `}
        >
          <legend
            css={css`
              padding-top: 43px;
              padding-left: 10px;
              margin-bottom: 35px;
              font-size: 13px;
              font-weight: 500;

              ${breakpointsMap.DESKTOP} {
                padding-left: 43px;
              }
            `}
          >
            Заполните личные данные
          </legend>
          <fieldset
            css={css`
              border: none;

              ${breakpointsMap.DESKTOP} {
                padding-right: 38px;
                padding-left: 43px;
              }
            `}
          >
            <input
              type="text"
              className="search__input"
              placeholder="Фамилия налогоплательщика (полностью):"
              aria-label="Введите фамилию налогоплательщика"
              aria-describedby="taxpayer-surname"
              css={css`
                width: 100%;
                padding-left: 28px;
                border: 1px solid ${theme.colors.blue};
                margin-bottom: 31px;
                border-radius: 4px;
              `}
            />
            <p className="visually-hidden" id="taxpayer-surname">
              Введите фамилию налогоплательщика
            </p>
            <input
              type="text"
              className="search__input"
              placeholder="Имя налогоплательщика (полностью):"
              aria-label="Введите имя налогоплательщика"
              aria-describedby="taxpayer-name"
              css={css`
                width: 100%;
                padding-left: 28px;
                border: 1px solid ${theme.colors.blue};
                border-radius: 4px;
              `}
            />
            <p className="visually-hidden" id="taxpayer-name">
              Введите имя налогоплательщика
            </p>
          </fieldset>
          <div
            css={css`
              width: 100%;
              display: flex;
              padding: 0.35em 0.75em 0.625em;
              background-color: #f7f7f7;
              position: relative;
              padding-top: 22px;
              padding-bottom: 20px;

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

              ${breakpointsMap.DESKTOP} {
                padding-left: 43px;
                padding-right: 43px;
              }
            `}
          >
            <h3
              css={css`
                position: relative;

                margin: 0;
                font-size: 16px;
                font-weight: 500;
                margin-right: auto;
              `}
            >
              Пациент
            </h3>
            <a
              href="/"
              css={css`
                appearance: none;
                border: none;
                font-weight: 500;
                font-size: 16px;
                background: transparent;
                border-bottom: 2px solid ${theme.colors.colorText.hex};
                padding: 0;
                position: relative;
                display: block;

                padding-left: 10px;

                &:hover,
                &:active {
                  color: ${theme.colors.colorText.hex};
                }

                &:before,
                &:after {
                  content: '';
                  position: absolute;
                  display: block;
                  width: 2px;
                  height: 10px;
                  left: 0;
                  top: 3px;
                  background-color: ${theme.colors.colorText.hex};
                }

                &:before {
                  transform: rotate(90deg);
                }
              `}
              aria-label="Добавить ещё пациента?"
            >
              Добавить пациента
            </a>
          </div>
          <fieldset
            action="post"
            css={css`
              padding-top: 30px;
              padding-bottom: 30px;
              border: none;
              background-color: ${theme.colors.white};

              ${breakpointsMap.DESKTOP} {
                padding-right: 38px;
                padding-left: 43px;
              }
            `}
          >
            <input
              type="text"
              className="search__input"
              placeholder="Фамилия получателя услуги (полностью)::"
              aria-label="Введите фамилию получателя"
              aria-describedby="reciever-surname"
              css={css`
                width: 100%;
                padding-left: 28px;
                border: 1px solid ${theme.colors.blue};
                margin-bottom: 31px;
                border-radius: 4px;
              `}
            />
            <p className="visually-hidden" id="reciever-surname">
              Введите фамилию получателя
            </p>
            <input
              type="text"
              className="search__input"
              placeholder="Имя получателя (полностью):"
              aria-label="Введите имя получателя"
              aria-describedby="reciever-name"
              css={css`
                width: 100%;
                padding-left: 28px;
                border: 1px solid ${theme.colors.blue};
                margin-bottom: 31px;
                border-radius: 4px;
              `}
            />
            <p className="visually-hidden" id="reciever-name">
              Введите имя получателя
            </p>
            <div
              css={css`
                position: relative;
                margin-bottom: 31px;
              `}
            >
              <input
                type="date"
                className="search__input"
                placeholder="Дата рождения получателя услуги:"
                aria-label="Выберите дату рождения"
                aria-describedby="reciever-birthdate"
                css={css`
                  width: 100%;
                  padding-left: 28px;
                  border: 1px solid ${theme.colors.blue};
                  border-radius: 4px;
                `}
              />
              <p className="visually-hidden" id="reciever-birthdate">
                Введите дату рождения получателя
              </p>
              <SheduleIcon
                fill="currentColor"
                stroke="currentColor"
                css={css`
                  position: absolute;
                  top: 13px;
                  right: 13px;
                  color: ${theme.colors.blue};
                  font-weight: 400;
                  stroke-width: 0;
                `}
              />
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
                  position: relative;
                  width: 100%;

                  ${breakpointsMap.DESKTOP} {
                    width: 50%;
                  }
                `}
              >
                <input
                  type="date"
                  className="search__input"
                  placeholder="Дата рождения получателя услуги:"
                  aria-label="Выберите дату рождения"
                  aria-describedby="reciever-birthdate"
                  css={css`
                    width: 100%;
                    padding-left: 28px;
                    border: 1px solid ${theme.colors.blue};
                    border-radius: 4px;
                  `}
                />
                <p className="visually-hidden" id="reciever-birthdate">
                  Введите дату рождения получателя
                </p>
                <SheduleIcon
                  fill="currentColor"
                  stroke="currentColor"
                  css={css`
                    position: absolute;
                    top: 13px;
                    right: 13px;
                    color: ${theme.colors.blue};
                    font-weight: 400;
                    stroke-width: 0;
                  `}
                />
              </div>
              <div
                css={css`
                  width: 100%;
                  margin-top: 20px;

                  ${breakpointsMap.DESKTOP} {
                    width: 50%;
                    padding-left: 20px;
                    margin-top: 0;
                  }
                `}
              >
                <div
                  className="filter__checkbox-group"
                  css={css`
                    width: 100%;
                    margin-bottom: 23px;
                  `}
                >
                  <input
                    type="checkbox"
                    name="date-of-get-checkbox"
                    id="dont-remember"
                    value="dont-remember"
                    aria-label="Не помню что обращался"
                    className="filter__input filter__input--checkbox"
                  />
                  <label
                    className="filter__label"
                    htmlFor="dont-remember"
                    css={css`
                      display: block;
                    `}
                  >
                    не помню дату получения услуги
                  </label>
                </div>
                <div
                  className="filter__checkbox-group"
                  css={css`
                    width: 100%;
                  `}
                >
                  <input
                    type="checkbox"
                    name="date-of-get-checkbox"
                    id="not-sure"
                    value="not-sure"
                    aria-label="Не уверен что обращался"
                    className="filter__input filter__input--checkbox"
                  />
                  <label
                    className="filter__label"
                    htmlFor="not-sure"
                    css={css`
                      display: block;

                      &:before {
                        top: 0 !important;
                      }

                      &:after {
                        top: 6px !important;
                      }

                      ${breakpointsMap.TABLET} {
                        &:before {
                          top: -6px !important;
                        }

                        &:after {
                          top: 0 !important;
                        }
                      }
                    `}
                  >
                    вообще не уверен, что обращался в медцентр Лабдиагностика
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <p
        css={css`
          display: flex;
          justify-content: center;
          padding-top: 21px;
          padding-right: 10px;
          padding-bottom: 25px;
          padding-left: 10px;
          background-image: ${theme.colors.linearGradient};
          color: ${theme.colors.white};
          text-align: center;
        `}
      >
        Пожалуйста! Просьба запрос на справку делать ОДИН раз. Узнать о ее
        готовности вы можете по тел. 2 700 789, доб. 881, 882, 883.
      </p>
      <div
        css={css`
          background-color: ${theme.colors.white};
          background-color: #f7f7f7;
          box-shadow: ${theme.colors.boxShadow};
        `}
      >
        <h3
          css={css`
            position: relative;
            padding-top: 22px;
            padding-bottom: 20px;
            padding-left: 39px;
            margin: 0;
            font-size: 16px;
            font-weight: 500;

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
          `}
        >
          Порядок предоставления справок в налоговые органы
        </h3>
        <div
          css={css`
            padding-top: 30px;
            padding-right: 38px;
            padding-bottom: 30px;
            padding-left: 43px;
            margin-bottom: 20px;
            background-color: ${theme.colors.white};
          `}
        >
          <p>
            В соответствии с подпунктом 3 пункта 1 статьи 219 Налогового кодекса
            РФ налогоплательщик имеет право на получение социального налогового
            вычета в размере суммы, уплаченной им в налоговом периоде за
            медицинские услуги, оказанные медицинскими организациями ему, его
            супругу (супруге), родителям, детям (в том числе усыновленным) в
            возрасте до 18 лет, подопечным в возрасте до 18 лет (в соответствии
            с перечнем медицинских услуг, утвержденным Правительством РФ), с
            учетом ограничения по сумме, установленного пунктом 2 статьи 219
            Налогового кодекса РФ.
          </p>
          <p />
          <p />
        </div>
      </div>
    </>
  );
};

export default References;
