import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Components from 'constants/components';
import mapStateToPropsGenerator from 'store/mapStateToProps';
import { breakpointsMap } from 'src/constants/styles';
import { randomId } from '../utils/common';

const discount = (data, isColumn) => {
  const Container = styled.div`
    display: flex;
    min-width: 320px;
    min-height: 163px;
    max-height: 163px;
    flex-grow: 1;
    align-items: center;
    padding-left: 130px;
    margin-bottom: 15px;
    background-image: url(./img/${data.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #f7f7f7;
    ${isColumn && 'margin-right:0 !important;'}

    ${data.img2x &&
    `@media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
      background-image: url(./img/${data.img2x});
    }`}

    &:last-of-type {
      flex-grow: 0;
      margin-right: 0;
    }

    ${breakpointsMap.TABLET} {
      margin-right: 10px;
      ${isColumn && 'margin-right:10px !important;'}

      &:nth-of-type(2n) {
        margin-right: 0;
      }
    }

    ${breakpointsMap.DESKTOP} {
      min-width: 370px;
      flex-grow: 1;
      margin-right: 37px;
      ${isColumn && 'margin-right:0 !important;'}

      &:nth-of-type(2n) {
        margin-right: 37px;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  `;

  return (
    <Container
      key={randomId()}
      css={css`
        position: relative;

        &:before {
          position: absolute;
          top: 30px;
          left: 20px;
          display: block;
          width: 100px;
          height: 100px;
          background-image: url('img/discounts-1.svg');
          content: '';
        }
      `}
    >
      <h3
        css={css`
          display: flex;
          justify-content: center;
          margin: 0;
          font-size: 22px;
          font-weight: 500;
        `}
      >
        {data.title}
      </h3>
    </Container>
  );
};

const Discounts = ({ discounts, isColumn = false }) => {
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
          width: 100%;
          flex-direction: column;

          ${breakpointsMap.TABLET} {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }

          ${breakpointsMap.DESKTOP} {
            flex-direction: ${isColumn ? 'column' : 'row'};
          }
        `}
      >
        {discounts.map((el) => discount(el, isColumn))}
      </div>
    </section>
  );
};

Discounts.defaultProps = {
  isColumn: false,
};

Discounts.propTypes = {
  discounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  isColumn: PropTypes.bool,
};

export default connect(
  mapStateToPropsGenerator(Components.DISCOUNTS),
  null,
)(Discounts);
