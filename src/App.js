import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Training from "./pages/Training";
import Member from "./pages/Member";
import MapClub from "./pages/MapClub";
import NumeroResponsables from "./pages/NumeroResponsables";
import FormContact from "./components/FormContact";
import Jumbotron from "./components/Jumbotron";
import image from "./IMG/ping.png";

function App() {
  return (
    <HashRouter>
      <NavBar />

      <main>
        <Jumbotron
          text="Petit club mais avec des grands joueurs"
          img={image}
          imgAlt="Raquette ping pong"
        />
        <div className="container">
          <div style={{ display: "block" }}>
            <FormContact
              width="250"
              height="450"
              title="Nous contactez"
              src="https://www.emailmeform.com/builder/form/yp130CamsP4TeMYAx1N"
            />
          </div>
          <Switch>
            <Route path="/numeroResponsables" component={NumeroResponsables} />
            <Route path="/mapClub" component={MapClub} />
            <Route path="/member" component={Member} />
            <Route path="/training" component={Training} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </main>
      <footer>
        <div
          className="page-footer align-middle"
          style={{ textAlign: "center" }}
        >
          <Link to="/mapClub">
            Adresse du club : Place du sablon 5030 Sauvenière
          </Link>
        </div>
      </footer>
    </HashRouter>
  );
}

export default App;
