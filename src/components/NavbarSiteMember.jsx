import React from "react";
import "../CSS/navbarSite.css";
import { NavLink } from "react-router-dom";

const NavbarSiteMobileMember = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <NavLink className="navbar-brand" to="/member">
            <ion-icon name="list-sharp"></ion-icon>
        </NavLink>
        <NavLink className="navbar-brand" to="/becomeMember">
            <ion-icon name="person-add-sharp"></ion-icon>
        </NavLink>
      </nav>
    </>
  );
};

export default NavbarSiteMobileMember;
