import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Picture from './picture';

const BreadCrumb = ({ data, isActive }) => {
  return (
    <li
      className={`breadcrumbs__breadcrumb breadcrumb ${
        isActive ? 'breadcrumb--active' : ''
      }`}
    >
      <Link className="breadcrumb__link" to={`${data.path}`}>
        {(data.path === '/' && (
          <Picture src="../img/breadCrumbLogo" alt="На главную" />
        )) ||
          data.name}
      </Link>
    </li>
  );
};

BreadCrumb.defaultProps = {
  isActive: false,
};

BreadCrumb.propTypes = {
  data: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool,
};

export default BreadCrumb;
