import React, { useEffect, useState } from "react";
import JumbotronChange from "../services/jumbotronChange";
import imageList from "../IMG/liste.png";
import ModalCreatePlayer from "../components/ModalCreatePlayer";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy, addDoc, updateDoc, doc, where, deleteDoc } from "firebase/firestore";

const Member = () => {
  const [message, setMessage] = useState("Bravo");
  const [classSuccessError, setClassSuccessError] = useState("success");
  const [visibleOrNot, setVisibleOrNot] = useState("invisible");
  const [playersCollection, setPlayersCollection] = useState([]);
  const [listeJoueurs, setListeJoueurs] = useState([]);
  const [playerCreated, setPlayerCreated] = useState(false);
  const [userConnected, setUserConnected] = useState(null);

  useEffect(() => {
    JumbotronChange.changeText("Liste de force du TT Sauvenière");
    JumbotronChange.changeImage(imageList);
    const listeJoueurCollectionRef = collection(db, "Joueurs");
    const listeUsersCollectionRef = collection(db, "users");
    const listeJoueursCollectionRefWhereActifOrderByClassement = query(listeJoueurCollectionRef, where("etat", "==", "actif"), orderBy("classement"), orderBy("nom"), orderBy("prenom"));
    setPlayersCollection(listeUsersCollectionRef);
    const listeUsersCollectionRefConnected = query(listeUsersCollectionRef, where("email", "==", localStorage.getItem("email")));

    const getUserConnected = async () => {
      const data = await getDocs(listeUsersCollectionRefConnected);
      setUserConnected(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

    }

    const getPlayers = async () => {
      const data = await getDocs(listeJoueursCollectionRefWhereActifOrderByClassement);
      setListeJoueurs(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    setPlayerCreated(false);

    getPlayers();
    getUserConnected();
  }, [playerCreated]);

  const CreatePlayer = async (data) => {
    await addDoc(playersCollection, {classement: data.ranking, nom: data.lastName, etat : "actif", prenom: data.firstName})
      .then(() => {
          setMessage("Le joueur est inscrit");
          setVisibleOrNot("visible");
          setPlayerCreated(true);
      }).catch((error) => {
          setMessage("Il y a une erreur : " + error);
          setVisibleOrNot("visible");
          setClassSuccessError("error");
      })
  }


  return (
    <>
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
          {
            listeJoueurs.map((player, index) => {
              return (
              <tr key={player.id}>
                <th scope="row" className="text-center">{index +1}</th>
                <td className="text-center">{player.nom}</td>
                <td className="text-center">{player.prenom}</td>
                <td className="text-center">{player.classement}</td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
      {
        userConnected !== null && userConnected[0] !== undefined && userConnected[0].role === "admin" &&
        <ModalCreatePlayer
          CreatePlayer={CreatePlayer}
        />
      }
      
      <div className={"alert mt-3 alert-" + classSuccessError + " " + visibleOrNot} role="alert">
          {message}
      </div>
    </>
  );
};

export default Member;
