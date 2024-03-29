import React, { useEffect } from "react";
import jumbotronChange from "../services/jumbotronChange";
import imageMap from "../IMG/map.png";
import "../CSS/map.css";
import NavbarSiteMobileContact from "../components/NavbarSiteMobileContact";

const MapClub = (props) => {
  useEffect(() => {
    jumbotronChange.changeText("Situer le club");
    jumbotronChange.changeImage(imageMap);
  }, []);

  return (
    <>
      <div className="d-block d-sm-block d-md-none">
        <NavbarSiteMobileContact
          onglet="mapClub"
        />
      </div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="clubMap"
            allowtransparency="true"
            width="100%"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=place%20du%20sablon%205030%20gembloux&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapClub;
