import React from 'react';
import SectionInner from '../../containers/section-inner';
import Picture from '../common/picture';
import Tab from '../common/tab';

const FooterBottom = () => (
  <section className="footer__bottom">
    <h2 className="footer__title visually-hidden">Полезные ссылки</h2>
    <section className="footer__section footer__section--footer-nav section footer-nav">
      <h2 className="section__title visually-hidden">Навигация</h2>
      <SectionInner>
        <Tab />
      </SectionInner>
      <SectionInner>
        <Picture
          containerClass="footer-nav__logo"
          src="./img/logo"
          width="230"
          height="36"
          alt="Логотип компании Лабдиагностика"
        />
        <div className="footer-nav__top copyright-top">
          <p className="copyright-top__text">
            Сеть многопрофильных медицинских центров
            <br className="copyright-top__text-br" />
            и заборных пунктов в Перми и городах Пермского
            края.
          </p>
          <Picture
            containerClass="copyright-top__logo"
            src="./img/site-logos"
            width="191"
            height="36"
            alt="Логотипы компаний с которыми мы сотрудничаем"
          />
          <small className="copyright-top__small">© Лабдиагност и К. Все права защищены.</small>
        </div>
      </SectionInner>
    </section>
  </section>
);

export default FooterBottom;
