import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Routes from 'constants/routes';
import BreadCrumb from './breadCrumb';
import { randomId } from '../utils/common';

// TODO: предположительно сдесь будет ещё один роутинг который предусмотрен на этой странице, типа условно /specialists/1 и тк это рута не будет в родителе переключаться будет только мейн страниы

const BreadCrumbs = ({ className }) => {
  const currentPath = useLocation().pathname.split('/');

  const getArrayOfCurrentBreadCrumbs = (arr) => {
    const subRoutes = [];
    const currArr = [...arr].filter((el) => {
      if (
        currentPath.includes(el.route.replace('/', '')) &&
        Object.prototype.hasOwnProperty.call(el, 'subRoutes')
      ) {
        subRoutes.push(
          getArrayOfCurrentBreadCrumbs(Object.values(el.subRoutes)),
        );
        return true;
      }
      if (currentPath.includes(el.route.replace('/', ''))) {
        return true;
      }
      return false;
    });

    return [...currArr, ...subRoutes];
  };

  const routesArr = [].concat(
    ...getArrayOfCurrentBreadCrumbs(Object.values(Routes)),
  );

  return (
    <ul className={className && `${className}__breadcrumbs breadcrumbs`}>
      {routesArr.map((el) => {
        return (
          <BreadCrumb
            data={el}
            isActive={
              el.route.replace('/', '') === currentPath[currentPath.length - 1]
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
