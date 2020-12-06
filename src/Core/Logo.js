import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Logo() {
  return (
    <div>
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
