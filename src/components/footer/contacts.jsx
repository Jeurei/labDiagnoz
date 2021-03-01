import { css } from '@emotion/react';
import React from 'react';

const Contacts = () => (
  <section className="footer__section footer__section-contacts section contacts">
    <h2 className="section__title visually-hidden">Как с нами связаться?</h2>
    <div className="section__inner">
      <ul className="contacts__list">
        <li className="contacts__contact contact contact--tel">
          <a
            href="tel:8 800 3000 789"
            css={css`
              color: #4a4a4a;

              &:hover,
              &:active {
                color: #4a4a4a;
              }
            `}
          >
            <p className="contact__text-small">Ежедневно и круглосуточно</p>
            <p className="contact__text">8 800 3000 789</p>
          </a>
        </li>
        <li className="contacts__contact contact contact--email">
          <a
            href="mailto:>info@labdiag.perm.ru"
            css={css`
              color: #4a4a4a;

              &:hover,
              &:active {
                color: #4a4a4a;
              }
            `}
          >
            <p className="contact__text-small">E-mail</p>
            <p className="contact__text">info@labdiag.perm.ru</p>
          </a>
        </li>
        <li className="contacts__contact contact contact--adress">
          <p className="contact__text-small">Адрес</p>
          <p className="contact__text">Пермь, 9 мая, 18а</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Contacts;
