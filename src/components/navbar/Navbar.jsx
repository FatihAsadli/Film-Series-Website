import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="container">
      <div className="navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />

        <ul className="nav-ul">
          <li className={pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              pathname.startsWith("/movies") ||
              pathname.startsWith("/movie") ||
              pathname.startsWith("/show")
                ? "active"
                : ""
            }
          >
            <Link to="/movies">Movies & Shows</Link>
          </li>
          <li className={pathname === "/support" ? "active" : ""}>
            <Link to="/support">Support</Link>
          </li>
          <li className={pathname === "/subscriptions" ? "active" : ""}>
            <Link to="/subscriptions">Subscriptions</Link>
          </li>
        </ul>

        <div className="nav-buttons">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-bell"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
