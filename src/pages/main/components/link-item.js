import React from 'react';
import PropTypes from 'prop-types';
import ArrowRight from '../../../icons/arrrow-right.svg';

const LinkItem = ({ data }) => {
  const svgPicture = (src, width, height, alt) => (
    <img
      src={`../img/${src}.svg`}
      className="link__big-icon"
      width={`${width}px`}
      height={`${height}px`}
      alt={alt}
    />
  );

  return (
    <li className="link__list-item link link--about-us">
      {svgPicture('about-us', 67, 74, 'Иконка')}
      <a
        href={data.link}
        className="link__link"
        aria-label="Перейти на страницу с этой информацией"
      >
        <h3 className="link__title">{data.title}</h3>
        <p className="link__text">{data.text}</p>
        <ArrowRight
          className="link__icon"
          width="26"
          height="26"
          stroke="currentColor"
          fill="currentColor"
        />
      </a>
    </li>
  );
};

LinkItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkItem;
