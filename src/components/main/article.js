import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Picture from '../common/picture';

const formatDate = (date) => {
  return format(date, 'd MMMM yyyy', { locale: ru });
};

const formatDateForHtml = (date) => {
  return format(date, 'yyyy-M-d', { locale: ru });
};

const Article = ({ data }) => {
  return (
    <a href="./" className="articles__link">
      <article className="articles__article article">
        <div className="article__text">
          <time
            className="article__time"
            dateTime={formatDateForHtml(data.date)}
          >
            {formatDate(data.date)}.
          </time>
          <h3 className="article__title">{data.title}</h3>
        </div>
        <Picture
          src="./img/article"
          width="301"
          height="250"
          containerClass={`article__img-container${
            data.isNew ? ' article__img-container--new' : ''
          }`}
          imgClass="article__img"
          alt="Изображение статьи"
        />
      </article>
    </a>
  );
};

Article.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    isNew: PropTypes.bool,
    isNews: PropTypes.bool,
    isBlog: PropTypes.bool,
    isUseful: PropTypes.bool,
  }).isRequired,
};

export default Article;
