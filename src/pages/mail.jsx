import React, { useEffect } from "react";
import FormContact from "../components/FormContact";
import JumbotronChange from "../services/jumbotronChange";
import imageMail from "../IMG/mails.png";

const Mail = (props) => {
  useEffect(() => {
    JumbotronChange.changeText("Envoyez nous un mail");
    JumbotronChange.changeImage(imageMail);
  }, []);

  return (
    <>
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
