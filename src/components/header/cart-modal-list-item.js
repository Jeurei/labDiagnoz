import React from 'react';
import PropTypes from 'prop-types';
import CrossButton from '../utils/crossButton';

const CartModalListItem = ({ itemData }) => (
  <li className="cart-modal__list-item">
    <p className="cart-modal__text">{itemData.descr}</p>
    <span className="cart-modal__price">
      {itemData.price}
      {' '}
      ₽
    </span>
    <CrossButton buttonClass="cities__modal-close" label="Удалить предмет из корзины" />
  </li>
);

CartModalListItem.propTypes = {
  itemData: PropTypes.shape({
    descr: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default CartModalListItem;
