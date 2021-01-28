import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Components from 'constants/components';
import mapStateToPropsGenerator from 'store/mapStateToProps';
import { breakpointsMap } from 'src/constants/styles';
import { randomId } from '../utils/common';

const discount = (data) => {
  const Container = styled.div`
    min-width: 350px;
    flex-grow: 1;
    display: flex;
    margin-bottom: 15px;
    min-height: 163px;
    align-items: center;
    justify-content: center;
    color: #f7f7f7;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(./img/${data.img});

    ${data.img2x &&
    `@media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
      background-image: url(./img/${data.img2x});
    }`}

    &:last-of-type {
      margin-right: 0;
      flex-grow: 0;
    }

    ${breakpointsMap.TABLET} {
      margin-right: 15px;

      &:nth-of-type(2n) {
        margin-right: 0;
      }
    }

    ${breakpointsMap.DESKTOP} {
      flex-grow: 1;
      min-width: 370px;
      margin-right: 37px;

      &:nth-of-type(2n) {
        margin-right: 37px;
      }

      &:last-of-type {
        margin-right: 0;
      }
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
    <section
      className="main__section section--discount discounts"
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <h2 className="section__titile visually-hidden">Скидки!</h2>
      <div
        css={css`
          display: flex;
          flex-direction: column;

          ${breakpointsMap.TABLET} {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
        `}
      >
        {discounts.map((el) => discount(el))}
      </div>
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
