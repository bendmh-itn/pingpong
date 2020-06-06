import React from "react";

const Jumbotron = ({
  text = "Petit club mais avec des grands joueurs",
  img,
  imgAlt = "",
  height = "45px",
}) => {
  return (
    <>
      <div className="jumbotron d-block d-sm-none">
        <h3 className="h1Jumbotron ">{text}</h3>
      </div>
      <div className="jumbotron d-none d-sm-block">
        {img && (
          <img
            className="imgJumbotron"
            src={img}
            alt={imgAlt}
            style={{ height: height, width: "auto" }}
          />
        )}
        <h1 className="h1Jumbotron">{text}</h1>
        <span style={{ fontSize: "2em" }}> (N186)</span>
        {img && (
          <img
            className="imgJumbotron"
            src={img}
            alt={imgAlt}
            style={{ height: height, width: "auto" }}
          />
        )}
      </div>
    </>
  );
};

export default Jumbotron;
