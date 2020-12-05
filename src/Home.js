import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="upBar"></div>
      <img
        className="quill"
        src={process.env.PUBLIC_URL + "/Images/quill.svg"}
        alt=""
      ></img>
      <div className="LogoText">Slight Bank</div>
      <Link to="/">Home</Link>
      <Link to="/Resources">Resources</Link>
      <Link to="/About">About</Link>
    </div>
  );
}

export default Home;
