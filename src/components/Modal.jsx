import React from 'react';
import SelectPlayer from './SelectPlayers'
import Select from 'react-select'


const Modal = ({id, listeJoueurs,choosePersonTeams, listeClub, chooseAdversaire, deplacement, chooseDeplacement, team, chooseClock, validateTeam, getTeam}) => {
    const optionsJoueurs = [];
    const optionsClub = [];
    listeJoueurs.forEach(element => {
        optionsJoueurs.push({ value: element.prenom + " " + element.nom + " " + element.classement, label: element.prenom + " " + element.nom + " " + element.classement })
    })
    listeClub.forEach(element => {
        optionsClub.push({ value: element.nomClub, label: element.nomClub })
    });

    return ( 
        <>
            <button onClick={() => getTeam(id)} type="button" className="btn btn-primary mr-3" data-toggle="modal" data-target="#exampleModal">
                Changer l'équipe
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modifier l'équipe</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <label>Joueur 1</label>
                    <SelectPlayer value={{value: team.joueur1, label: team.joueur1 }} data={optionsJoueurs} functionSelect={(value) => choosePersonTeams(value, 1)} isClearable={false} />
                    <label>Joueur 2</label>
                    <SelectPlayer value={{value: team.joueur2, label: team.joueur2 }} data={optionsJoueurs} functionSelect={(value) => choosePersonTeams(value, 2)} isClearable={false} />
                    <label>Joueur 3</label>
                    <SelectPlayer value={{value: team.joueur3, label: team.joueur3 }} data={optionsJoueurs} functionSelect={(value) => choosePersonTeams(value, 3)} isClearable={false} />
                    <label>Joueur 4</label>
                    <SelectPlayer value={{value: team.joueur4, label: team.joueur4 }} data={optionsJoueurs} functionSelect={(value) => choosePersonTeams(value, 4)} isClearable={false} />
                    <label>Adversaire</label>
                    <SelectPlayer value={{value: team.clubAdverse, label: team.clubAdverse }} data={optionsClub} functionSelect={chooseAdversaire} isClearable={false} name="adverse" />
                    <label>Déplacement</label>
                    <Select value={{value: team.deplacement, label: team.deplacement }} options={deplacement} onChange={chooseDeplacement}/>
                    <div className="mt-2">
                        <label className="mr-2">Heure : </label>
                        <input placeholder="A quelle heure" name='heure' value={team.heure || ''} onChange={chooseClock}></input>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success" onClick={() => validateTeam(id)}>Valider</button>
                </div>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default Modal;