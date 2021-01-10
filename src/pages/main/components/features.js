import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SectionInner from '../../../containers//section-inner';
import Picture from '../../common/picture';
import mapStateToPropsGenerator from '../../../store//mapStateToProps';
import components from '../../../constants//components';
import FeaturesItem from './features-item';
import { randomId } from '../../utils/common';

// TODO: Узнать шаблонизируется ли этот блок

const Features = ({ features }) => (
  <section className="main__section main__section-features section features">
    <SectionInner>
      <h2 className="section__title">
        Почему именно
        <Picture
          src="./img/features-logo"
          imgClass="features__logo-img"
          alt="Лабдиагностика"
        />
      </h2>
      <ul className="features__list">
        {features.map((el) => (
          <FeaturesItem data={el} key={randomId()} />
        ))}
      </ul>
    </SectionInner>
  </section>
);

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToPropsGenerator(components.FEATURES),
  null,
)(Features);
