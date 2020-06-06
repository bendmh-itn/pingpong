import React, { useEffect } from "react";
import FormContact from "../components/FormContact";
import jumbotronChange from "../services/jumbotronChange";

const Mail = (props) => {
  useEffect(() => {
    jumbotronChange.changeText("Envoyez nous un mail");
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
