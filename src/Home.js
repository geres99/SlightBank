import React from "react";
import "./Home.css";
import Core from "./Core/Core";

function Home() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap"
        rel="stylesheet"
      />
      <Core />
      <div className="centre">
        <div className="LoginWindow">
          <img
            className="LoginQuill"
            src={process.env.PUBLIC_URL + "/Images/quilllogin.svg"}
            alt=""
          ></img>
          <div className="Title">Slight Bank</div>
          <input className="input" />
          <input className="input" />
          <div className="row">
            <button className="ButtonLog">Log-in</button>
            <div className="SpaceButtons"></div>
            <button className="ButtonLog">Sign-up</button>
          </div>
        </div>
        <div className="space"></div>
        <img
          width="600px"
          height="400px"
          className="Freedom"
          src={process.env.PUBLIC_URL + "/Images/freedom.jpg"}
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Home;
