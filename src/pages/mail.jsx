import React, { useEffect } from "react";
import FormContact from "../components/FormContact";
import JumbotronChange from "../services/jumbotronChange";
import imageMail from "../IMG/mails.png";
import NavbarSiteMobileContact from "../components/NavbarSiteMobileContact";

const Mail = () => {
  useEffect(() => {
    JumbotronChange.changeText("Envoyez nous un mail");
    JumbotronChange.changeImage(imageMail);
  }, []);

  return (
    <>
      <div className="d-block d-sm-block d-md-none">
        <NavbarSiteMobileContact
          onglet="mail"
        />
      </div>
      <FormContact
        width="250"
        height="450"
        title="Nous contactez"
        src="https://www.emailmeform.com/builder/form/yp130CamsP4TeMYAx1N"
      />
    </>
  );
};

export default Mail;
