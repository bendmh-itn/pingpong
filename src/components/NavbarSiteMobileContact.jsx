import React from "react";
import "../CSS/navbarSite.css";
import { NavLink } from "react-router-dom";

const NavbarSiteMobileContact = ({onglet}) => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <NavLink className="navbar-brand" to="/numeroResponsables">
            {onglet === "numeroResponsables" && <ion-icon name="call-sharp"></ion-icon>}
            {onglet !== "numeroResponsables" && <ion-icon name="call-outline"></ion-icon>}
        </NavLink>
        <NavLink className="navbar-brand" to="/mail">
            {onglet === "mail" && <ion-icon name="mail-sharp"></ion-icon>}
            {onglet !== "mail" && <ion-icon name="mail-outline"></ion-icon>}
        </NavLink>
        <NavLink className="navbar-brand" to="/mapClub">
            {onglet === "mapClub" && <ion-icon name="location-sharp"></ion-icon>}
            {onglet !== "mapClub" && <ion-icon name="location-outline"></ion-icon>}
        </NavLink>
      </nav>
    </>
  );
};

export default NavbarSiteMobileContact;
