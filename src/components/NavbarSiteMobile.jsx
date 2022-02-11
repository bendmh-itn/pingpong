import React from "react";
import "../CSS/navbarSite.css";

const NavbarSiteMobile = ({ handleChange }) => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <div
              onClick={() => handleChange("infra")}
              className="menu m-0 border-0"
            >
              <ion-icon name="business-sharp"></ion-icon>
            </div>
            <div
              onClick={() => handleChange("history")}
              className="menu m-0 border-0"
            >
              <ion-icon name="newspaper-sharp"></ion-icon>
            </div>
      </nav>
    </>
  );
};

export default NavbarSiteMobile;
