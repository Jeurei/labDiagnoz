const routesConstants = {
  MAIN: {
    route: '/',
    name: 'Главная',
  },
  SPECIALISTS: {
    route: '/specialists',
    name: 'Специалисты',
  },
  SERVICES: {
    route: '/services',
    name: 'Услуги',
    subRoutes: {
      CENTERS: {
        route: '/centers',
        name: 'Медицинские центры',
      },
      ONLINE: {
        route: '/online',
        name: 'Онлайн консультация',
      },
      COMPLEXES: {
        route: '/complexes',
        name: 'Комплексные исследования',
      },
      LAB: {
        route: '/lab',
        name: 'Лаборатория',
      },
      ADDITION: {
        route: '/additions',
        name: 'Дополнительно',
      },
    },
  },
  MEDCENTERS: {
    route: '/medCenters',
    name: 'Медицинские центры',
  },
};

export default routesConstants;
