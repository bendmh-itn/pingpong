import React from "react";
import Jumbotron from "../components/Jumbotron";
import imageRetro from "../IMG/retro.png";

const Training = (props) => {
  return (
    <>
      <Jumbotron
        text="Les entraînements du club"
        img={imageRetro}
        imgAlt="personne jouant au ping"
        height="70px"
      />

      <div className="container">
        <p>
          Les entraînements sont donnés par : <strong>Benoit de Mahieu</strong>
        </p>
        <p>
          Entrainements dirigés des jeunes : <strong>Mardi 18h30-20h</strong>
        </p>
        <p>
          Entrainements libres : <strong>Mardi 20h-</strong>
        </p>
      </div>
    </>
  );
};

export default Training;
