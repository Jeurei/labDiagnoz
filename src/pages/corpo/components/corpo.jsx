import React from 'react';
import { css, useTheme } from '@emotion/react';
import { randomId } from 'src/components/utils/common';
import { connect } from 'react-redux';
import mapStateToPropsGenerator from 'store/mapStateToProps';
import components from 'constants/components';
import PropTypes from 'prop-types';
import SectionInner from 'src/containers/section-inner';
import { ReactComponent as FiringIcon } from 'icons/firing.svg';
import SliderControls from 'src/components/common/slider-controls';
import Picture from 'src/components/common/picture';
import FormFieldset from './form-fieldset';
import TextareaInput from './textarea-input';
import FormThirdField from './form-third-field';
import FormFirstField from './form-first-field';

const featuresItem = (data) => {
  return (
    <li
      className="features__list-item"
      key={randomId()}
      css={css`
        position: relative;
      `}
    >
      <FiringIcon
        fill="currentColor"
        stroke="currentColor"
        css={css`
          position: absolute;
          top: 13px;
          left: 10px;
          color: #8370f0;
        `}
      />
      <h3
        className="features__list-item-title"
        css={css`
          color: #4a4a4a;
        `}
      >
        {data.title}
      </h3>
      <p className="features__list-item-text">{data.text}</p>
    </li>
  );
};

const Corpo = ({ features }) => {
  const theme = useTheme();

  return (
    <>
      <SectionInner>
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
            flex-wrap: wrap;
          `}
        >
          <legend
            css={css`
              font-weight: 500;
              font-size: 16px;
              color: ${theme.colors.colorText.hex};
              width: 100%;
              margin-bottom: 42px;
            `}
          >
            Получить коммерческое предложение
          </legend>
          <FormFirstField action={() => console.log(true)} />
          <FormFieldset>
            <TextareaInput
              id="text"
              cols={30}
              rows={10}
              inputClass="form__input form__input--textarea"
              placeholder="Укажите интересующую вас услугу *"
              label="Поле дляя ввода вашего вопроса"
              action={() => console.log(true)}
              value=""
            />
          </FormFieldset>
          <FormThirdField
            action={() => console.log(true)}
            isFirstFieldValid
            fieldsInputs={{}}
          />
        </form>
      </SectionInner>
      <div
        css={css`
          padding-top: 31px;
          background-color: #f7f7f7;
        `}
      >
        <SectionInner>
          <h2
            className="section__title"
            css={css`
              margin-bottom: 88px;
              font-size: 16px;
              font-weight: 500;

              &:after {
                color: ${theme.colors.blue};
              }
            `}
          >
            Почему именно Лабдиагностика
          </h2>
          <ul className="features__list">
            {features.map((el) => featuresItem(el))}
          </ul>
        </SectionInner>
      </div>
      <SectionInner>
        <div>
          <h3
            css={css`
              margin-bottom: 15px;
              font-size: 16px;
              font-weight: 500;
            `}
          >
            С нами уже работают
          </h3>
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <SliderControls />
            <ul
              css={css`
                padding: 0;
                margin-top: 37px;
                filter: grayscale(100%);
                list-style: none;
              `}
            >
              <li>
                <Picture src="img/alfa" width="179" height="56" />
              </li>
            </ul>
          </div>
        </div>
      </SectionInner>
    </>
  );
};

Corpo.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToPropsGenerator(components.FEATURES),
  null,
)(Corpo);
