import React from "react";
import TimeLineElement from "../components/TimeLineElement";

const HistoryClub = (props) => {
  const toogleShow = (e) => {
    let elementToogle = e.target.parentNode.getElementsByClassName(
      "inner-content"
    )[0];
    let classes = elementToogle.classList;
    if (classes[1] === "d-none") {
      e.target.innerHTML = "⬆";
      elementToogle.className = "inner-content";
      elementToogle.className += " d-block";
    } else {
      e.target.innerHTML = "⬇";
      elementToogle.className = "inner-content";
      elementToogle.className += " d-none";
    }
  };
  return (
    <>
      <div className="main-timeline4 ml-3 history">
        <TimeLineElement
          toogleShow={toogleShow}
          text="C'est lors des championnats provinciaux que Bastien se hisse en final dans la catégorie des NC. 
              Nouveau joueur au club, il effectue un parcours des plus impressionants"
          title="Bastien Mathurin finaliste des championnats provinciaux"
          year="2020"
        />
        <TimeLineElement
          toogleShow={toogleShow}
          text="C'est en 2008-2009 que le club de Sauvenière se hisse en régionale. 
          C'est une grande prouesse pour notre petit club. L'équipe est composée de Sylvain Berten, Steve Vleminckx, Mickael Caplier et Geoffrey Bolain. 
          Ils y resteront plusieurs années"
          title="Première année en régionale"
          year="2008-2009"
        />
        <TimeLineElement
          toogleShow={toogleShow}
          text="Nicolas remporte le championnat provincial série E. Il est classé E2 et effectue un parcours plus qu'exemplaire. 
          Il a su garder son calme malgré des moments tendus. Au vu de ses performances cette année-la, il montera D2 l'année suivante."
          title="Nicolas Michel gagne les championnats provinciaux en série E"
          year="2005"
          href="http://users.skynet.be/sauveniere/Activites/TennisTable/ChampionProvincial.htm?fbclid=IwAR12pLo7PMGR6i9oPnWPNfdC08Je2qTXyyiN-m6P6YvVY_wDdWlShF-zVzc"
          hrefText="Article web"
        />
        <TimeLineElement
          toogleShow={toogleShow}
          text="C'est en 1988 que le club s'installe dans la salle de gym de l'école primaire de Sauvenière.
          Le club joue la depuis lors."
          title="Déménagement à l'école de Sauvenière"
          year="1988"
        />
        <TimeLineElement
          toogleShow={toogleShow}
          text="C'est par Arthur Balza que le club de Sauvenière fait son apparition. 
          Les tables étaient tout d'abord installées dans le vieux moulin. Ensuite dans une salle rue du village.
          Pour finir Arthur Balza va construire une salle exprès pour la pratique du tennis de table 
          chez lui rue du petit ry. "
          title="Création du club"
          year="1976"
        />
      </div>
    </>
  );
};

export default HistoryClub;
