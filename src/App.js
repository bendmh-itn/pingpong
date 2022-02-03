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
import MenuClub from "./pages/MenuClub";
import BecomeMember from "./pages/BecomeMember";
import Mail from "./pages/mail";
import EquipeSemaine from "./pages/EquipeSemaine";

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
          <div className="row">
            <div className="col-sm d-none d-sm-none d-md-block">
              <FormContact
                width="250"
                height="450"
                title="Nous contactez"
                src="https://www.emailmeform.com/builder/form/yp130CamsP4TeMYAx1N"
              />
            </div>
          </div>
          <div className="col-sm marginResponsive">
            <Switch>
              <Route
                path="/numeroResponsables"
                component={NumeroResponsables}
              />
              <Route path="/equipes" component={EquipeSemaine} />
              <Route path="/mapClub" component={MapClub} />
              <Route path="/mail" component={Mail} />
              <Route path="/member" component={Member} />
              <Route path="/becomeMember" component={BecomeMember} />
              <Route path="/training" component={Training} />
              <Route path="/club" component={MenuClub} />
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </div>
      </main>
      <footer className="d-none d-sm-none d-md-block d-xl-none">
        <div className="page-footer">
          <Link to="/mapClub">
            Adresse du club : Place du sablon 5030 Sauvenière
          </Link>
        </div>
      </footer>
    </HashRouter>
  );
}

export default App;
