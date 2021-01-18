import React from 'react';
import Picture from '../common/picture';
import Socials from './socials';
import SectionInner from '../../containers/section-inner';

const Copyrights = () => (
  <section className="footer__section footer__section--copyright section copyrights">
    <h2 className="section__title visually-hidden">Копирайты</h2>
    <div className="copyrights__copyright copyright">
      <div className="copyright__bottom copyright-bottom">
        <SectionInner>
          <p className="copyright-bottom__text">
            ООО «Лабдиагност и К». Лицензия No ЛО-59-01-005417 от 17 июля 2020
            г.
          </p>
          <Socials />
          <div className="copyright__creators-team creators-team">
            <p className="creators-team__text">
              Разработка и продвижение сайтов
            </p>
            <a
              href="https://praweb.ru/"
              className="creators-team__link"
              rel="noreferrer"
              target="_blank"
            >
              <Picture
                containerClass="creators-team__logo"
                src="./img/praweb"
                width="53"
                height="24"
                alt="Логотип компании,которая разрабоатала этот сайт"
              />
            </a>
          </div>
        </SectionInner>
      </div>
    </div>
  </section>
);

export default Copyrights;
