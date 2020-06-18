import React from "react";
import "../CSS/navbarSite.css";

const NavbarSite = ({ handleChange }) => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li
              onClick={() => handleChange("infra")}
              className="menu m-0 border-0"
            >
              Infrastructure
            </li>
            <li
              onClick={() => handleChange("history")}
              className="menu m-0 border-0"
            >
              Historique
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarSite;
