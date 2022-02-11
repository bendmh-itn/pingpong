import React, { useEffect, useState } from "react";
import JumbotronChange from "../services/jumbotronChange";
import imageList from "../IMG/liste.png";
import {getPlayers, loadPlayers} from '../services/callAPI';
import NavbarSiteMobileMember from "../components/NavbarSiteMember";

const Member = () => {
  const [listeJoueurs, setListeJoueurs] = useState([]);

  useEffect(() => {
    JumbotronChange.changeText("Liste de force du TT Sauvenière");
    JumbotronChange.changeImage(imageList);

    let players = getPlayers();
    if(players.length === 0){
      loadPlayers().then((res) => {
        setListeJoueurs(res.data);
      });
    }else {
      setListeJoueurs(players);
    }
  }, []);


  return (
    <>
      <div className="d-block d-sm-block d-md-none">
        <NavbarSiteMobileMember />
      </div>
      <table className="table table-striped">
        <thead className="visibleOrNot">
          <tr>
            <th scope="col" className="text-center">Indice</th>
            <th scope="col" className="text-center">Nom</th>
            <th scope="col" className="text-center">Prénom</th>
            <th scope="col" className="text-center">Classement</th>
          </tr>
        </thead>
        <tbody>
          {listeJoueurs.map((player) => {
              return (
              <tr key={player.UniqueIndex}>
                <th scope="row" className="text-center">{player.Position}</th>
                <td className="text-center">{player.LastName}</td>
                <td className="text-center">{player.FirstName}</td>
                <td className="text-center">{player.Ranking}</td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default Member;
