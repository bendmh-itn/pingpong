import React, { useEffect, useState } from "react";
import imageHome from "../IMG/ping.png";
import JumbotronChange from "../services/jumbotronChange";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy, addDoc, updateDoc, doc, where, deleteDoc } from "firebase/firestore";
import Modal from "../components/Modal";
import ModalCreate from "../components/ModalCreateTeams";

const EquipeSemaine = () => {
    const [listesEquipes, setListesEquipes] = useState([]);
    const [semaineSelected, setSemaineSelected] = useState(1);
    const [userConnected, setUserConnected] = useState(null);
    const [equipeCollection, setEquipeCollection] = useState();
    const [listeJoueurs, setListeJoueurs] = useState([]);
    const [team, setTeam] = useState({equipe: "", clubAdverse: "", deplacement: "", heure: "", joueur1: "", joueur2: "", joueur3: "", joueur4: ""});
    const [listeClub, setListeClub] = useState([]);
    const [message, setMessage] = useState("Bravo");
    const [classSuccessError, setClassSuccessError] = useState("success");
    const [visibleOrNot, setVisibleOrNot] = useState("invisible");
    const [teamChanged, setTeamChanged] = useState(false);

    const deplacement = [
        { value: 'contre', label: 'à domicile' },
        { value: 'à', label: 'à l\'extérieur' }
    ]

    const changeWeek = (value) => {
        setVisibleOrNot("invisible");
        if(semaineSelected !== 1 || value !== -1){
            setSemaineSelected(semaineSelected + value);
        }
    }

    /*const createTeams = async () => {
        let week = ["1", "2", "3", "4"];
        let teams = ["C", "D", "E","F"];
        for(let i=0; i < week.length; i++){
            for(let j=0; j < teams.length; j++){
                await addDoc(equipeCollection, {semaine: week[i], equipe: teams[j], clubAdverse: "", deplacement: "", heure: "", joueur1: "", joueur2
            : "", joueur3: "", joueur4: ""})
            }
        }
        
    }*/

    const CreateAllTeams = async (data) => {
        let teams = ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K"];
        for(let i=1; i <= data.semaines; i++){
            for(let j=0; j < data.equipes; j++){
                await addDoc(equipeCollection, {semaine: "" + i, equipe: teams[j], clubAdverse: "", deplacement: "", heure: "", joueur1: "", joueur2: "", joueur3: "", joueur4: ""})
                .then(() => {
                    setMessage("Les équipes a bien été encodée");
                    setVisibleOrNot("visible");
                    setTeamChanged(true);
                }).catch((error) => {
                    setMessage("Il y a une erreur : " + error);
                    setVisibleOrNot("visible");
                    setClassSuccessError("error");
                })
            }
        }
    }
    

    const choosePersonTeams = (options, number) => {
        setVisibleOrNot("invisible");
        if(options !== null){
            const {label} = options;
            const key = "joueur"+number;
            setTeam({
                ...team,
                [key] : label
            })
        }
    }

    const chooseAdversaire = (e) => {
        setVisibleOrNot("invisible");
        if(e!== null){
            const {label} = e;
            const key = "clubAdverse";
            setTeam({
                ...team,
                [key] : label
            })
        }
    }

    const chooseDeplacement = (e) => {
        setVisibleOrNot("invisible");
        if(e!== null){
            const {value} = e;
            const key = "deplacement";
            setTeam({
                ...team,
                [key] : value
            })
        }
    }

    const chooseClock = (e) => {
        setVisibleOrNot("invisible");
        if(e!== null){
            const { name, value } = e.target;
            setTeam({
                ...team,
                [name]: value
            });
        }
    }

    const validateTeam = async (id) => {
        const teamsDoc = doc(db, "equipes", id);
        const newField = {semaine: "" + semaineSelected, equipe: team.equipe, clubAdverse: team.clubAdverse, deplacement: team.deplacement, heure: team.heure, joueur1: team.joueur1, joueur2: team.joueur2, joueur3: team.joueur3, joueur4: team.joueur4}
        //await addDoc(equipeCollection, {semaine: "" + semaineSelected, equipe: team.equipe, clubAdverse: team.clubAdverse, deplacement: team.deplacement, heure: team.heure, joueur1: team.joueur1, joueur2: team.joueur2, joueur3: team.joueur3, joueur4: team.joueur4})
        await updateDoc(teamsDoc, newField)
        .then(() => {
            setMessage("L'équipes a bien été modifiée");
            setVisibleOrNot("visible");
            refreshField();
            setTeamChanged(true);
        }).catch((error) => {
            setMessage("Il y a une erreur : " + error);
            setVisibleOrNot("visible");
            setClassSuccessError("error");
        })
    }

    const refreshField = () => {
        setTeam({
            semaine: "",
            equipe: "",
            clubAdverse: "",
            deplacement: "",
            heure: "",
            joueur1: "",
            joueur2: "",
            joueur3: "",
            joueur4: ""
        });
    }

    const getTeam = (id) => {
        listesEquipes.filter((element) => {return element.id === id }).forEach(element => {
            setTeam({equipe: element.equipe, clubAdverse: element.clubAdverse, deplacement: element.deplacement, heure: element.heure, joueur1: element.joueur1, joueur2: element.joueur2, joueur3: element.joueur3, joueur4: element.joueur4})
        })
    }

    const deleteTeam = async (id) => {
        const teamsDoc = doc(db, "equipes", id);
        await deleteDoc(teamsDoc)
        .then(() => {
            setMessage("L'équipe a bien été supprimée");
            setVisibleOrNot("visible");
            refreshField();
            setTeamChanged(true);
        }).catch((error) => {
            setMessage("Il y a une erreur : " + error);
            setVisibleOrNot("visible");
            setClassSuccessError("error");
        })
    }

    const deleteAllTeam = async () => {
        for(let i=0; i < listesEquipes.length; i++){
            const teamsDoc = doc(db, "equipes", listesEquipes[i].id);
            await deleteDoc(teamsDoc)
            .then(() => {
                setMessage("L'équipe " + i + " a bien été supprimée");
                setVisibleOrNot("visible");
            }).catch((error) => {
                setMessage("Il y a une erreur : " + error);
                setVisibleOrNot("visible");
                setClassSuccessError("error");
            })
        }
        setTeamChanged(true);
    }

    useEffect(() => {
        JumbotronChange.changeText("Qui joue quelle semaine");
        JumbotronChange.changeImage(imageHome);
        const listesEquipesCollectionRef = collection(db, "equipes");
        const listeJoueursCollectionRef = collection(db, "Joueurs");
        const listeClubCollectionRef = collection(db, "adversaires");
        const listeUsersCollectionRef = collection(db, "users");
        setEquipeCollection(listesEquipesCollectionRef);
        setTeamChanged(false);
        const listesEquipesCollectionRefOrderByTeams = query(listesEquipesCollectionRef, orderBy("equipe"));
        const listeJoueursCollectionRefWhereActif = query(listeJoueursCollectionRef, where("etat", "==", "actif"));
        const listeUsersCollectionRefConnected = query(listeUsersCollectionRef, where("email", "==", localStorage.getItem("email")));

        const getListJoueur = async () => {
            const data = await getDocs(listeJoueursCollectionRefWhereActif);
            setListeJoueurs(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        const getListClub = async () => {
            const data = await getDocs(listeClubCollectionRef);
            setListeClub(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        const getUserConnected = async () => {
            const data = await getDocs(listeUsersCollectionRefConnected);
            setUserConnected(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        const getListEquipes = async () => {
            const data = await getDocs(listesEquipesCollectionRefOrderByTeams);
            setListesEquipes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getListEquipes();
    getListJoueur();
    getListClub();
    getUserConnected();
  }, [teamChanged]);
  return (
    <>
        <div className="text-center">
            <button onClick={() => changeWeek(-1)} >
                <span className="material-icons">skip_previous</span>
            </button>
            <span className="h1 ml-4 mr-4">Semaine {semaineSelected}</span>
            <button onClick={() => changeWeek(1)} >
                <span className="material-icons">skip_next</span>
            </button>
        </div>
        <div className="containerFlexible space-between">
        {
            listesEquipes.map((equipes) => {
                if(equipes.semaine === ""+semaineSelected)
                return (
                    <div className="elementFlexible" key={equipes.equipe}>
                        <h2>Équipe {equipes.equipe}</h2>
                        <p>{equipes.joueur1}</p>
                        <p>{equipes.joueur2}</p>
                        <p>{equipes.joueur3}</p>
                        <p>{equipes.joueur4}</p>
                        <h6>{equipes.deplacement} {equipes.clubAdverse} à {equipes.heure}</h6>
                        {
                            userConnected !== null && userConnected[0] !== undefined && userConnected[0].role === "admin" && 
                            <>
                                <Modal 
                                    id={equipes.id}
                                    equipe={equipes.equipe} 
                                    listeJoueurs={listeJoueurs} 
                                    team={team} 
                                    choosePersonTeams={choosePersonTeams} 
                                    listeClub={listeClub} 
                                    chooseAdversaire={chooseAdversaire} 
                                    deplacement={deplacement} 
                                    chooseDeplacement={chooseDeplacement} 
                                    chooseClock={chooseClock} 
                                    validateTeam={validateTeam} 
                                    classSuccessError={classSuccessError} 
                                    visibleOrNot={visibleOrNot}
                                    getTeam={getTeam}
                                    message={message}
                                />
                                <button onClick={() => deleteTeam(equipes.id)} type="button" className="btn btn-danger mr-3">
                                    Supprimer l'équipe
                                </button>
                            </>
                        }
                    </div>
                    
                )
                return ""
            })
        }
        </div>
        {
            userConnected !== null && userConnected[0] !== undefined && userConnected[0].role === "admin" &&
            <>
                <ModalCreate
                    classSuccessError={classSuccessError} 
                    visibleOrNot={visibleOrNot}
                    CreateAllTeams={CreateAllTeams}
                    message={message} 
                />
                <button onClick={deleteAllTeam} type="button" className="btn btn-danger mr-3">
                    Supprimer les équipes
                </button>
                <div className={"alert mt-3 alert-" + classSuccessError + " " + visibleOrNot} role="alert">
                    {message}
                </div>
            </>
        }
    </>
  );
};

export default EquipeSemaine;
