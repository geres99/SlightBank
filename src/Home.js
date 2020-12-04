import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Hello World
      <Link to="/">Home</Link>
      <Link to="/Resources">Resources</Link>
      <Link to="/About">About</Link>
    </div>
  );
}

export default Home;
