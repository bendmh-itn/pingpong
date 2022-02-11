import React from 'react';


const ModalShowClassement = ({divisionId, selectClassement,classementTeam, divisionName}) => {

    return ( 
        <>
            <button onClick={() => selectClassement(divisionId)} type="button" className="btn btn-secondary mr-3" data-toggle="modal" data-target="#exampleModalShowClassement">
                Classement
            </button>
            <div className="modal fade" id="exampleModalShowClassement" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{divisionName}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div>
                       <table className="table table-striped">
                       <thead className="visibleOrNot">
                            <tr>
                                <th scope="col" className="text-center">Cla</th>
                                <th scope="col" className="text-center">Équipe</th>
                                <th scope="col" className="text-center">Pts</th>
                            </tr>
                        </thead>
                       <tbody>
                            {
                            classementTeam.map((team) => {
                                return (
                                    <tr key={team.TeamClub}>
                                        <th scope="row">{team.Position}</th>
                                        <td className={team.Team.includes('Sauveniere') ? "text-danger" : "black"}>{team.Team}</td>
                                        <td>{team.Points}</td>
                                    </tr>
                                    
                                )
                            })}
                        </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default ModalShowClassement;