import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Training from "./pages/Training";
import Member from "./pages/Member";

function App() {
  return (
    <HashRouter>
      <NavBar />

      <main className="container pt-5">
        <Switch>
          <Route path="/member" component={Member} />
          <Route path="/training" component={Training} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </HashRouter>
  );
}

export default App;
