import React from "react";
import "./Core.css";
import Logo from "./Logo";
import { useHistory } from "react-router-dom";

function Core() {
  let history = useHistory();

  function AboutPush() {
    history.push("/About");
  }
  function AccountPush() {
    history.push("/Accounts");
  }
  function ResourcesPush() {
    history.push("/Resources");
  }
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
        rel="stylesheet"
      />
      <div className="upBar"></div>
      <Logo />
      <div className="flexButtons">
        <button onClick={AboutPush} className="upButtons About">
          About
        </button>
        <button onClick={AccountPush} className="upButtons Accounts">
          Accounts
        </button>
        <button onClick={ResourcesPush} className="upButtons Resources">
          Resources
        </button>
      </div>
    </div>
  );
}

export default Core;
