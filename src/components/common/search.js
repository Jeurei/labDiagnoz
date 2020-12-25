import React, { useRef, useEffect } from 'react';
import Typed from 'react-typed';
import { ENTER_KEY_CODE } from '../../constants/keys';
import SearchIcon from '../../icons/search-icon.svg';
import Select from '../utils/select';

const Search = () => {
  const searchRef = useRef();

  const placeValueToSearch = (evt) => {
    evt.preventDefault();
    searchRef.current.value = evt.currentTarget.textContent;
  };

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <>
      <h2 className="search__title">
        Простой и удобный поиск
        {' '}
        <br className="search__title-br" />
        <Typed
          strings={['Анализов^5000', 'Услуг^5000', 'Врачей^5000']}
          typeSpeed={50}
          backSpeed={50}
          loop
        >
          <span />
        </Typed>
      </h2>
      <small className="search__container-top-text">По какому разделу искать?</small>
      <div className="search__container-input-group">
        <input
          type="text"
          className="search__input"
          placeholder="Введите ваш поисковый запрос…"
          aria-label="Введите что хотите найти"
          aria-describedby="search-descr"
          ref={searchRef}
        />
        <p className="visually-hidden" id="search-descr">
          Введите ваш поисковый запрос…
        </p>
        <Select selectClass="search__categories" />
        <button
          className="search__button"
          type="button"
          name="search-button"
          aria-label="Кнопка поиска"
        >
          <SearchIcon
            width="25px"
            height="25px"
            transform="scale(1.2)"
            fill="none"
            stroke="currentColor"
          />
        </button>
      </div>
      <small className="search__hint">
        <SearchIcon
          width="25px"
          height="25px"
          transform="scale(0.8)"
          fill="none"
          stroke="currentColor"
          className="search__hint-icon"
        />
        Например,
        <Typed
          strings={[
            'биохимический анализ крови^5000',
            'анализ на ковид^5000',
            'анализ на анализ^5000',
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        >
          <span
            className="search__hint-dotted"
            onClick={(evt) => {
              placeValueToSearch(evt);
            }}
            role="button"
            onKeyDown={(evt) => {
              if (evt.key === ENTER_KEY_CODE) placeValueToSearch(evt);
            }}
            tabIndex="0"
            aria-label="Поместить это текст в строку поиска"
          />
        </Typed>
      </small>
    </>
  );
};

export default Search;
