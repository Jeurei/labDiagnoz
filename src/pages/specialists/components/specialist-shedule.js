import React from 'react';

const SpecialistShedule = () => {
  return (
    <div className="specialist__shedule">
      <div className="specialist__shedule-mounth">
        <button
          className="specialist__shedule-mounth-button specialist__shedule-mounth-button--before"
          type="button"
          aria-label="Предыдущий месяц"
        />
        <span className="specialist__current-mounth">Октябрь</span>
        <button
          className="specialist__shedule-mounth-button specialist__shedule-mounth-button--next"
          type="button"
          aria-label="Следующий месяц"
        />
      </div>
      <div className="specialist__shedule-table">
        <button
          className="specialist__shedule-table-button specialist__shedule-table-button--before"
          type="button"
          aria-label="Предыдущий месяц"
        />
        <ul className="specialist__shedule-list">
          <li className="specialist__shedule-list-item">
            <p className="specialist__shedule-week-day">Сегодня</p>
            <p className="specialist__shedule-date">9 окт.</p>
          </li>
          <li className="specialist__shedule-list-item">
            <p className="specialist__shedule-week-day">Сб</p>
            <p className="specialist__shedule-date">9 окт.</p>
          </li>
          <li className="specialist__shedule-list-item">
            <p className="specialist__shedule-week-day">Вс</p>
            <p className="specialist__shedule-date">9 окт.</p>
          </li>
          <li className="specialist__shedule-list-item">
            <p className="specialist__shedule-week-day">Пн</p>
            <p className="specialist__shedule-date">9 окт.</p>
          </li>
          <li className="specialist__shedule-list-item">
            <p className="specialist__shedule-week-day">Вт</p>
            <p className="specialist__shedule-date">9 окт.</p>
          </li>
          <li className="specialist__shedule-list-item">
            <p className="specialist__shedule-week-day">Ср</p>
            <p className="specialist__shedule-date">9 окт.</p>
          </li>
        </ul>
        <button
          className="specialist__shedule-table-button specialist__shedule-table-button--next"
          type="button"
          aria-label="Следующий месяц"
        />
      </div>
      <p className="specialist__chosen-day-info">
        09 октября нет доступного времени для записи.
      </p>
      <p className="specialist__closest-day">
        Ближайшее время записи,{' '}
        <a
          className="specialist__closest-day-link"
          href="/"
          aria-label="Записать вас на это число?"
        >
          10 октября
        </a>
      </p>
    </div>
  );
};

export default SpecialistShedule;
