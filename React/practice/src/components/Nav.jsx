import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="navbar-lists">
        <li>
          <NavLink to="/" className="navbar-link ">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" className="navbar-link ">
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
