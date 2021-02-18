import React from 'react';
import Picture from 'common/picture';
import { css, useTheme } from '@emotion/react';
import SectionInner from 'containers/section-inner';
import { breakpointsMap } from 'src/constants/styles';
import { connect } from 'react-redux';
import mapStateToPropsGenerator from 'store/mapStateToProps';
import components from 'constants/components';
import { ReactComponent as FiringIcon } from 'icons/firing.svg';
import { randomId } from 'src/components/utils/common';
import PropTypes from 'prop-types';
import SliderControls from 'src/components/common/slider-controls';
import { ReactComponent as Star } from 'icons/star.svg';
import { ReactComponent as Logo } from 'icons/sharesLogo.svg';

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
        width="30"
        height="27"
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

const AboutUs = ({ features }) => {
  const theme = useTheme();
  return (
    <>
      <SectionInner>
        <h2 className="main__title">О компании</h2>
      </SectionInner>
      <div
        css={css`
          display: flex;
          min-height: 366px;
          margin-bottom: 61px;
          background-image: url(img/aboutusbg.png);
          background-repeat: no-repeat;
          background-size: cover;
          color: ${theme.colors.white};

          .aboutus__img-container {
            display: none;
            width: 100%;
            height: 100%;
            align-items: center;
          }

          @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
            background-image: url(img/aboutusbg@2x.png);
          }

          ${breakpointsMap.TABLET} {
            .aboutus__img-container {
              display: flex;
            }
          }
        `}
      >
        <SectionInner>
          <div
            css={css`
              display: flex;
              height: 100%;
              align-items: center;

              .aboutus__img {
                height: 190px;
                border-radius: 50%;
              }

              .aboutUs__logo {
                margin-bottom: 29px;
              }

              ${breakpointsMap.DESKTOP} {
                .aboutus__img {
                  height: 296px;
                }
              }
            `}
          >
            <div>
              <Logo className="aboutUs__logo" width="216px" height="32px" />
              <h3
                css={css`
                  margin-top: 0;
                  margin-bottom: 29px;
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Лечебно-диагностический центр «ЛабДиагностика»
              </h3>
              <p
                css={css`
                  margin: 0;
                  font-size: 13px;
                `}
              >
                Компания была создана в 2004 г. как частная лаборатория,
                оказывающая услуги по выполнению клинических лабораторных
                исследований для населения и медицинских учреждений. Сегодня к
                Вашим услугам современная лаборатория и многопрофильный
                медицинский центр, где Вы можете пройти медицинское
                обследование.
              </p>
            </div>
            <Picture
              src="img/aboutusImg"
              imgClass="aboutus__img"
              containerClass="aboutus__img-container"
              ext="jpg"
              width="296px"
              height="296px"
            />
          </div>
        </SectionInner>
      </div>
      <div
        css={css`
          padding-top: 31px;
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
      <div
        css={css`
          background-image: ${theme.colors.linearGradient};
          color: ${theme.colors.white};
        `}
      >
        <SectionInner>
          <div
            css={css`
              padding-top: 35px;
              padding-bottom: 35px;
              background-image: url(img/aboutusSvgBg.svg);
              background-position: right 33px;
              background-repeat: no-repeat;
              background-size: 249px 275px;

              ${breakpointsMap.TABLET} {
                padding-right: 250px;
                padding-left: 0;
                background-position: right -30px;
              }
            `}
          >
            <h3
              css={css`
                font-weight: 500;
              `}
            >
              Лаборатория
            </h3>
            <p
              css={css`
                font-size: 13px;
              `}
            >
              ЛАБОРАТОРИЯ выполняет профессиональные исследования от
              общеклинических до уникальных. Оборудование ведущих производителей
              обеспечивает высокое качество исследований.
            </p>
          </div>
        </SectionInner>
      </div>
      <div
        css={css`
          padding-top: 10px;
          padding-right: 10px;
          padding-bottom: 51px;
          background-color: #f7f7f7;

          ${breakpointsMap.TABLET} {
            padding-right: 0;
            padding-left: 0;
          }
        `}
      >
        <SectionInner>
          <div>
            <h3
              css={css`
                font-size: 16px;
                font-weight: 500;
              `}
            >
              Многопрофильный медицинский центр
            </h3>
            <p
              css={css`
                font-size: 13px;
              `}
            >
              МНОГОПРОФИЛЬНЫЙ МЕДИЦИНСКИЙ ЦЕНТР. Основное направление услуг
              медицинского центра - здоровье пациентов репродуктивного возраста,
              а также услуги необходимых для рождения здорового ребенка. Вы
              можете получить консультации докторов более 20 врачебных
              специальностей, выполнить ультразвуковое исследование внутренних
              органов, посетить физкабинет.
            </p>
            <div
              css={css`
                display: flex;
                margin-top: 40px;
              `}
            >
              <a
                href="/"
                type="button"
                css={css`
                  position: relative;
                  display: block;
                  padding-bottom: 5px;
                  margin-right: 70px;
                  background-color: transparent;
                  color: ${theme.colors.blue};
                  text-align: left;

                  &:hover,
                  &:active {
                    color: ${theme.colors.blue};
                  }

                  &:before {
                    position: absolute;
                    bottom: 0;
                    display: block;
                    width: 100%;
                    height: 4px;
                    background-image: ${theme.colors.linearGradient};
                    content: '';
                  }
                `}
              >
                Правила предоставления платных
                <br />
                медицинских услуг
              </a>
              <a
                href="/"
                type="button"
                css={css`
                  position: relative;
                  display: block;
                  padding-bottom: 5px;
                  background-color: transparent;
                  text-align: left;

                  &:hover,
                  &:active {
                    color: ${theme.colors.colorText.hex};
                  }

                  &:before {
                    position: absolute;
                    bottom: 0;
                    display: block;
                    width: 100%;
                    height: 4px;
                    background-color: ${theme.colors.inactiveColor};
                    content: '';
                  }
                `}
              >
                Политика обработки персональных
                <br /> данных
              </a>
            </div>
          </div>
        </SectionInner>
      </div>
      <SectionInner>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            padding-top: 36px;
            padding-bottom: 11px;
          `}
        >
          <h3
            css={css`
              margin-bottom: 33px;
              font-size: 16px;
              font-weight: 500;
            `}
          >
            Документы
          </h3>
          <a
            href="/"
            css={css`
              display: block;
              padding: 30px 64px;
              margin-bottom: 30px;
              background-image: url('img/file.svg');
              background-position: 25px 24px;
              background-repeat: no-repeat;
              background-size: 21px 26px;
              box-shadow: ${theme.colors.boxShadow};
            `}
          >
            ФЗ No323 «Об основах охраны здоровья граждан в Российской
            Федерации».
          </a>
        </div>
      </SectionInner>
      <div
        css={css`
          padding-top: 10px;
          background-color: #f7f7f7;
        `}
      >
        <SectionInner>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding-right: 5px;
              padding-left: 5px;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
              `}
            >
              <h3
                css={css`
                  margin: 0;
                  margin-right: auto;
                  margin-bottom: 10px;
                  font-size: 16px;
                  font-weight: 400;

                  ${breakpointsMap.DESKTOP} {
                    display: flex;
                    align-items: center;
                    margin-bottom: 0;
                  }
                `}
              >
                Лицензия
              </h3>
              <SliderControls />
              <div
                css={css`
                  display: flex;
                  width: 100%;
                  flex-direction: column;
                  flex-wrap: wrap;
                  align-items: center;

                  .reference__picture {
                    filter: grayscale(100%);
                  }

                  ${breakpointsMap.TABLET} {
                    flex-direction: row;
                    justify-content: space-between;

                    .reference__picture:nth-of-type(n + 4) {
                      display: none;
                    }
                  }

                  ${breakpointsMap.DESKTOP} {
                    .reference__picture:nth-of-type(n + 4) {
                      display: block;
                    }
                    .reference__picture:nth-of-type(n + 6) {
                      display: none;
                    }
                  }
                `}
              >
                <Picture
                  src="img/reference"
                  containerClass="reference__picture"
                />
                <Picture
                  src="img/reference"
                  containerClass="reference__picture"
                />
                <Picture
                  src="img/reference"
                  containerClass="reference__picture"
                />
                <Picture
                  src="img/reference"
                  containerClass="reference__picture"
                />
                <Picture
                  src="img/reference"
                  containerClass="reference__picture"
                />
              </div>
            </div>
          </div>
        </SectionInner>
      </div>
      <SectionInner>
        <div
          css={css`
            padding-top: 10px;
          `}
        >
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
      </SectionInner>
    </>
  );
};

AboutUs.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToPropsGenerator(components.FEATURES),
  null,
)(AboutUs);
