import React from "react";
import "../CSS/navbarSite.css";
import { NavLink } from "react-router-dom";

const NavbarSiteMobileContact = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <NavLink className="navbar-brand" to="/numeroResponsables">
            <ion-icon name="call-sharp"></ion-icon>
        </NavLink>
        <NavLink className="navbar-brand" to="/mail">
            <ion-icon name="mail-sharp"></ion-icon>
        </NavLink>
        <NavLink className="navbar-brand" to="/mapClub">
            <ion-icon name="location-sharp"></ion-icon>
        </NavLink>
      </nav>
    </>
  );
};

export default NavbarSiteMobileContact;
