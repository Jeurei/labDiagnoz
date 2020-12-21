import components from '../constants/components';

const mapStateToPropsGenerator = (component) => {
  switch (component) {
    case components.CITIES: {
      return (state) => ({
        cities: state.cities,
      });
    }
    case components.CART: {
      return (state) => ({
        cartData: state.cart,
      });
    }
    default:
      return undefined;
  }
};

export default mapStateToPropsGenerator;
