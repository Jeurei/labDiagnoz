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

    case components.HINTS: {
      return (state) => ({
        hints: state.hints,
      });
    }

    case components.MENU: {
      return (state) => ({
        menu: state.menu,
      });
    }

    case components.OFFERS: {
      return (state) => ({
        offers: state.offers,
      });
    }

    case components.COMPLEXES: {
      return (state) => ({
        complexes: state.complex,
      });
    }

    case components.LINKS: {
      return (state) => ({
        links: state.links,
      });
    }

    case components.ARTICLES: {
      return (state) => ({
        articles: state.articles,
      });
    }

    case components.SHARES: {
      return (state) => ({
        shares: state.shares,
      });
    }

    default:
      return undefined;
  }
};

export default mapStateToPropsGenerator;
