import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SectionInner from '../../../containers//section-inner';
import mapStateToPropsGenerator from '../../../store//mapStateToProps';
import components from '../../../constants//components';
import LinkItem from './link-item';
import { randomId } from '../../utils/common';

const Links = ({ links }) => {
  const MAX_QUANTITY_OF_LINKS = 2;
  return (
    <section className="main__section main__section--links section links">
      <h2 className="section__title visually-hidden">
        Ссылки на интересные страницы
      </h2>
      <SectionInner>
        <ul className="links__list">
          {links.slice(0, MAX_QUANTITY_OF_LINKS).map((el) => (
            <LinkItem data={el} key={randomId()} />
          ))}
        </ul>
      </SectionInner>
    </section>
  );
};

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToPropsGenerator(components.LINKS), null)(Links);
