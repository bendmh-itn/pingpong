import React from "react";
import FormContact from "../components/FormContact";

const ContactForm = (props) => {
  return (
    <>
      <div className="container">
        <FormContact
          height="831"
          src="https://www.emailmeform.com/builder/embed/Fc0tbw65v16jfa?#https%3A%2F%2Fbendmh-itn.github.io%2Fttsauveniere%2Fcontact.html"
        />
      </div>

      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="clubMap"
            allowtransparency="true"
            width="400"
            height="300"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=place%20du%20sablon%205030%20gembloux&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
