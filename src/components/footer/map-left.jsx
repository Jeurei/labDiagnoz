import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Picture from '../common/picture';
import { ReactComponent as MapMark } from '../../icons/map-mark-icon.svg';
import SectionInner from '../../containers/section-inner';
import Select from '../common/select';
import mapStateToPropsGenerator from '../../store/mapStateToProps';
import Components from '../../constants/components';

const MapLeft = ({ selectData }) => (
  <div className="map__left">
    <SectionInner>
      <Picture
        containerClass="map__logo"
        src="./img/logo"
        width="248"
        height="36"
        alt="Логотип компании Лабдиагностика"
        imgClass="map__logo-img"
      />
    </SectionInner>
    <div className="map__left-container">
      <SectionInner>
        <h2 className="section__title">Рядом с вами</h2>
      </SectionInner>
      <div className="map__geo geo">
        <div className="geo__selection">
          <SectionInner>
            <MapMark
              className="geo__icon"
              width="6"
              height="8.4"
              fill="currentColor"
              stroke="currentColor"
            />
            <form>
              <Select selectClass="geo__select" data={selectData} />
            </form>
          </SectionInner>
        </div>
        <div className="geo__results">
          <SectionInner>
            <h3 className="geo__results-title">
              Найдено <span className="geo__results-value">1</span> отделение
            </h3>
            <ul className="geo__results-list">
              <li className="geo__result result">
                <a
                  href="./"
                  className="result__link"
                  aria-label="Показать на карте"
                >
                  <svg
                    className="geo__result-icon"
                    width="6"
                    height="8.4"
                    fill="currentColor"
                  >
                    <use xlinkHref="./map-mark-icon" />
                  </svg>
                  <p className="result__text">г. Пермь, ул. Хабаровская, 56</p>
                  <p className="result__options">
                    Возможна оплата картой, есть вход с коляской
                  </p>
                </a>
              </li>
            </ul>
          </SectionInner>
        </div>
      </div>
    </div>
  </div>
);

MapLeft.propTypes = {
  selectData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToPropsGenerator(Components.MAP), null)(MapLeft);
