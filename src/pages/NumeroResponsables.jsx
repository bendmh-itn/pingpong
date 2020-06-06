import React, { useEffect } from "react";
import JumbotronChange from "../services/jumbotronChange";
import Responsable from "../components/Responsable";
import imageTel from "../IMG/tel.PNG";

const NumeroResponsables = (props) => {
  useEffect(() => {
    JumbotronChange.changeText("Liste des responsables du club");
    JumbotronChange.changeImage(imageTel);
  }, []);
  return (
    <>
      <div style={{ width: "100%" }} className="row flex pl-5">
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
