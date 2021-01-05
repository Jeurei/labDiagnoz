import { filterTypesMap } from '../../constants/filter';

export const getFiltredArticles = {
  [filterTypesMap.ALL]: (articles) => articles,
  [filterTypesMap.BLOG]: (articles) =>
    articles.filter((article) => article.isBlog),
  [filterTypesMap.NEWS]: (articles) =>
    articles.filter((article) => article.isNews),
  [filterTypesMap.USEFUL]: (articles) =>
    articles.filter((article) => article.isUseful),
};
