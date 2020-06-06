import React from "react";

const FormContact = ({ width = "540px", src, height, title }) => {
  return (
    <>
      <div style={{ width: width, border: "solid black 1px" }}>
        <h2 className="mb-0 d-none d-sm-block" style={{ textAlign: "center" }}>
          {title}
        </h2>
        <iframe
          title="contactForm"
          src={src}
          allowtransparency="true"
          frameBorder="0"
          width="100%"
          height={height}
          name="auto_size_iframe_Fc0tbw65v16jfa"
          id="auto_size_iframe_Fc0tbw65v16jfa"
          scrolling="no"
        ></iframe>
      </div>
    </>
  );
};

export default FormContact;
