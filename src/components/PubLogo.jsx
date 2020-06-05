import React from "react";

const PubLogo = ({ urlLink, imageAlt, imageSource }) => {
  return (
    <>
      <a href={urlLink} target="_blank" rel="noopener noreferrer">
        <img className="pubImages" src={imageSource} alt={imageAlt} />
      </a>
    </>
  );
};

export default PubLogo;
