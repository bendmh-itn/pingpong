import React, { useEffect, useState } from "react";
import JumbotronChange from "../services/jumbotronChange";
import imageHome from "../IMG/ping.png";
import "../CSS/timeline.css";
import NavbarSite from "../components/NavbarSite";
import HistoryClub from "./HistoryClub";
import ClubInfrastructure from "./ClubInfrastructure";
import NavbarSiteMobile from "../components/NavbarSiteMobile";

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
      <div className="d-none d-sm-none d-md-block">
        <NavbarSite handleChange={handleChange} />
      </div>
      <div className="d-block d-sm-block d-md-none">
        <NavbarSiteMobile handleChange={handleChange} />
      </div>
      <ElementChanging />
    </>
  );
};

export default MenuClub;
