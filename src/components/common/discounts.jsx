import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SectionInner from '../../containers/section-inner';
import mapStateToPropsGenerator from '../../store/mapStateToProps';
import Components from '../../constants/components';
import { randomId } from '../utils/common';

const discount = (data) => {
  const Container = styled.div`
    min-width: 370px;
    flex-grow: 1;
    display: flex;
    margin-right: 30px;
    min-height: 163px;
    align-items: center;
    justify-content: center;
    color: #f7f7f7;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${process.env.PUBLIC_URL}/img/${data.img});

    ${data.img2x &&
    `@media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
      background-image: url(${process.env.PUBLIC_URL}/img/${data.img2x});
    }`}

    &:last-child {
      margin-right: 0;
    }
  `;

  return (
    <Container key={randomId()}>
      <h3
        css={css`
          font-size: 22px;
          margin: 0;
          font-weight: 400;
        `}
      >
        {data.title}
      </h3>
    </Container>
  );
};

const Discounts = ({ discounts }) => {
  return (
    <section className="main__section section--discount discounts">
      <h2 className="section__titile visually-hidden">Скидки!</h2>
      <SectionInner>
        <div
          css={css`
            display: flex;
          `}
        >
          {discounts.map((el) => discount(el))}
        </div>
      </SectionInner>
    </section>
  );
};

Discounts.propTypes = {
  discounts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToPropsGenerator(Components.DISCOUNTS),
  null,
)(Discounts);
