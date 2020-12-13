import React from "react";
import Logo from "./Core/Logo";
import "./MyAccount.css";
import { useGlobalAccountLogged } from "./useGlobalAccountLogged";

function MyAccount() {
  let [accountLogged, setAccountLogged] = useGlobalAccountLogged("account");
  let [balance, setBalance] = React.useState(30.52);
  let [positiveTransaction, setPositiveTransaction] = React.useState([
    "x",
    "x",
  ]);
  let [negativeTransaction, setNegativeTransaction] = React.useState(["x"]);

  let logout = () => {
    console.log("yieks");
  };

  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
        rel="stylesheet"
      />
      <div className="upBarLogin">
        <button className="MenuButton MobileOnly">
          <img
            className="ProfileImg"
            src={process.env.PUBLIC_URL + "/Images/user.svg"}
            alt=""
          ></img>
        </button>
        <button className="AccountButton DesktopOnly">
          Logged as: {accountLogged}
        </button>
        <Logo link={"/MyAccount"} place={"Account"} />
        <button onClick={logout} className="MenuButton MobileOnly">
          <img
            className="LogOutImg"
            src={process.env.PUBLIC_URL + "/Images/logout.svg"}
            alt=""
          ></img>
        </button>
        <button onClick={logout} className="AccountButton DesktopOnly">
          Log-out
        </button>
      </div>
      <div className="myCentre">
        <div className="longBar">
          <div className="balanceDiv">
            <div></div>
            <div className="textDivAcc">
              <div className="balanceStatus">Available Balance:</div>
              <div className="moneyStatus">{balance}PLN</div>
            </div>
            <div></div>
          </div>
          <div className="rowTransaction">
            <div className="transactionBox">
              <div className="endFiller"></div>
              {positiveTransaction.map((x) => (
                <div className="centreText">
                  <div className="columnTransaction">
                    <div className="centreTransaction">
                      Netflix -<div className="positiveBalance"> 30PLN</div>
                      <button className="deleteButton">X</button>
                    </div>
                    <div className="centreTransaction">27.12.20</div>
                    <div className="line"></div>
                  </div>
                </div>
              ))}
              <div className="endFiller"></div>
            </div>
            <div className="transactionBox">
              <div className="endFiller"></div>
              {negativeTransaction.map((x) => (
                <div className="centreText">
                  <div className="columnTransaction">
                    <div className="centreTransaction">
                      Netflix -<div className="negativeBalance">30PLN</div>
                      <button className="deleteButton">X</button>
                    </div>
                    <div className="centreTransaction">27.12.20</div>
                    <div className="line"></div>
                  </div>
                </div>
              ))}
              <div className="endFiller"></div>
            </div>
          </div>
          <div className="endFiller"></div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
