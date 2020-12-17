import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import CartModalListItem from './cart-modal-list-item';

const CartModalGroup = ({ groupData }) => (
  <div className="cart-modal__group">
    <h5 className="cart-modal__group-title">
      {Object.keys(groupData)}
      [0]:
    </h5>
    <ul className="cart-modal__list">
      {Object.values(groupData).map((el) => (
        <CartModalListItem id={nanoid()} itemData={Object.values(el)} />
      ))}
    </ul>
  </div>
);

CartModalGroup.propTypes = {
  groupData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CartModalGroup;
