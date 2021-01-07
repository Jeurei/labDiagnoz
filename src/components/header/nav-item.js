import React from 'react';
import PropTypes from 'prop-types';
import SubMenu from './submenu';

const NavItem = ({ data }) => (
  <li className="nav__item">
    <a href={data.link} className="nav__link" aria-label="Ссылка на страницу услуг">
      {data.text}
    </a>
    {data.children && <SubMenu subMenuTitle={data.text} data={data.children} />}
  </li>
);

NavItem.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.object)]).isRequired
      .isRequired,
  }).isRequired,
};

export default NavItem;
