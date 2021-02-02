import React from 'react';
import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import Discounts from 'common/discounts';
import Picture from 'common/picture';

const Illnes = () => {
  const theme = useTheme();
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
          }
        `}
      >
        <div>
          <h2 className="main__title">Тиреодерит</h2>
          <div
            css={css`
              padding-right: 10px;
              padding-left: 10px;
            `}
          >
            <h3
              css={css`
                margin-bottom: 35px;
                font-size: 16px;
                font-weight: 400;
              `}
            >
              Описание
            </h3>
            <p
              css={css`
                font-size: 13px;
              `}
            >
              Тиреоидит: симптомы и лечениеТиреоидит – это заболевание
              щитовидной железы воспалительного характера. В остром состоянии
              возможно образование абсцесса. Характерными симптомами тиреоидита
              на ранних стадиях является чувство сдавливания и боль в области
              шеи, осиплость голоса. Прогрессирование болезни вызывает
              дисфункцию железы. Прогноз при своевременной диагностике и лечении
              благоприятный. Тиреоидит – это заболевание щитовидной железы
              воспалительного характера. В остром состоянии возможно образование
              абсцесса. Характерными симптомами тиреоидита на ранних стадиях
              является чувство сдавливания и боль в области шеи, осиплость
              голоса. Прогрессирование болезни вызывает дисфункцию железы.
              Прогноз при своевременной диагностике и лечении благоприятный.
            </p>
            <ul
              css={css`
                padding: 0;
                padding-left: 18px;
                list-style: none;
              `}
            >
              <li
                css={css`
                  position: relative;

                  &:before {
                    position: absolute;
                    top: 5px;
                    left: -18px;
                    display: block;
                    width: 7px;
                    height: 7px;
                    background-color: ${theme.colors.blue};
                    border-radius: 50%;
                    content: '';
                  }
                `}
              >
                острый (гнойный и негнойный) – носит инфекционный характер.
                Тиреоидит протекает с частичным поражением доли щитовидной
                железы (очаговый) или распространяется на всю долю или орган
                (диффузный);{' '}
              </li>
            </ul>
            <Picture src="img/illnes-pic" />
          </div>
        </div>
        <div
          css={css`
            ${breakpointsMap.DESKTOP} {
              margin-left: 100px;
            }
          `}
        >
          <Discounts isColumn />
        </div>
      </div>
    </>
  );
};

export default Illnes;
