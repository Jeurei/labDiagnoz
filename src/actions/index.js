import * as Actions from '../constants/action-types';

export const addItemToCart = (playload) => ({ type: Actions.ADD_ITEM_TO_CART, playload });

export const removeItemFromCart = (playload) => ({ type: Actions.REMOVE_ITEM_FROM_CART, playload });

export const setCurrentCity = (playload) => ({ type: Actions.SET_CURRENT_CITY, playload });
