import React from "react";
import Core from "./Core/Core";
import "./Accounts.css";
import { useGlobalAccount } from "./useGlobalAccount";

function Accounts() {
  // eslint-disable-next-line no-unused-vars
  let [account, setAccount] = useGlobalAccount("array");

  let userMadeAcc = account.slice(2);

  let [deafultAcc, setDefaultAcc] = React.useState([]);
  let [userAcc, setUserAcc] = React.useState([]);

  let showTextDefault = () => {
    if (deafultAcc.length === 0) {
      setDefaultAcc(["x"]);
    } else {
      setDefaultAcc([]);
    }
  };

  let showTextUser = () => {
    if (userAcc.length === 0) {
      setUserAcc(["x"]);
    } else {
      setUserAcc([]);
    }
  };

  let userAccShow = () => {
    if (userMadeAcc.length !== 0) {
      return (
        <div>
          <div className="bigText">User accounts:</div>
          {userMadeAcc.map((x) => (
            <div className="columnAccounts">
              <div className="littleMargins centreAccounts">
                There's a list of your accounts:
              </div>
              <div className="littleMargins centreAccounts">
                Username: {x[0]}
              </div>
              <div className="centreAccounts"> Password: {x[1]}</div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div>
        <div className="bigText">User accounts:</div>
        <div className="columnAccounts">
          <div className="littleMargins centreAccounts">
            List is empty, please create your account with Sign-up button in
            home-page
          </div>
        </div>
      </div>
    );
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
        <button onClick={showTextDefault} className="showButton">
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
        <button onClick={showTextUser} className="showButton littleMargins">
          {buttonStyle(userAcc)}
          User accounts:
        </button>
        {userAcc.map((x) => userAccShow())}
      </div>
    </div>
  );
}

export default Accounts;
