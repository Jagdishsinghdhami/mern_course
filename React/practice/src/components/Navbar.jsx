import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <div className="mainNavbar">
      <NavLink to="/">
        <img src="../../public/images/logo.png" alt="Logo image" />
      </NavLink>
      <Nav />
    </div>
  );
};

export default Navbar;
