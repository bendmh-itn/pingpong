import React from "react";

const TimeLineElement = ({
  toogleShow,
  year,
  title,
  text,
  href = "",
  hrefText = "",
}) => {
  return (
    <>
      <div className="timeline">
        <button className="buttonTimeline" onClick={toogleShow}>
          ⬇
        </button>
        <h2 className="year">{year}</h2>
        <h5 className="title">{title}</h5>
        <div className="inner-content d-none">
          <p className="description mb-0">{text}</p>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {hrefText}
          </a>
        </div>
      </div>
    </>
  );
};

export default TimeLineElement;
