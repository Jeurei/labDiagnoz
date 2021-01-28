import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Scrollbars } from 'react-custom-scrollbars';
import CrossButton from 'common/crossButton';
import { showing } from '../utils/animation';
import { randomId } from '../utils/common';
import CartModalGroup from './cart-modal-group';

const Cart = ({ cartData, closeHandler, removeItem }) => {
  const typesMap = [
    ...new Set(Object.values(cartData).map((el) => el.type)),
  ].map((el) => ({
    [el]: Object.values(cartData)
      .map((elem) => {
        if (elem.type === el) {
          return elem;
        }
        return null;
      })
      .filter(Boolean),
  }));

  const onCloseClickHandler = () => {
    closeHandler();
  };

  const total = Object.values(cartData).reduce((t, { price }) => t + price, 0);

  return (
    <div
      className="header-top__right-cart-container cart-container"
      css={css`
        animation: ${showing} 1s ease-in-out;
      `}
    >
      <div className="cart-container__inner">
        <div className="cart-container__modal cart-modal">
          <div className="cart-modal__top">
            <h4 className="cart-modal__title">
              Корзина ({Object.keys(cartData).length})
            </h4>
            <CrossButton
              buttonClass="cities__modal-close"
              label="Закрыть модальное окно корзины"
              action={onCloseClickHandler}
            />
          </div>
          <div className="cart-modal__middle">
            <div className="cart-modal__inner">
              <Scrollbars
                style={{ width: 449, height: 400 }}
                renderTrackVertical={(props) => (
                  <div
                    {...props}
                    className="cart-modal__scroll-track-vertical"
                  />
                )}
                renderThumbVertical={(props) => (
                  <div
                    {...props}
                    className="cart-modal__scroll-thumb-vertical"
                  />
                )}
              >
                {typesMap.map((el) => (
                  <CartModalGroup
                    action={removeItem}
                    groupData={el}
                    key={randomId()}
                  />
                ))}
              </Scrollbars>
            </div>
          </div>
          <div className="cart-modal__bottom offer">
            <div className="cart-modal__inner cart-modal__inner--offer">
              <div className="cart-modal__offer-price-container">
                <span className="cart-modal__offer-price-text">Итого:</span>
                <span className="cart-modal__offer-price">{total} ₽</span>
              </div>
              <button
                className="cart-modal__offer-button button"
                aria-label="Ссылка на страницу с оформлением заказа"
                type="button"
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartData: PropTypes.objectOf(PropTypes.object).isRequired,
  closeHandler: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default Cart;
