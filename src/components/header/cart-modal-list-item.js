import React from 'react';
import PropTypes from 'prop-types';
import CrossButton from '../utils/crossButton';

const CartModalListItem = ({ itemData, action, id }) => (
  <li className="cart-modal__list-item" data-id={id}>
    <p className="cart-modal__text">{itemData.descr}</p>
    <span className="cart-modal__price">
      {itemData.price}
      {' '}
      ₽
    </span>
    <CrossButton
      buttonClass="cities__modal-close"
      label="Удалить предмет из корзины"
      action={(evt) => {
        action(evt.currentTarget.parentNode.dataset.id);
      }}
    />
  </li>
);

CartModalListItem.propTypes = {
  itemData: PropTypes.shape({
    descr: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  action: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
export default CartModalListItem;
