import React from 'react';
import { css } from '@emotion/react';
import { searchShowing } from '../utils/animation';
import SectionInner from '../../containers/section-inner';
import SearchModalContainerTop from './search-modal-top';

const SearchModal = () => (
  <section
    className="header__modal-search seciton search-modal"
    css={css`
      animation: ${searchShowing} 2s ease-in-out;
    `}
  >
    <SectionInner>
      <div className="search-modal__container">
        <SearchModalContainerTop />
      </div>
    </SectionInner>
  </section>
);

export default SearchModal;
