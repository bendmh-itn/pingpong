import React from "react";
import "../CSS/navbarSite.css";
import { NavLink } from "react-router-dom";

const NavbarSiteMobileMember = ({onglet}) => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <NavLink className="navbar-brand" to="/member">
            {onglet === "member" && <ion-icon name="list-sharp"></ion-icon>}
            {onglet !== "member" && <ion-icon name="list-outline"></ion-icon>}
        </NavLink>
        <NavLink className="navbar-brand" to="/becomeMember">
            {onglet === "becomeMember" && <ion-icon name="person-add-sharp"></ion-icon>}
            {onglet !== "becomeMember" && <ion-icon name="person-add-outline"></ion-icon>}
        </NavLink>
      </nav>
    </>
  );
};

export default NavbarSiteMobileMember;
