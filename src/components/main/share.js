import React from 'react';
import ArrowRight from '../../icons/arrrow-right.svg';

const Share = ({ data }) => {
  return (
    <li className="shares__list-item">
      <a
        href="./"
        className="shares__link"
        aria-label="Перейти на страницу акции"
      >
        <article className="shares__article share share--robot share--limited">
          <div className="share__top">
            <h3 className="share__title">{data.title}</h3>
            <p className="share__text">{data.text}</p>
          </div>
          <div className="share__bottom">
            <p className="share__bottom-text">
              Срок действия акции:
              <time dateTime="2020-05-21">21.05.2020</time> -
              <time dateTime="2384-12-13">23.34.2384</time>
              <ArrowRight
                className="share__icon"
                width="13.5"
                height="13.5"
                fill="currentColor"
              />
            </p>
          </div>
        </article>
      </a>
    </li>
  );
};

export default Share;
