import React, { useEffect } from "react";
import jumbotronChange from "../services/jumbotronChange";
import imageMap from "../IMG/map.png";

const MapClub = (props) => {
  useEffect(() => {
    jumbotronChange.changeText("<h1 class='h1Jumbotron'>Situer le club</h1>");
    jumbotronChange.changeImage(imageMap);
  }, []);

  return (
    <>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="clubMap"
            allowtransparency="true"
            width="600"
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
