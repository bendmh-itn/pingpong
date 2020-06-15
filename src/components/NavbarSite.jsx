import React from "react";
import "../CSS/navbarSite.css";
import $ from "jquery";

const NavbarSite = (props) => {
  const toggleComponent = (e) => {
    let element = e.target.id;
    if (element === "history") {
      $(".history").addClass("d-block");
      $(".history").removeClass("d-none");
      $(".infrastructure").removeClass("d-block");
      $(".infrastructure").addClass("d-none");
    } else {
      $(".history").addClass("d-none");
      $(".history").removeClass("d-block");
      $(".infrastructure").removeClass("d-none");
      $(".infrastructure").addClass("d-block");
    }
  };

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
              onClick={toggleComponent}
              id="infrastructure"
              className="menu m-0 border-0"
            >
              Infrastructure
            </li>
            <li
              onClick={toggleComponent}
              id="history"
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
