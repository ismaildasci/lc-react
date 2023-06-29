import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/api" activeClassName="active" exact>
            API
          </NavLink>
        </li>
        <li>
          <NavLink to="/issues" activeClassName="active" exact>
            Issues
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
