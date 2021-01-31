import { bindActionCreators } from 'redux';
import components from 'constants/components';
import * as Actions from '../actions/index';

function mapDispatchToProps(component) {
  switch (component) {
    case components.CITIES:
      return (dispatch) => ({
        setCity: bindActionCreators(Actions.setCurrentCity, dispatch),
      });
    case components.CART:
      return (dispatch) => ({
        removeItem: bindActionCreators(Actions.removeItemFromCart, dispatch),
      });
    default:
      return undefined;
  }
}

export default mapDispatchToProps;
