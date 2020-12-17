import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import CartModaGroup from './cart-modal-group';
import CrossButton from '../utils/crossButton';

const Cart = ({ cartData, closeHandler }) => {
  const typesMap = [...new Set(Object.values(cartData).map((el) => el.type))].map((el) => ({
    [el]: Object.values(cartData)
      .map((elem) => {
        if (elem.type === el) {
          return elem;
        }
        return null;
      })
      .filter(Boolean),
  }));

  return (
    <div className="header-top__right-cart-container cart-container">
      <div className="cart-container__inner">
        <div className="cart-container__modal cart-modal">
          <div className="cart-modal__top">
            <h4 className="cart-modal__title">
              Корзина (
              {Object.keys(cartData).length}
              )
            </h4>
            <CrossButton
              buttonClass="cities__modal-close"
              label="Закрыть модальное окно корзины"
              action={closeHandler}
            />
          </div>
          <div className="cart-modal__middle">
            <div className="cart-modal__inner">
              {typesMap.map((el) => <CartModaGroup groupData={el} key={nanoid()} />)}
            </div>
          </div>
          <div className="cart-modal__bottom offer">
            <div className="cart-modal__inner cart-modal__inner--offer">
              <div className="offer__price-container">
                <span className="offer__price-text">Итого:</span>
                <span className="offer__price">1 100 ₽</span>
              </div>
              <button
                className="offer__button button"
                type="button"
                aria-label="Кнопка оформить заказ"
                name="order-button"
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

Cart.propType = {
  cartData: PropTypes.objectOf(PropTypes.object).isRequired,
  closeHandler: PropTypes.func.isRequired,
};

export default Cart;
