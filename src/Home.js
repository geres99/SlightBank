import React from "react";
import "./Home.css";
import Core from "./Core/Core";

function Home() {
  return (
    <div>
      <Core />
      <div className="centre">
        <div className="LoginWindow">
          <img
            className="quillLogin"
            src={process.env.PUBLIC_URL + "/Images/quill.svg"}
            alt=""
          ></img>
          <div className="Title">Slight Bank</div>
          <input className="input" />
          <input className="input" />
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
