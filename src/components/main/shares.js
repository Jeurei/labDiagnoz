import React from 'react';
import SectionInner from '../../containers/section-inner';
import SliderControls from '../utils/slider-controls';
import SharesList from './shares-list';

const Shares = () => {
  return (
    <section className="main__section main__section--inner section shares">
      <SectionInner>
        <h2 className="section__title shares__title">Акции</h2>
        <div className="shares__container">
          <SliderControls />
          <SharesList />
        </div>
      </SectionInner>
    </section>
  );
};

export default Shares;
