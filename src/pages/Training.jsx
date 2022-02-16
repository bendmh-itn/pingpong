import React, { useEffect } from "react";
import imageRetro from "../IMG/retro.png";
import personnesEntrainement from "../IMG/personnes.jpg";
import JumbotronChange from "../services/jumbotronChange";

const Training = () => {
  useEffect(() => {
    JumbotronChange.changeText("Les entrainements du club");
    JumbotronChange.changeImage(imageRetro);
  }, []);

  return (
    <>
      <div className="ml-3">
        <div>
          <p>
            Les entraînements sont donnés par : 
          </p>
          <p><strong>Benoit de Mahieu</strong></p>
          <p>
            Entrainements dirigés des jeunes : 
          </p>
          <p><strong>Mardi 18h30-20h</strong></p>
        </div>
        <div>
          <img src={personnesEntrainement} alt="Les personnes qui viennent s'entrainer" width="100%" />
        </div>

      </div>
    </>
  );
};

export default Training;
