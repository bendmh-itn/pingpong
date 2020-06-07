import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          TTSauveniere
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/club">
                le club
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/training">
                Entrainements
              </NavLink>
            </li>
            <li className="nav-item dropdown active">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Membres
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/member">
                  Liste de force
                </NavLink>
                <NavLink className="dropdown-item" to="/becomeMember">
                  Devenir membre
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown active">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Contact
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item d-block d-sm-block d-md-none"
                  to="/mail"
                >
                  Mail
                </NavLink>
                <NavLink className="dropdown-item" to="/numeroResponsables">
                  Responsables
                </NavLink>
                <NavLink className="dropdown-item" to="/mapClub">
                  Nous situer
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
