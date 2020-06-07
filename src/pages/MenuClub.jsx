import React, { useEffect } from "react";
import JumbotronChange from "../services/jumbotronChange";
import imageHome from "../IMG/ping.png";
import "../CSS/timeline.css";
import NavbarSite from "../components/NavbarSite";
import HistoryClub from "./HistoryClub";
import ClubInfrastructure from "./ClubInfrastructure";

const MenuClub = (props) => {
  useEffect(() => {
    JumbotronChange.changeText("Le club de Sauvenière");
    JumbotronChange.changeImage(imageHome);
  }, []);

  return (
    <>
      <NavbarSite />
      <HistoryClub />
      <ClubInfrastructure />
    </>
  );
};

export default MenuClub;
