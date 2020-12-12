import React from "react";
import "./Core.css";
import Logo from "./Logo";
import { useHistory } from "react-router-dom";

let Core = () => {
  let [menu, setMenu] = React.useState([]);

  let history = useHistory();

  let AboutPush = () => {
    history.push("/About");
    setMenu([]);
  };
  let AccountPush = () => {
    history.push("/Accounts");
    setMenu([]);
  };
  let ResourcesPush = () => {
    history.push("/Resources");
    setMenu([]);
  };
  let humburgerMenu = () => {
    if (menu.length === 0) {
      setMenu(["x"]);
    } else {
      setMenu([]);
    }
  };
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
        rel="stylesheet"
      />
      <div className="upBar">
        <Logo link={"/"} />
        <div className="Desktop">
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
        <div className="Mobile">
          <div className="grow"></div>
          <button onClick={humburgerMenu} className="hamburgerMenu">
            <img
              className="hamburger"
              src={process.env.PUBLIC_URL + "/Images/meat.svg"}
              alt=""
            ></img>
          </button>
        </div>
      </div>
      <div className="Mobile">
        {menu.map((x) => (
          <div className="flexButtonsMobile">
            <button onClick={AboutPush} className="MobileButton">
              About
            </button>
            <button onClick={AccountPush} className="MobileButton">
              Accounts
            </button>
            <div>
              <button onClick={ResourcesPush} className="MobileButton">
                Resources
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Core;
