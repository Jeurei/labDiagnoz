import { LoremIpsum } from 'lorem-ipsum';
import { getRandomInteger } from '../utils/common';
import { ProductTypesMap } from '../utils/dataMaps';

const createCartObject = () => {
  const MAX_QUANTITY_OF_OBJECTS = 10;
  const MAX_PRICE_OF_OBJECTS = 10000;
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: getRandomInteger(0, 8),
      min: getRandomInteger(0, 4),
    },
    wordsPerSentence: {
      max: getRandomInteger(0, 16),
      min: getRandomInteger(0, 4),
    },
  });
  const quantityOfobjects = getRandomInteger(0, MAX_QUANTITY_OF_OBJECTS);
  return {
    ...new Array(quantityOfobjects).map(() => ({
      type: ProductTypesMap[getRandomInteger(Object.keys(ProductTypesMap).length)],
      price: getRandomInteger(0, MAX_PRICE_OF_OBJECTS),
      descr: lorem.generateSentences(getRandomInteger(0, 4)),
    })),
  };
};

const createCitiesObject = () => {};

const getMock = () => ({
  cart: createCartObject(),
});

export default getMock;
