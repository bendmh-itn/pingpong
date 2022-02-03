import React, { useEffect } from "react";
import imageRetro from "../IMG/retro.png";
import JumbotronChange from "../services/jumbotronChange";

const Training = (props) => {
  useEffect(() => {
    JumbotronChange.changeText("Les entrainements du club");
    JumbotronChange.changeImage(imageRetro);
  }, []);

  return (
    <>
      <div className="ml-3">
        <p>
          Les entraînements sont donnés par : <strong>Benoit de Mahieu</strong>
        </p>
        <p>
          Entrainements dirigés des jeunes : <strong>Mardi 18h30-20h</strong>
        </p>
      </div>
    </>
  );
};

export default Training;
