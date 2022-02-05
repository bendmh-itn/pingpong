import React, {useState} from 'react';


const ModalCreatePlayer = ({CreatePlayer}) => {
    const [data, setData] = useState({nom: "", prenom: "", ranking: ""});

    const lastNamePlayer = (e) => {
        if(e!== null){
            const { name, value } = e.target;
            setData({
                ...data,
                [name]: value
            });
        }
    }

    const firstNamePlayer = (e) => {
        if(e!== null){
            const { name, value } = e.target;
            setData({
                ...data,
                [name]: value
            });
        }
    }

    const rankingPlayer = (e) => {
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
                Créé le joueur
            </button>
            <div className="modal fade" id="exampleModalCreate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Créer le joueur</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div>
                        <label className='mr-3'>Nom du joueur</label>
                        <input placeholder="Nom du joueur" name="lastName" onChange={lastNamePlayer}></input>
                    </div>
                    <div>
                        <label className='mr-3'>Prénom du joueur</label>
                        <input placeholder="Prénom du joueur" name="firstName" onChange={firstNamePlayer}></input>
                    </div>
                    <div>
                        <label className='mr-3'>Classement du joueur</label>
                        <input placeholder="Classement du joueur" name="ranking" onChange={rankingPlayer}></input>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() =>CreatePlayer(data)}>Créer</button>
                </div>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default ModalCreatePlayer;