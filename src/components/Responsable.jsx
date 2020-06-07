import React from "react";
import defaultProfil from "../IMG/defaultProfil.png";
import "../CSS/responsable.css";

const Responsable = ({ img, alt, name, num, status }) => {
  return (
    <>
      <div className="card">
        <img
          src={img ? img : defaultProfil}
          className="card-img-top d-md-none d-lg-block"
          alt={alt ? alt : "Avatar par défaut"}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text">
            <p>
              Num : <strong>{num}</strong>
            </p>
            <p>
              Status : <strong>{status}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Responsable;
