import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SubMenu from './submenu';

// TODO: Роутинг сабменю

const NavItem = ({ data }) => (
  <li className="nav__item">
    <Link
      to={data.path}
      className="nav__link"
      aria-label="Ссылка на страницу услуг"
    >
      {data.name}
    </Link>
    {data.children && <SubMenu subMenuTitle={data.name} data={data.children} />}
  </li>
);

NavItem.propTypes = {
  data: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.object),
    ]).isRequired.isRequired,
  }).isRequired,
};

export default NavItem;
