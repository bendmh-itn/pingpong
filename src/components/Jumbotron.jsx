import React from "react";

const Jumbotron = ({
  text = "Petit club mais avec des grands joueurs",
  img,
  imgAlt = "",
  height = "45px",
}) => {
  return (
    <div className="jumbotron">
      {img && (
        <img
          className="imgJumbotron"
          src={img}
          alt={imgAlt}
          style={{ height: height, width: "auto" }}
        />
      )}
      <h1 className="h1Jumbotron">{text}</h1>
      {img && (
        <img
          className="imgJumbotron"
          src={img}
          alt={imgAlt}
          style={{ height: height, width: "auto" }}
        />
      )}
    </div>
  );
};

export default Jumbotron;
