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
        `}
      >
        Рассматриваем коммерческие предложения по поставке расходных материалов
        при условии:
      </p>
      <h2 className="main__title">Корпоративным клиентам</h2>
      <p
        css={css`
          margin-top: 26px;
          margin-bottom: 37px;
          line-height: 22px;
        `}
      >
        Лечебно-диагностический центр « Лабдиагностика» предлагает широкий
        спектр сотрудничества по оказанию медицинских услуг для корпоративных
        клиентов. Приглашаем к<br />
        сотрудничеству, телефон отдела договоров - 204 7 201.
      </p>
      <form
        action="post"
        className="form-section__form form"
        css={css`
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
          background-image: url('img/utk.svg'), url('img/utkbg.png');
          background-position: 60px center, center;
          background-repeat: no-repeat;
          background-size: 79px 121px, cover;
          color: ${theme.colors.white};
          font-size: 33px;

          @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
            background-image: url('img/utkbg@2x.png');
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
    </>
  );
};

export default Suppliers;
