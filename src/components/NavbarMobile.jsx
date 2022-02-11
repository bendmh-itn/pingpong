import React from "react";
import { NavLink } from "react-router-dom";
import {signInWithGoogle} from "../firebase";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
            <ion-icon name="home-sharp"></ion-icon>
        </NavLink>
        <NavLink className="navbar-brand" to="/club">
            <ion-icon name="layers-sharp"></ion-icon>
        </NavLink>
        <NavLink className="navbar-brand" to="/training">
            <ion-icon name="barbell-sharp"></ion-icon>
        </NavLink>
        <NavLink className="navbar-brand" to="/equipes">
            <ion-icon name="bookmarks-sharp"></ion-icon>
        </NavLink>
        <NavLink className="navbar-brand" to="/numeroResponsables">
            <ion-icon name="call-sharp"></ion-icon>
        </NavLink>
        <NavLink className="navbar-brand" to="/member">
            <ion-icon name="list-sharp"></ion-icon>
        </NavLink>
        <button
            className="buttonConnexion navbar-brand text-right" onClick={signInWithGoogle}>
            <ion-icon name="log-in-sharp"></ion-icon>
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
                <ion-icon name="barbell-outline"></ion-icon>
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
                    <ion-icon name="list-outline"></ion-icon>
                </NavLink>
                <NavLink className="dropdown-item" to="/becomeMember">
                <ion-icon name="person-add-sharp"></ion-icon>
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
                <ion-icon name="call-sharp"></ion-icon>
                </NavLink>
                
              </div>
            </li>
            <li className="nav-item active">
              
            </li>
          </ul>
          <button
              className="buttonConnexion navbar-brand text-right" onClick={signInWithGoogle}>
              Connexion
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
