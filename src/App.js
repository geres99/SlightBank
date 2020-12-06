import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Accounts from "./Accounts";
import Resources from "./Resources";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Resources">
          <Resources />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Accounts">
          <Accounts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
