import React from 'react';
import PropTypes from 'prop-types';
import Complex from './complex';

const Complexes = () => (
  <section className="main__section main__section--complexes section complexes">
    <div className="section__inner">
      <h2 className="section__title complexes__title">Подберите свой комплекс</h2>
      <div className="complexes__container">
        <ul className="complexes__list">
          <Complex />
        </ul>
      </div>
    </div>
  </section>
);

export default Complexes;
