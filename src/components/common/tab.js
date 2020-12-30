import React from 'react';

const Tab = () => (
  <div className="footer__nav-tab tab">
    <input
      className="tab__checkbox"
      type="checkbox"
      id="tab-analyse"
      name="tab-group"
      checked=""
    />
    <label htmlFor="tab-analyse" className="tab__title">
      Анализы
    </label>
    <div className="tab__content">
      <h3 className="tab__content-title">Услуги лаборатории</h3>
      <ul className="tab__list">
        <li className="tab__list-item">
          <a
            href="./"
            className="li tab__link"
            aria-label="Перейти на страницу с комплексные исследованиями"
          >
            Комплексные исследования
          </a>
        </li>
        <li className="tab__list-item">
          <a
            href="./"
            className="li tab__link"
            aria-label="Перейти на страницу с комплексные исследованиями"
          >
            Комплексные исследования
          </a>
        </li>
        <li className="tab__list-item">
          <a
            href="./"
            className="li tab__link"
            aria-label="Перейти на страницу с комплексные исследованиями"
          >
            Комплексные исследования
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Tab;
