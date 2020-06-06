import React, { useEffect } from "react";
import PubLogo from "../components/PubLogo";
import { NavLink } from "react-router-dom";
import imageHome from "../IMG/ping.png";
import JumbotronChange from "../services/jumbotronChange";

const HomePage = (props) => {
  useEffect(() => {
    JumbotronChange.changeText("Petit club mais avec des grands joueurs");
    JumbotronChange.changeImage(imageHome);
  }, []);

  return (
    <>
      <NavLink to="member">
        <button className="btn btn-success ml-5 mr-5">
          <h2>Devenir Membre</h2>
        </button>
      </NavLink>
      <PubLogo
        urlLink="https://resultats.aftt.be/"
        imageAlt="aftt.be"
        imageSource="https://static.wixstatic.com/media/858c57_9f9b98abf5d1400b8e2a79d6d0cebe27~mv2.png/v1/crop/x_7,y_0,w_94,h_80/fill/w_54,h_45,al_c,q_85,usm_0.66_1.00_0.01/aile%20francophone%20tennis%20de%20table.webp"
      />
      <PubLogo
        urlLink="https://www.facebook.com/groups/1647014715544179"
        imageAlt="groupe facebook sauveniere"
        imageSource="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp"
      />
    </>
  );
};

export default HomePage;
