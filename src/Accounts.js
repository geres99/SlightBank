import React from "react";
import Core from "./Core/Core";
import "./Accounts.css";
import { useGlobalAccount } from "./useGlobalAccount";

function Accounts() {
  let [deafultAcc, setDefaultAcc] = React.useState([]);
  let [userAcc, setUserAcc] = React.useState([]);
  let [account, setAccount] = useGlobalAccount("array");

  let showTextAbout = () => {
    if (deafultAcc.length === 0) {
      setDefaultAcc(["x"]);
    } else {
      setDefaultAcc([]);
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
      <div>
        <button onClick={showTextAbout} className="showButton">
          {buttonStyle(deafultAcc)}
          Default accounts:
        </button>
        {deafultAcc.map((x) => (
          <div>
            <div className="bigText">Default accounts:</div>
            <div className="smallText">
              <div>
                <div>You can use predetermined accounts from this list:</div>
                <div className="littleMargins">Username: Marcin</div>
                <div> Password: marcin99</div>
                <div className="littleMargins">Username: x</div>
                <div> Password: x</div>
              </div>
            </div>
          </div>
        ))}
        <button className="showButton littleMargins">User accounts:</button>
      </div>
    </div>
  );
}

export default Accounts;
