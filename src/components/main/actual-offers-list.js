import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { connect } from 'react-redux';
import mapStateToPropsGenerator from '../../store/mapStateToProps';
import components from '../../constants/components';
import { randomId } from '../utils/common';
import ActualOffer from './actual-offer';
import ActualOffersControls from './actual-offers-controls';

const ActualOffersList = ({ offers }) => {
  const swiperRef = useRef(null);
  SwiperCore.use([Pagination, A11y]);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <>
      <ActualOffersControls prevSlide={prevSlide} nextSlide={nextSlide} />
      <ul className="actual-offers__list navigation">
        <Swiper
          ref={swiperRef}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={3}
          slidesPerGroup={3}
          loop
        >
          {offers.map((el) => (
            <SwiperSlide key={randomId()}>
              <ActualOffer data={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </>
  );
};

ActualOffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default connect(mapStateToPropsGenerator(components.OFFERS), null)(ActualOffersList);
