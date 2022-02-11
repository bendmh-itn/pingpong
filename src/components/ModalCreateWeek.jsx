import React, {useState} from 'react';


const ModalCreateWeek = ({CreateAllWeeks}) => {
    const [data, setData] = useState([]);

    const getListOfWeeks = (e) => {
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
            <button type="button" className="btn btn-secondary mr-3" data-toggle="modal" data-target="#exampleModalCreateWeek">
                Créer les semaines
            </button>
            <div className="modal fade" id="exampleModalCreateWeek" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Liste des semaines de match</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div>
                        <label>liste des semaines (sépraré par une virgule)</label>
                        <input placeholder="liste des dates de matchs" name="weeks" onChange={getListOfWeeks}></input>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() =>CreateAllWeeks(data)}>Créer</button>
                </div>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default ModalCreateWeek;