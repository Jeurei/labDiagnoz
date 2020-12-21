import getMock from '../mock/mock';
import * as Actions from '../constants/action-types';

const initialState = getMock();

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_CITY:
      return { ...state, cities: { ...state.cities, currentCity: action.playload } };
    case Actions.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: {
          ...[...Object.values(state.cart)].slice(0, action.playload),
          ...[...Object.values(state.cart)].slice(action.playload + 1),
        },
      };
    default:
      break;
  }

  return state;
};

export default rootReducer;
