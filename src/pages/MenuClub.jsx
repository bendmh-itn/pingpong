import React, { useEffect, useState } from "react";
import JumbotronChange from "../services/jumbotronChange";
import imageHome from "../IMG/ping.png";
import "../CSS/timeline.css";
import NavbarSite from "../components/NavbarSite";
import HistoryClub from "./HistoryClub";
import ClubInfrastructure from "./ClubInfrastructure";

const MenuClub = (props) => {
  const [affichage, setaffichage] = useState(true);

  const handleChange = (e) => {
    if (e === "infra") {
      setaffichage(true);
    } else {
      setaffichage(false);
    }
  };

  useEffect(() => {
    JumbotronChange.changeText("Le club de Sauvenière");
    JumbotronChange.changeImage(imageHome);
  }, []);

  function ElementChanging() {
    if (affichage) {
      return <ClubInfrastructure />;
    }
    return <HistoryClub />;
  }

  return (
    <>
      <NavbarSite handleChange={handleChange} />
      <ElementChanging />
    </>
  );
};

export default MenuClub;
