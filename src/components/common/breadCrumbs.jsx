import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Routes from '../../routes';
import BreadCrumb from './breadCrumb';
import { randomId } from '../utils/common';

// TODO: предположительно сдесь будет ещё один роутинг который предусмотрен на этой странице, типа условно /specialists/1 и тк это рута не будет в родителе переключаться будет только мейн страниы

const BreadCrumbs = ({ className }) => {
  const currentPath = useLocation().pathname.split('/');

  const routesArr = [...Routes].filter((el) => {
    return currentPath.includes(el.path.replace('/', ''));
  });

  return (
    <ul className={className && `${className}__breadcrumbs breadcrumbs`}>
      {routesArr.map((el) => {
        return (
          <BreadCrumb
            data={el}
            isActive={
              el.path.replace('/', '') === currentPath[currentPath.length - 1]
            }
            key={randomId()}
          />
        );
      })}
    </ul>
  );
};

BreadCrumbs.defaultProps = {
  className: '',
};

BreadCrumbs.propTypes = {
  className: PropTypes.string,
};

export default BreadCrumbs;
