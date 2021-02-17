import React from 'react';
import { css } from '@emotion/react';
import Picture from 'src/components/common/picture';
import { breakpointsMap } from 'src/constants/styles';

const Maintaince = () => {
  return (
    <>
      <h2
        className="main__title"
        css={css`
          margin-bottom: 40px;
        `}
      >
        Обслуживание по полисам ДМС
      </h2>
      <p
        css={css`
          font-size: 13px;

          ${breakpointsMap.TABLET} {
            padding: 0;
          }
        `}
      >
        Лечебно-диагностический центр « Лабдиагностика» оказывает медицинские
        услуги по полисам Добровольного Медицинского Страхования (ДМС) следующих
        страховых компаний:
      </p>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          filter: grayscale(100%);

          ${breakpointsMap.TABLET} {
            justify-content: flex-start;
          }
        `}
      >
        <Picture src="img/alfa" width="179" height="56" />
        <Picture src="img/alfa" width="179" height="56" />
        <Picture src="img/alfa" width="179" height="56" />
        <Picture src="img/alfa" width="179" height="56" />
        <Picture src="img/alfa" width="179" height="56" />
        <Picture src="img/alfa" width="179" height="56" />
      </div>
      <p
        css={css`
          font-size: 13px;

          ${breakpointsMap.TABLET} {
            padding: 0;
          }
        `}
      >
        Для получения медицинских услуг по полису Добровольного Медицинского
        Страхования необходимо предоставить: полис ДМС, паспорт, гарантийное
        письмо от страховой компании или иметь «прямой доступ» в клинику (быть в
        списках сотрудников на прикрепление) к медицинскому центру
        «Лабдиагностика». Условия{' '}
      </p>
    </>
  );
};

export default Maintaince;
