import React, { useEffect, useState } from "react";
import imageHome from "../IMG/ping.png";
import JumbotronChange from "../services/jumbotronChange";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy, updateDoc, doc, where} from "firebase/firestore";
import Modal from "../components/Modal";
import {getPlayers, loadPlayers, getTeams, loadTeams, getClassement} from '../services/callAPI';
import ModalShowClassement from "../components/ModalShowClassement";
import {ExcelRenderer} from 'react-excel-renderer';

const EquipeSemaine = () => {
    const [listesTeamsAPI, setListesTeamsAPI] = useState([]);
    const [listeTeamsFirebase, setListeTeamsFirebase] = useState([]);
    const [userConnected, setUserConnected] = useState(null);
    const [listeJoueurs, setListeJoueurs] = useState([]);
    const [teamSelected, setTeamSelected] = useState({equipe: "", clubAdverse: "", deplacement: "", heure: "", joueur1: "", joueur2: "", joueur3: "", joueur4: ""});
    const [message, setMessage] = useState("");
    const [classSuccessError, setClassSuccessError] = useState("success");
    const [visibleOrNot, setVisibleOrNot] = useState("invisible");
    const [teamChanged, setTeamChanged] = useState(false);
    const [idTeam, setIdTeam] = useState("");
    const [classementTeam, setClassementTeam] = useState([]);
    const [excelData, setExcelData] = useState([]);
    const [activeWeek, setActiveWeek] = useState([]);

    const deplacement = [
        { value: 'contre', label: 'à domicile' },
        { value: 'à', label: 'à l\'extérieur' }
    ]
    
    const choosePersonTeams = (options, number) => {
        setVisibleOrNot("invisible");
        if(options !== null){
            const {value} = options;
            const key = "joueur"+number;
            setTeamSelected({
                ...teamSelected,
                [key] : value
            })
        }
    }

    const chooseAdversaire = (e) => {
        setVisibleOrNot("invisible");
        if(e!== null){
            const {label} = e;
            const key = "clubAdverse";
            setTeamSelected({
                ...teamSelected,
                [key] : label
            })
        }
    }

    const chooseDeplacement = (e) => {
        setVisibleOrNot("invisible");
        if(e!== null){
            const {value} = e;
            const key = "deplacement";
            setTeamSelected({
                ...teamSelected,
                [key] : value
            })
        }
    }

    const chooseClock = (e) => {
        setVisibleOrNot("invisible");
        if(e!== null){
            const { name, value } = e.target;
            setTeamSelected({
                ...teamSelected,
                [name]: value
            });
        }
    }

    const validateTeam = async () => {
        const teamsDoc = doc(db, "equipes", idTeam);
        const newField = {equipe: teamSelected.equipe, clubAdverse: teamSelected.clubAdverse, deplacement: teamSelected.deplacement, heure: teamSelected.heure, joueur1: teamSelected.joueur1, joueur2: teamSelected.joueur2, joueur3: teamSelected.joueur3, joueur4: teamSelected.joueur4}
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
        setTeamSelected({
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
        listeTeamsFirebase.filter((element) => {return element.id === id }).forEach(element => {
            setTeamSelected({equipe: element.equipe, clubAdverse: element.clubAdverse, deplacement: element.deplacement, heure: element.heure, joueur1: element.joueur1, joueur2: element.joueur2, joueur3: element.joueur3, joueur4: element.joueur4})
        })
        setIdTeam(id);
    }

    const selectClassement = (divisionId) => {
        getClassement(divisionId).then((res) => {
            setClassementTeam(res.data);
        })
    }

    const changeFile = (event) => {
        let fileObj = event.target.files[0];
        console.log(fileObj);
        ExcelRenderer(fileObj, (err, resp) => {
            if(err){
              console.log(err);            
            }
            else{
              console.log(resp.rows);
              setExcelData(resp.rows);
            }
          });      
    }

    const uploadDataExcel = async () => {
        let semaine = excelData[0][0]
        let i = 3;
        listeTeamsFirebase.forEach(element => {
            element.joueur1 = excelData[i][0] + " " + excelData[i][1];
            element.joueur2 = excelData[i][2] + " " + excelData[i][3];
            element.joueur3 = excelData[i][4] + " " + excelData[i][5];
            element.joueur4 = excelData[i][6] + " " + excelData[i][7];
            element.deplacement = excelData[i][8];
            element.clubAdverse = excelData[i][9];
            element.heure = excelData[i][10];
            i = i+2;
        });
        listeTeamsFirebase.forEach(element => {
            setIdTeam(element.id);
            setTeamSelected(element);
            validateTeamExcel(element, semaine);
        });
    }

    const validateTeamExcel = async (team, semaine) =>{
        const weekDoc = doc(db, "semaineActive", '4GZF4YqnjRYEfvrRl2qG');
        const newField = {semaine: semaine};
        await updateDoc(weekDoc, newField)
        .then(() => {
            setMessage("L'équipes a bien été modifiée");
            setVisibleOrNot("visible");
        }).catch((error) => {
            setMessage("Il y a une erreur : " + error);
            setVisibleOrNot("visible");
            setClassSuccessError("error");
        });
        const teamsDoc = doc(db, "equipes", team.id);
        await updateDoc(teamsDoc, team)
        .then(() => {
            setMessage("L'équipes a bien été modifiée");
            setVisibleOrNot("visible");
        }).catch((error) => {
            setMessage("Il y a une erreur : " + error);
            setVisibleOrNot("visible");
            setClassSuccessError("error");
        })
        
    }

    useEffect(() => {
        JumbotronChange.changeText("Qui joue cette semaine ?");
        JumbotronChange.changeImage(imageHome);
        const listesEquipesCollectionRef = collection(db, "equipes");
        const listeUsersCollectionRef = collection(db, "users");
        const listeWeekCollectionRef = collection(db, "semaineActive");
        setTeamChanged(false);
        const listesEquipesCollectionRefOrderByTeams = query(listesEquipesCollectionRef, orderBy("equipe"));
        const listeUsersCollectionRefConnected = query(listeUsersCollectionRef, where("email", "==", localStorage.getItem("email")));

        const getActiveWeek = async () => {
            const data = await getDocs(listeWeekCollectionRef);
            setActiveWeek(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        const getUserConnected = async () => {
            const data = await getDocs(listeUsersCollectionRefConnected);
            setUserConnected(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        const getListTeamFirebase = async () => {
            const data = await getDocs(listesEquipesCollectionRefOrderByTeams);
            setListeTeamsFirebase(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

    let teams = getTeams();
    if(teams.length === 0){
        loadTeams().then((res) => {
            setListesTeamsAPI(res.data);
        });
      }else {
        setListesTeamsAPI(teams);
      }

    let players = getPlayers();
    if(players.length === 0){
      loadPlayers().then((res) => {
        setListeJoueurs(res.data);
      });
    }else {
      setListeJoueurs(players);
    }


    getListTeamFirebase();
    getUserConnected();
    getActiveWeek();
  }, [teamChanged]);
  return (
    <>
        {   userConnected !== null && userConnected[0] !== undefined && userConnected[0].role === "admin" &&
            <>
                <input type="file" onChange={changeFile} style={{"padding":"10px"}} />
                <button className="btn btn-success" onClick={uploadDataExcel}>Valider</button>
            </>
        }
        <div className="text-center">
            <span className="h1 ml-4 mr-4">{activeWeek.length === 0 ? "Equipes ..." : activeWeek[0].semaine}</span>
        </div>
        <div className="containerFlexible space-between">
        {
            listesTeamsAPI.map((equipe) => {
                return (
                    <div className="elementFlexible" key={equipe.TeamId}>
                        <h2>Équipe {equipe.Team}</h2>
                        {listeTeamsFirebase.filter((team) => team.equipe === equipe.Team).map((team) => {
                            return (
                                <div key={team.equipe}>
                                    <p>{team.joueur1}</p>
                                    <p>{team.joueur2}</p>
                                    <p>{team.joueur3}</p>
                                    <p>{team.joueur4}</p>
                                    <h6>{team.deplacement} {team.clubAdverse} à {team.heure}</h6>
                                    <ModalShowClassement
                                        divisionId={equipe.DivisionId}
                                        selectClassement={selectClassement}
                                        classementTeam={classementTeam}
                                        divisionName={equipe.DivisionName}
                                    />
                                    {
                                        userConnected !== null && userConnected[0] !== undefined && userConnected[0].role === "admin" && 
                                        <>
                                            <Modal 
                                                id={team.id}
                                                equipe={equipe.Team} 
                                                listeJoueurs={listeJoueurs} 
                                                team={teamSelected} 
                                                choosePersonTeams={choosePersonTeams}
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
                                        </>
                                    }
                                </div>
                            )
                        })}
                    </div>
                )
            })
        }
        </div>
    </>
  );
};

export default EquipeSemaine;
