import React from "react";
import { useHistory } from "react-router-dom";
import "./Logo.css";

function Logo(props) {
  let history = useHistory();

  let HomePush = () => {
    history.push(props.link);
  };
  return (
    <div className="align-items">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap"
        rel="stylesheet"
      />
      <img
        className={"quill" + props.place}
        src={process.env.PUBLIC_URL + "/Images/quill.svg"}
        alt=""
      ></img>
      <div onClick={HomePush} className={"LogoText" + props.place}>
        Slight Bank
      </div>
    </div>
  );
}

export default Logo;
