import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {signInWithGoogle, Disconnect} from "../firebase";

const Navbar = () => {
  const [menuSelected, setMenuSelected] = useState("home");

  const changeMenuSelected = (menu) => {
    setMenuSelected(menu);
  }

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <NavLink onClick={() => changeMenuSelected("home")} className="navbar-brand" to="/">
            {menuSelected === "home" && <ion-icon name="home-sharp"></ion-icon>}
            {menuSelected !== "home" && <ion-icon name="home-outline"></ion-icon>}  
        </NavLink>
        <NavLink onClick={() => changeMenuSelected("club")} className="navbar-brand" to="/club">
            {menuSelected === "club" && <ion-icon name="layers-sharp"></ion-icon>}
            {menuSelected !== "club" && <ion-icon name="layers-outline"></ion-icon>}
        </NavLink>
        <NavLink onClick={() => changeMenuSelected("training")} className="navbar-brand" to="/training">
            {menuSelected === "training" && <ion-icon name="barbell-sharp"></ion-icon>}
            {menuSelected !== "training" && <ion-icon name="barbell-outline"></ion-icon>}
        </NavLink>
        <NavLink onClick={() => changeMenuSelected("equipes")} className="navbar-brand" to="/equipes">
            {menuSelected === "equipes" && <ion-icon name="bookmarks-sharp"></ion-icon>}
            {menuSelected !== "equipes" && <ion-icon name="bookmarks-outline"></ion-icon>}
        </NavLink>
        <NavLink onClick={() => changeMenuSelected("numeroResponsables")} className="navbar-brand" to="/numeroResponsables">
            {menuSelected === "numeroResponsables" && <ion-icon name="call-sharp"></ion-icon>}
            {menuSelected !== "numeroResponsables" && <ion-icon name="call-outline"></ion-icon>}
        </NavLink>
        <NavLink onClick={() => changeMenuSelected("member")} className="navbar-brand" to="/member">
            {menuSelected === "member" && <ion-icon name="list-sharp"></ion-icon>}
            {menuSelected !== "member" && <ion-icon name="list-outline"></ion-icon>}
        </NavLink>
        {(localStorage.getItem("email") === null || localStorage.getItem("email") === "") &&
          <button
              className="buttonConnexion navbar-brand text-right" onClick={signInWithGoogle}>
              <ion-icon name="log-in-sharp"></ion-icon>
          </button>
        }
        {localStorage.getItem("email") !== null && localStorage.getItem("email") !== "" &&
          <button
              className="buttonConnexion navbar-brand text-right" onClick={Disconnect}>
              <ion-icon name="log-out"></ion-icon>
          </button>
        }
      </nav>
    </>
  );
};

export default Navbar;
