import React, { useEffect } from "react";
import JumbotronChange from "../services/jumbotronChange";
import Responsable from "../components/Responsable";
import imageTel from "../IMG/tel.PNG";
import imageEntraineur from "../IMG/entraineur.jpg";
import NavbarSiteMobileContact from "../components/NavbarSiteMobileContact";

const NumeroResponsables = (props) => {
  useEffect(() => {
    JumbotronChange.changeText("Responsables du club");
    JumbotronChange.changeImage(imageTel);
  }, []);
  return (
    <>
      <div className="d-block d-sm-block d-md-none">
        <NavbarSiteMobileContact />
      </div>
      <div
        style={{ width: "100%" }}
        className="row justify-content-center pl-5"
      >
        <Responsable
          name="Benoit de Mahieu"
          num="0491430548"
          status="Entraineur"
          img={imageEntraineur}
        />
        <Responsable name="Léa Litwinski" num="04********" status="....." />
        <Responsable name="Stani Litwinski" num="04********" status="....." />
      </div>
    </>
  );
};

export default NumeroResponsables;
