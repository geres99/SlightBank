import React from "react";
import Core from "./Core/Core";
import "./About.css";

function About() {
  let [technologies, setTechnologies] = React.useState([]);
  let [about, setAbout] = React.useState([]);

  let showTextAbout = () => {
    if (about.length === 0) {
      setAbout(["x"]);
    } else {
      setAbout([]);
    }
  };

  let showText = () => {
    if (technologies.length === 0) {
      setTechnologies(["x"]);
    } else {
      setTechnologies([]);
    }
  };

  let buttonStyle = (x) => {
    if (x.length === 0) {
      return (
        <img
          height="30px"
          className="nadropdown"
          src={process.env.PUBLIC_URL + "/Images/drop-down-noactive.svg"}
          alt=""
        ></img>
      );
    }
    return (
      <img
        height="30px"
        className="nadropdown"
        src={process.env.PUBLIC_URL + "/Images/drop-down-active.svg"}
        alt=""
      ></img>
    );
  };

  return (
    <div>
      <Core />
      <button className="showButton" onClick={showTextAbout}>
        {buttonStyle(about)}
        About me:
      </button>
      {about.map((x) => (
        <div>
          <div className="bigText">About me:</div>
          <div className="smallText">
            My name is Marcin Mędryk and im 21 years old front end developer
          </div>
          <div className="bigText">Education:</div>
          <div className="smallText">
            <div>
              <div>High school - CKU1 w Warszawie (Finished)</div>
              <div className="littleMargins">
                College - SGGW, Inżynieria systemów biotechnicznych (Unfinished)
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className="showButton" onClick={showText}>
        {buttonStyle(technologies)}
        Technologies used:
      </button>
      {technologies.map((x) => (
        <div>
          <div className="bigText">Github Pages:</div>
          <div className="smallText">
            for deploying the live version of the app
          </div>
          <div className="bigText">React:</div>
          <div className="smallText">As the main framework of the app</div>
          <div className="bigText">React-router:</div>
          <div className="smallText">For creating routing in the app</div>
          <div className="bigText">React-global-state:</div>
          <div className="smallText">For creating global states in the app</div>
          <div className="bigText">Reactive Design:</div>
          <div className="smallText">
            The layout changes based on the device screen-size (Mobile, Desktop)
          </div>
          <div className="bigText">Figma:</div>
          <div className="smallText">For the design</div>
        </div>
      ))}
    </div>
  );
}

export default About;
