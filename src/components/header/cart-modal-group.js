import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import CartModalListItem from './cart-modal-list-item';

const CartModalGroup = ({ groupData, action }) => (
  <div className="cart-modal__group">
    <h5 className="cart-modal__group-title">{Object.keys(groupData)}</h5>
    <ul className="cart-modal__list">
      {groupData[Object.keys(groupData)].map((el, id) => (
        <CartModalListItem id={id} action={action} key={nanoid()} itemData={el} />
      ))}
    </ul>
  </div>
);

CartModalGroup.propTypes = {
  groupData: PropTypes.objectOf(PropTypes.array).isRequired,
  action: PropTypes.func.isRequired,
};

export default CartModalGroup;
