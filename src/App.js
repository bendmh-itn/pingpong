import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Training from "./pages/Training";
import Member from "./pages/Member";
import ContactForm from "./pages/ContactForm";
import NumeroResponsables from "./pages/NumeroResponsables";
import FormContact from "./components/FormContact";

function App() {
  return (
    <HashRouter>
      <NavBar />

      <main>
        <Switch>
          <Route path="/numeroResponsables" component={NumeroResponsables} />
          <Route path="/contactForm" component={ContactForm} />
          <Route path="/member" component={Member} />
          <Route path="/training" component={Training} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>

      <FormContact
        width="200px"
        height="831"
        src="https://www.emailmeform.com/builder/form/yp130CamsP4TeMYAx1N"
      />
    </HashRouter>
  );
}

export default App;
