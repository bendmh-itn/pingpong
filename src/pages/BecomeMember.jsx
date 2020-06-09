import React, { useEffect } from "react";
import imageHome from "../IMG/ping.png";
import JumbotronChange from "../services/jumbotronChange";
import { NavLink } from "react-router-dom";

const BecomeMember = (props) => {
  useEffect(() => {
    JumbotronChange.changeText("S'inscrire au club TT Sauvenière");
    JumbotronChange.changeImage(imageHome);
  }, []);
  return (
    <>
      <h2>Informations générales</h2>
      <p>
        Nous autorisons tous jeunes à venir tester les entrainements dirigés
        pour se familiariser avec ce sport. Après une certaine période, si le
        jeune souhaite participer à la compétition, l'inscription au club et le
        payement de la cotisation est indispensable.
      </p>
      <p>
        Le coût de la cotisation annuelle pour la saison 2020-2021 est de{" "}
        <strong>70€</strong>
      </p>
      <h2>L'affiliation au TT Sauvenière comprend : </h2>
      <ul>
        <li>L’affiliation à la fédération de tennis de table</li>
        <li>Les entraînements dirigés</li>
        <li>Le maillot du club</li>
        <li>
          Une participation/présence active aux entrainements et aux compétition
        </li>
        <li>
          Jouer à domicile et à l'extérieur, il est possible de demander
          quelques lifts aux parents
        </li>
      </ul>
      <h2>Comment s'affilier</h2>
      <ol>
        <li>
          Télécharger et compléter le{" "}
          <a
            href="https://aftt.be/wp-content/uploads/2020/03/Affiliation-2020-2021-2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Document d'inscription
          </a>{" "}
          de la fédération de tennis de table
        </li>
        <li>
          Passer une visite médicale auprès de votre médecin qui doit compléter
          le document de la Fédération et vous déclarer apte à la pratique du
          tennis de table
        </li>
        <li>Remettre le document au club</li>
        <li>Payer la cotisation selon les modalités du club (BE.....)</li>
      </ol>

      <p>
        Pour toute information supplémentaire, n'hésitez pas à nous contacter
        par téléphone (<NavLink to="/numeroResponsables">contact</NavLink>) ou
        par mail{" "}
        <NavLink to="/mail">
          <span className="d-inline d-sm-inline d-md-none">(formulaire)</span>
        </NavLink>
        <span className="d-none d-sm-none d-md-inline">(formulaire)</span>
      </p>
    </>
  );
};

export default BecomeMember;
