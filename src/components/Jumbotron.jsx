import React from "react";

const Jumbotron = ({ text, img, imgAlt = "", height = "45px" }) => {
  return (
    <div className="jumbotron">
      <h1>
        {img && (
          <img
            src={img}
            alt={imgAlt}
            style={{ height: height, width: "auto" }}
          />
        )}
        {text}
        {img && (
          <img
            src={img}
            alt={imgAlt}
            style={{ height: height, width: "auto" }}
          />
        )}
      </h1>
    </div>
  );
};

export default Jumbotron;
