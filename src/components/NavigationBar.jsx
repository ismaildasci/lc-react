import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active" exact="true">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active" exact="true">
            API
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active" exact="true">
            Issues
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeclassname="active">
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
