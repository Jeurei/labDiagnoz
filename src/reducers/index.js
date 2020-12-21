import getMock from '../mock/mock';
import * as Actions from '../constants/action-types';

const initialState = {
  ...getMock(),
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_ITEM_TO_CART:
      return { ...state, cart: state.cart.concat(action.payload) };
    case Actions.REMOVE_ITEM_FROM_CART:
      break;
    default:
      break;
  }

  return state;
};

export default rootReducer;
