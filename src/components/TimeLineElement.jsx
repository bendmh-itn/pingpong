import React from "react";

const TimeLineElement = ({ toogleShow, year, title, text }) => {
  return (
    <>
      <div className="timeline">
        <button className="buttonTimeline" onClick={toogleShow}>
          ⬇
        </button>
        <h2 className="year">{year}</h2>
        <h5 className="title">{title}</h5>
        <div className="inner-content d-none">
          <p className="description">{text}</p>
        </div>
      </div>
    </>
  );
};

export default TimeLineElement;
