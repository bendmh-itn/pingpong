import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <footer>
        <div
          className="page-footer align-middle"
          style={{ textAlign: "center" }}
        >
          <Link to="/mapClub">
            Adresse du club : Place du sablon 5030 Sauvenière
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
