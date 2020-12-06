import React from "react";
import "./Home.css";
import Core from "./Core/Core";

function Home() {
  return (
    <div>
      <Core />
      <div className="centre">
        <div className="LoginWindow"></div>
        <div className="LoginWindow"></div>
        <div className="LoginWindow"></div>
      </div>
    </div>
  );
}

export default Home;
