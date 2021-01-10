import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({
  src,
  width = '',
  height = '',
  alt,
  containerClass = '',
  imgClass = '',
}) => (
  <picture className={containerClass}>
    <source type="image/webp" srcSet={`${src}.webp 1x, ${src}@2x.webp 2x`} />
    <img
      src={`${src}.png`}
      srcSet={`${src}@2x.png`}
      className={imgClass}
      width={width}
      height={height}
      alt={alt}
    />
  </picture>
);

Picture.defaultProps = {
  containerClass: '',
  imgClass: '',
  width: '',
  height: '',
};

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string.isRequired,
  containerClass: PropTypes.string,
  imgClass: PropTypes.string,
};

export default Picture;
