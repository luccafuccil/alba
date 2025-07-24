import { Link, useLocation } from "react-router-dom";


const MenuItem = ({ children, icon: Icon, to, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li role="menuitem">
      <Link
        to={to}
        className={`menu-item-link${isActive ? " menu-item-link--active" : ""}`}
        {...props}
      >
        {Icon && (
          <span className="menu-item-icon">
            <Icon className="icon-unit" style={{ marginRight: 5 }} />
          </span>
        )}
        <span className="menu-item-label">{children}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
