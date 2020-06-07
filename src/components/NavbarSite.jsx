import React from "react";
import "../CSS/navbarSite.css";
import $ from "jquery";

const NavbarSite = (props) => {
  const toggleComponent = (e) => {
    let element = e.target.id;
    if (element === "history") {
      console.log("history");
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
      <div className="row ml-3">
        <li onClick={toggleComponent} id="infrastructure" className="menu">
          Infrastructure
        </li>
        <li onClick={toggleComponent} id="history" className="menu">
          Historique
        </li>
      </div>
    </>
  );
};

export default NavbarSite;
