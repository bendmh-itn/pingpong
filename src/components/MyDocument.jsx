import React from "react";

const MyDocument = ({ src, width, height }) => {
  return (
    <>
      <div className="d-none d-sm-block">
        <embed
          src={src}
          width={width}
          height={height}
          type="application/pdf"
        ></embed>
      </div>
      <div>
        <a href={src} target="_blank" rel="noopener noreferrer">
          Liste de force
        </a>
      </div>
    </>
  );
};

export default MyDocument;
