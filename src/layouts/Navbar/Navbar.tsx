import * as React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  return (
    <div className="navbar">
      <NavLink to="" className="nav_link">
        Home
      </NavLink>
      <NavLink to="/todo" className="nav_link">
        ToDo
      </NavLink>
      <NavLink to="/toolkit_redux" className="nav_link">
        Toolkit
      </NavLink>
    </div>
  );
};

export default Navbar;
