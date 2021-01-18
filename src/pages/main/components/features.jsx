import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SectionInner from '../../../containers/section-inner';
import Picture from '../../../components/common/picture';
import mapStateToPropsGenerator from '../../../store/mapStateToProps';
import components from '../../../constants/components';
import { randomId } from '../../utils/common';

// TODO: Узнать шаблонизируется ли этот блок

const featuresItem = (data) => {
  return (
    <li
      className="features__list-item"
      css={css`
        background-image: url('./img/${data.icon}');
      `}
      key={randomId()}
    >
      <h3 className="features__list-item-title">{data.title}</h3>
      <p className="features__list-item-text">{data.text}</p>
    </li>
  );
};

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
        {features.map((el) => featuresItem(el))}
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
