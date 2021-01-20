import React, { useRef } from 'react';
import { css, keyframes } from '@emotion/react';
import PropTypes from 'prop-types';
import { searchShowing } from '../utils/animation';
import SectionInner from '../../containers/section-inner';
import SearchModalContainerTop from './search-modal-top';

const SearchModal = ({ isDeleting, animationDuration }) => {
  const modalRef = useRef();
  const deletingKeyFrames = () => keyframes`
      0% {
        min-height: 594px;
        max-height: ${modalRef.current.offsetHeight}px;
      }

      50%{
        opacity: 0;
      }

      100% {
        opacity: 0;
        min-height: 0;
        max-height: 0;
      `;

  return (
    <section
      className="header__modal-search seciton search-modal"
      css={
        isDeleting
          ? css`
              animation: ${deletingKeyFrames()} ${animationDuration - 0.5}s
                ease-in-out;
            `
          : css`
              animation: ${searchShowing} ${animationDuration - 0.5}s
                ease-in-out;
            `
      }
      ref={modalRef}
    >
      <SectionInner>
        <div className="search-modal__container">
          <SearchModalContainerTop />
        </div>
      </SectionInner>
    </section>
  );
};

SearchModal.propTypes = {
  isDeleting: PropTypes.bool.isRequired,
  animationDuration: PropTypes.number.isRequired,
};

export default SearchModal;
