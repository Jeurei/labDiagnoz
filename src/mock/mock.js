import { format } from 'date-fns';
import { loremIpsum, LoremIpsum } from 'lorem-ipsum';
import { randomId } from '../components/utils/common';
import { getRandomInteger, randomDate } from '../utils/common';
import { ProductTypesMap } from '../utils/dataMaps';

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const createCartObject = () => {
  const MAX_QUANTITY_OF_OBJECTS = 10;
  const MAX_PRICE_OF_OBJECTS = 10000;
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 8,
      min: 4,
    },
  });
  const quantityOfobjects = getRandomInteger(1, MAX_QUANTITY_OF_OBJECTS);
  return {
    ...new Array(quantityOfobjects).fill().map(() => ({
      type:
        ProductTypesMap[
          getRandomInteger(Object.keys(ProductTypesMap).length) - 1
        ],

      price: getRandomInteger(0, MAX_PRICE_OF_OBJECTS),

      descr: lorem.generateSentences(getRandomInteger(2, 4)),

      id: randomId(),
    })),
  };
};

const createCitiesObject = () => {
  const MAX_QUANTITY_OF_CITIES = 18;

  return {
    ...new Array(MAX_QUANTITY_OF_CITIES).fill().map(() =>
      loremIpsum({
        count: 1,
        units: 'word',
      }),
    ),
  };
};

const createHintsArray = () => {
  const MAX_QUANTITY_OF_HINTS = 8;

  return new Array(MAX_QUANTITY_OF_HINTS).fill().map(() => ({
    text: loremIpsum({
      count: 1,
      units: 'word',
    }),

    link: loremIpsum({
      count: 1,
      units: 'word',
    }),
  }));
};

const createMenuArray = () => {
  return [
    { text: 'Главная', link: '/', children: false },
    { text: 'Специалисты', link: '/specialists', children: false },
  ];
};

const createOffersArray = () => {
  const MAX_QUANTITY_OF_OFFERS = 10;
  const MAX_PRICE_OF_OBJECTS = 10000;
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 8,
      min: 4,
    },
  });

  return new Array(MAX_QUANTITY_OF_OFFERS).fill().map(() => ({
    title: loremIpsum({
      count: 1,
      units: 'word',
    }),

    text: lorem.generateSentences(getRandomInteger(2, 4)),

    price: getRandomInteger(0, MAX_PRICE_OF_OBJECTS),
  }));
};

const createComplexArray = () => {
  const MAX_QUANTITY_OF_OFFERS = 10;
  const MAX_PRICE_OF_OBJECTS = 10000;
  const MAX_QUANTITY_OF_OBJECTS_IN_LIST = 10;
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 8,
      min: 4,
    },
  });

  return new Array(MAX_QUANTITY_OF_OFFERS).fill().map(() => ({
    title: loremIpsum({
      count: 1,
      units: 'word',
    }),

    list: new Array(MAX_QUANTITY_OF_OBJECTS_IN_LIST)
      .fill()
      .map(() => lorem.generateSentences(getRandomInteger(2, 4))),

    price: getRandomInteger(0, MAX_PRICE_OF_OBJECTS),

    oldPrice: getRandomInteger(0, MAX_PRICE_OF_OBJECTS),
  }));
};

const createLinksArray = () => {
  const MAX_QUANTITY_OF_OFFERS = 10;
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 8,
      min: 4,
    },
  });

  return new Array(MAX_QUANTITY_OF_OFFERS).fill().map(() => ({
    title: loremIpsum({
      count: 1,
      units: 'word',
    }),

    text: lorem.generateSentences(getRandomInteger(2, 4)),

    link: loremIpsum({
      count: 1,
      units: 'word',
    }),
  }));
};

const createArticlesArray = () => {
  const MAX_QUANTITY_OF_ARTICLES = 50;

  return new Array(MAX_QUANTITY_OF_ARTICLES).fill().map(() => ({
    date: randomDate(new Date(2012, 0, 1), new Date()),

    title: loremIpsum({
      count: 1,
      units: 'word',
    }),
    isNew: Boolean(getRandomInteger(0, 1)),

    isNews: Boolean(getRandomInteger(0, 1)),

    isBlog: Boolean(getRandomInteger(0, 1)),

    isUseful: Boolean(getRandomInteger(0, 1)),
  }));
};

const createSharesArray = () => {
  const MAX_QUANTITY_OF_SHARES = 8;
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 8,
      min: 4,
    },
  });

  return new Array(MAX_QUANTITY_OF_SHARES).fill().map(() => ({
    title: loremIpsum({
      count: 1,
      units: 'word',
    }),

    link: loremIpsum({
      count: 1,
      units: 'word',
    }),

    text: lorem.generateSentences(getRandomInteger(2, 4)),
  }));
};

const createFeaturesArray = () => {
  const MAX_QUANTITY_OF_FEATURES = 10;
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 8,
      min: 4,
    },
  });

  return new Array(MAX_QUANTITY_OF_FEATURES).fill().map(() => ({
    title: loremIpsum({
      count: 1,
      units: 'word',
    }),
    text: lorem.generateSentences(getRandomInteger(2, 4)),
    icon: 'firing.svg',
  }));
};

const createSpecialistsArray = () =>
  new Array(getRandomInteger(1, 10)).fill().map(() => ({
    name: loremIpsum({
      count: 3,
      units: 'word',
    }),
    job: new Array(getRandomInteger(1, 5))
      .fill()
      .map(() => loremIpsum({ count: 1, units: 'word' })),
    ages: getRandomInteger(0, 2),
    price: getRandomInteger(0, 10000),
    adresses: new Array(getRandomInteger(1, 3))
      .fill()
      .map(() => loremIpsum({ count: 1, units: 'word' })),
    time: {
      2021: {
        ...new Array(12).fill().map((el, id) => ({
          ...new Array(daysInMonth(id + 1, 2021)).fill().map(() => ({
            ...new Array(getRandomInteger(0, 11))
              .fill()
              .map(() =>
                format(randomDate(new Date(2012, 0, 1), new Date()), 'hh'),
              ),
          })),
        })),
      },
    },
  }));

const getMock = () => ({
  cart: createCartObject(),
  cities: {
    list: createCitiesObject(),
    currentCity: 'Пермь',
  },
  hints: createHintsArray(),
  menu: createMenuArray(),
  offers: createOffersArray(),
  complex: createComplexArray(),
  links: createLinksArray(),
  articles: createArticlesArray(),
  shares: createSharesArray(),
  features: createFeaturesArray(),
  specialists: createSpecialistsArray(),
});

export default getMock;
