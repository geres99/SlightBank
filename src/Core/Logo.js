import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <div className="align-items">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap"
        rel="stylesheet"
      />
      <img
        className="quill"
        src={process.env.PUBLIC_URL + "/Images/quill.svg"}
        alt=""
      ></img>
      <Link to="/">
        <div className="LogoText">Slight Bank</div>
      </Link>
    </div>
  );
}

export default Logo;
