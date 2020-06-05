import React from "react";

const MyDocument = ({ src, width, height }) => {
  return (
    <>
      <embed
        src={src}
        width={width}
        height={height}
        type="application/pdf"
      ></embed>
    </>
  );
};

export default MyDocument;
