import React from "react";
import imageTable from "../IMG/table_salle.jpg";
import machine from "../IMG/machine.jpg"
import salle from "../IMG/salle.jpg"

const ClubInfrastructure = () => {
  return (
    <>
      <div className="infrastructure ml-3 d-block">
        <div className="text-left">
          <p>Nous jouons dans l'école primaire de Sauvenière. Le club joue sur 4 tables le samedi. Durant les entrainements, nous sommes en mesure de mettre jusqu'à 6 tables. </p>
          <p>Les équipes jouent à 14h30 puis ensuite à 19h.</p>
        </div>
        <div className="mb-3 text-center">
        <div id="carouselExampleControls" className="carousel slide" data-interval="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="imageTable" src={imageTable} alt="tables de ping pong" />
            </div>
            <div className="carousel-item">
              <img className="imageTable" src="https://siena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_in_line/2021/01/26/node_734167/2445951/public/2021/01/26/B9725941031Z.1_20210126182127_000%2BG6THFS6QB.2-0.jpg" alt="Ecole de sauvenière"/>
            </div>
            <div className="carousel-item">
              <img className="imageTable" src={machine} alt="à venir" />
            </div>
            <div className="carousel-item">
              <img className="imageTable" src={salle} alt="à venir" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
          
        </div>
      </div>
    </>
  );
};

export default ClubInfrastructure;
