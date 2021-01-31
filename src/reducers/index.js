import * as Actions from 'constants/action-types';
import getMock from '../mock/mock';

const initialState = getMock();

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_CITY:
      return {
        ...state,
        cities: { ...state.cities, currentCity: action.playload },
      };
    case Actions.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: {
          ...[
            ...Object.values(state.cart).slice(
              0,
              Object.values(state.cart).findIndex(
                (el) => el.id === action.playload,
              ),
            ),
            ...Object.values(state.cart).slice(
              Object.values(state.cart).findIndex(
                (el) => el.id === action.playload,
              ) + 1,
            ),
          ],
        },
      };
    default:
      break;
  }

  return state;
};

export default rootReducer;
