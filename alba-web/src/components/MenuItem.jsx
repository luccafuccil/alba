import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";

const MenuItem = ({ children, icon: Icon, to, ...props }) => (
  <li role="menuitem">
    <Link to={to} className="menu-item-link" {...props}>
      {Icon && (
        <span className="menu-item-icon">
          <Icon className="icon-unit" style={{ marginRight: 5 }} />
        </span>
      )}
      <span className="menu-item-label">{children}</span>
    </Link>
  </li>
);

export default MenuItem;
