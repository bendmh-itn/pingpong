import React from "react";
import TimeLineElement from "../components/TimeLineElement";

const HistoryClub = (props) => {
  const toogleShow = (e) => {
    let elementToogle = e.target.parentNode.getElementsByClassName(
      "inner-content"
    );
    let classes = elementToogle[0].classList;
    if (classes[1] === "d-none") {
      e.target.innerHTML = "⬆";
      elementToogle[0].className = "inner-content";
      elementToogle[0].className += " d-block";
    } else {
      e.target.innerHTML = "⬇";
      elementToogle[0].className = "inner-content";
      elementToogle[0].className += " d-none";
    }
  };
  return (
    <>
      <div className="main-timeline4 ml-3 history d-none">
        <TimeLineElement
          toogleShow={toogleShow}
          text="C'est lors des championnats provinciaux que Bastien se hisse en final dans la catégorie des NC. 
              Nouveau joueur au club, il effectue un parcours des plus impressionants"
          title="Bastien Mathurin finaliste des championnats provinciaux"
          year="2020"
        />
        <TimeLineElement
          toogleShow={toogleShow}
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In
                  suscipit quam eget dui auctor."
          title="Web Developer"
          year="2017"
        />
        <TimeLineElement
          toogleShow={toogleShow}
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In
                  suscipit quam eget dui auctor."
          title="Web Developer"
          year="2016"
        />
        <TimeLineElement
          toogleShow={toogleShow}
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In
                  suscipit quam eget dui auctor."
          title="Web Developer"
          year="2015"
        />
        <TimeLineElement
          toogleShow={toogleShow}
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In
                  suscipit quam eget dui auctor."
          title="Web Developer"
          year="2014"
        />
      </div>
    </>
  );
};

export default HistoryClub;
