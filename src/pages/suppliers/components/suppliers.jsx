import { css, useTheme } from '@emotion/react';
import React from 'react';
import { breakpointsMap } from 'src/constants/styles';
import FormFieldset from './form-fieldset';
import TextareaInput from './textarea-input';
import FormThirdField from './form-third-field';
import FormFirstField from './form-first-field';

const Suppliers = () => {
  const theme = useTheme();
  return (
    <>
      <h2 className="main__title">Поставщикам расходных материалов</h2>
      <p
        css={css`
          margin-bottom: 18px;
          font-size: 13px;

          ${breakpointsMap.TABLET} {
            padding: 0;
          }
        `}
      >
        Рассматриваем коммерческие предложения по поставке расходных материалов
        при условии:
      </p>
      <h3
        css={css`
          width: 100%;
          margin-bottom: 32px;
          color: ${theme.colors.colorText.hex};
          font-size: 16px;
          font-weight: 500;
        `}
      >
        Получить коммерческое предложение
      </h3>
      <form
        action="post"
        className="form-section__form form"
        css={css`
          padding: 0;
          margin-bottom: 43px;

          ${breakpointsMap.DESKTOP} {
            height: 189px;
          }
        `}
      >
        <FormFirstField action={() => console.log(true)} />
        <FormFieldset>
          <TextareaInput
            id="text"
            cols={30}
            rows={10}
            inputClass="form__input form__input--textarea"
            placeholder="Комментарий *"
            label="Комментарий"
            action={() => console.log(true)}
            value=""
          />
          <input
            type="file"
            id="file"
            name="file"
            css={css`
              display: none;
            `}
          />
          <label
            htmlFor="file"
            css={css`
              position: relative;
              width: 100%;
              height: 46px;
              padding-top: 14px;
              padding-bottom: 15px;
              padding-left: 17px;
              margin-bottom: 15px;
              background-color: rgba(${theme.colors.colorText.rgb}, 0.07);

              &:after {
                position: absolute;
                top: 15px;
                right: 11px;
                display: block;
                color: rgba(${theme.colors.colorText.rgb}, 0.55);
                content: '+';
                font-size: 22px;
              }

              ${breakpointsMap.DESKTOP} {
                margin-top: 25px;
                margin-bottom: 0;
              }
            `}
          >
            Прикрепить документ
          </label>
        </FormFieldset>
        <FormThirdField
          action={() => console.log(true)}
          isFirstFieldValid
          fieldsInputs={{}}
        />
      </form>
      <div
        css={css`
          display: flex;
          min-height: 262px;
          align-items: center;
          padding-left: 167px;
          margin-bottom: 31px;
          background-image: url('img/utk.svg'), url('img/utkbg.png');
          background-position: 60px center, center;
          background-repeat: no-repeat;
          background-size: 79px 121px, cover;
          color: ${theme.colors.white};
          font-size: 33px;

          @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
            background-image: url('img/utk.svg'), url('img/utkbg@2x.png');
          }
        `}
      >
        <p
          css={css`
            line-height: 44px;
          `}
        >
          С доставкой грузов нам помогает
          <br />
          Удобная транспортная служба
        </p>
      </div>
      <table
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        `}
      >
        <caption
          css={css`
            padding-left: 5px;
            margin-bottom: 15px;
            font-size: 16px;
            font-weight: 500;
            text-align: left;

            ${breakpointsMap.DESKTOP} {
              margin-bottom: 25px;
            }
          `}
        >
          Прайс-лист
        </caption>
        <thead
          css={css`
            display: none;
            padding-top: 26.5px;
            padding-left: 17.5px;
            border-top: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.5);
            margin-bottom: 27px;

            ${breakpointsMap.DESKTOP} {
              display: block;
            }
          `}
        >
          <tr>
            <th
              css={css`
                width: 377px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
              `}
            >
              Номенклатура
            </th>
            <th
              css={css`
                width: 175px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
              `}
            >
              Ед.изм.
            </th>
            <th
              css={css`
                width: 150px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
              `}
            >
              Кол-во
            </th>
            <th
              css={css`
                width: 219px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
              `}
            >
              Цена
            </th>
            <th
              css={css`
                width: 217px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
              `}
            >
              Стоимость
            </th>
          </tr>
        </thead>
        <tbody
          css={css`
            display: flex;
            padding-right: 5px;
            padding-left: 5px;

            ${breakpointsMap.TABLET} {
              padding: 0;
            }
          `}
        >
          <tr
            css={css`
              display: flex;
              width: 100%;
              flex-wrap: wrap;
              padding: 20px 22px 23px 21px;
              margin-bottom: 30px;
              box-shadow: ${theme.colors.boxShadow};

              ${breakpointsMap.DESKTOP} {
                flex-wrap: nowrap;
                align-items: center;
                padding: 40px 22px 43px 21px;
              }
            `}
          >
            <td
              css={css`
                width: 100%;
                padding-bottom: 15px;
                font-size: 16px;
                font-weight: 500;

                ${breakpointsMap.DESKTOP} {
                  width: 379px;
                  padding: 0;
                }
              `}
            >
              Бинт 5м х 10см нестерильный пл.36, шт
            </td>
            <td
              css={css`
                display: flex;
                align-items: flex-end;
                font-size: 12px;

                ${breakpointsMap.DESKTOP} {
                  width: 177px;
                }
              `}
            >
              Шт
            </td>
            <td
              css={css`
                display: flex;
                align-items: flex-end;
                margin-right: auto;
                font-size: 12px;

                ${breakpointsMap.DESKTOP} {
                  width: 154px;
                  align-items: flex-start;
                }
              `}
            >
              3 200
            </td>
            <td
              css={css`
                display: flex;
                flex-direction: column;
                font-size: 26px;
                font-weight: 500;

                ${breakpointsMap.DESKTOP} {
                  width: 223px;
                }
              `}
            >
              <span
                css={css`
                  display: flex;
                  justify-content: flex-end;
                  margin-bottom: 5px;
                  font-size: 10px;

                  ${breakpointsMap.DESKTOP} {
                    display: none;
                    justify-content: flex-start;
                  }
                `}
              >
                Цена за шт:
              </span>
              1 100 ₽
            </td>
            <td
              css={css`
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: flex-start;
                padding-top: 15px;
                font-size: 26px;
                font-weight: 500;

                ${breakpointsMap.DESKTOP} {
                  width: 233px;
                  padding: 0;
                }
              `}
            >
              <span
                css={css`
                  display: flex;
                  justify-content: flex-end;
                  margin-bottom: 5px;
                  font-size: 10px;

                  ${breakpointsMap.DESKTOP} {
                    display: none;
                  }
                `}
              >
                Итоговая цена:
              </span>
              43 100 ₽
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Suppliers;
