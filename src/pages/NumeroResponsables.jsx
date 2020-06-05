import React, { useEffect } from "react";
import jumbotronChange from "../services/jumbotronChange";
import Responsable from "../components/Responsable";

const NumeroResponsables = (props) => {
  useEffect(() => {
    jumbotronChange.changeText(
      "<h1 class='h1Jumbotron'>Liste des repsonsables du club</h1>"
    );
  }, []);
  return (
    <>
      <div style={{ width: "800px" }} className="row flex pl-5">
        <div className="col-sm">
          <Responsable
            name="Benoit de Mahieu"
            num="0491430548"
            status="Entraineur"
          />
        </div>
        <div className="col-sm">
          <Responsable name="Léa Litwinski" num="04********" status="....." />
        </div>
        <div className="col-sm">
          <Responsable name="Stani Litwinski" num="04********" status="....." />
        </div>
      </div>
    </>
  );
};

export default NumeroResponsables;
