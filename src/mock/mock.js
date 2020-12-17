import { loremIpsum, LoremIpsum } from 'lorem-ipsum';
import { getRandomInteger } from '../utils/common';
import { ProductTypesMap } from '../utils/dataMaps';

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
      type: ProductTypesMap[getRandomInteger(Object.keys(ProductTypesMap).length) - 1],
      price: getRandomInteger(0, MAX_PRICE_OF_OBJECTS),
      descr: lorem.generateSentences(getRandomInteger(2, 4)),
    })),
  };
};

const createCitiesObject = () => {
  const MAX_QUANTITY_OF_CITIES = 18;

  return {
    ...new Array(MAX_QUANTITY_OF_CITIES).fill().map(() => loremIpsum({
      count: 1,
      units: 'word',
    })),
  };
};

const getMock = () => ({
  cart: createCartObject(),
  cities: {
    list: createCitiesObject(),
    currentCity: 'Пермь',
  },
});

export default getMock;
