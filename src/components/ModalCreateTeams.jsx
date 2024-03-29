import React, {useState} from 'react';


const ModalCreateTeams = ({CreateAllTeams}) => {
    const [data, setData] = useState([]);

    const chooseNumberOfTeams = (e) => {
        if(e!== null){
            const { name, value } = e.target;
            setData({
                ...data,
                [name]: value
            });
        }
    }

    return ( 
        <>
            <button type="button" className="btn btn-secondary mr-3" data-toggle="modal" data-target="#exampleModalCreate">
                Créer les équipes
            </button>
            <div className="modal fade" id="exampleModalCreate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modifier l'équipe</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div>
                        <label>Combien d'équipes voulez-vous créer ?</label>
                        <input placeholder="Nombre d'équipes" name="equipes" onChange={chooseNumberOfTeams}></input>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() =>CreateAllTeams(data)}>Créer</button>
                </div>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default ModalCreateTeams;