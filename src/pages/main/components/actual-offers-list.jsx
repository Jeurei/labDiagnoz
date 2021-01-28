import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import components from 'constants/components';
import SliderControls from 'common/slider-controls';
import mapStateToPropsGenerator from 'store/mapStateToProps';
import ActualOffer from './actual-offer';
import Slider from './slider';

const ActualOffersList = ({ offers }) => {
  const swiperRef = useRef(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <>
      <SliderControls
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        className="actual-offers__control"
      />
      <ul className="actual-offers__list navigation">
        <Slider
          data={offers}
          component={<ActualOffer />}
          swiperRef={swiperRef}
          sliderObject={{
            spaceBetween: 40,
            slidesPerView: 3,
            slidesPerGroup: 3,
            loop: true,
            breakpoints: {
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              720: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1210: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            },
          }}
        />
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

export default connect(
  mapStateToPropsGenerator(components.OFFERS),
  null,
)(ActualOffersList);
