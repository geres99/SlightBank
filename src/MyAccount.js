import React from "react";
import Logo from "./Core/Logo";
import "./MyAccount.css";
import { useGlobalAccountLogged } from "./useGlobalAccountLogged";
import { useHistory } from "react-router-dom";

function MyAccount() {
  let names = [
    "Netflix:",
    "Amazon:",
    "Google:",
    "Shopping:",
    "Music:",
    "Food:",
    "Clothes:",
    "Traveling:",
  ];

  let randomNumberOfTransactions = () => {
    let myArray = [];
    let myNumber = 0;
    let howMuchPossitive = Math.ceil(Math.random() * 10);
    for (let i = 0; i < howMuchPossitive; i++) {
      let randomNum = Math.ceil(Math.random() * 50);
      let randomName = Math.floor(Math.random() * names.length);
      myArray.push([randomNum, myNumber + "a", names[randomName]]);
      myNumber++;
    }
    return myArray;
  };

  let [accountLogged, setAccountLogged] = useGlobalAccountLogged("account");
  let [balance, setBalance] = React.useState(
    Math.ceil(Math.random() * 470 + 30)
  );
  let [positiveTransaction, setPositiveTransaction] = React.useState(
    randomNumberOfTransactions()
  );
  let [negativeTransaction, setNegativeTransaction] = React.useState(
    randomNumberOfTransactions()
  );
  let [transactionNumber, setTransactionNumber] = React.useState(0);
  let [popProfile, setPopProfile] = React.useState([]);

  let history = useHistory();

  let logout = () => {
    setAccountLogged([]);
    history.push("/");
  };

  let checkProfile = () => {
    console.log(popProfile.length);
    if (popProfile.length === 0) {
      setPopProfile(["x"]);
    } else {
      setPopProfile([]);
    }
  };

  let deleteTransactionPositive = (x) => {
    console.log(x.target.attributes[0].value);
    let deletedNumber = x.target.attributes[0].value;
    let moneyValue = Number(x.target.attributes[1].value);
    setPositiveTransaction(
      positiveTransaction.filter((x) => x[1] !== deletedNumber)
    );
    setBalance(balance - moneyValue);
  };
  let deleteTransactionNegative = (x) => {
    console.log(x.target.attributes[0].value);
    let deletedNumber = x.target.attributes[0].value;
    let moneyValue = Number(x.target.attributes[1].value);
    setNegativeTransaction(
      negativeTransaction.filter((x) => x[1] !== deletedNumber)
    );
    setBalance(balance + moneyValue);
  };

  let addPositiveTransaction = () => {
    let randomNum = Math.ceil(Math.random() * 50);
    let randomName = Math.floor(Math.random() * names.length);
    setPositiveTransaction([
      ...positiveTransaction,
      [randomNum, "" + transactionNumber, names[randomName]],
    ]);
    setTransactionNumber(transactionNumber + 1);
    setBalance(balance + randomNum);
  };

  let addNegativeTransaction = () => {
    let randomNum = Math.ceil(Math.random() * 50);
    let randomName = Math.floor(Math.random() * names.length);
    setNegativeTransaction([
      ...negativeTransaction,
      [randomNum, "" + transactionNumber, names[randomName]],
    ]);
    setTransactionNumber(transactionNumber + 1);
    setBalance(balance - randomNum);
  };

  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
        rel="stylesheet"
      />
      <div className="upBarLogin">
        <button onClick={checkProfile} className="MenuButton MobileOnly">
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
      {popProfile.map((x) => (
        <div className="profileSettings">
          <div className="column">
            <div className="centre littleMargin">
              Logged as: {accountLogged}
            </div>
            <div className="centre littleMargin">
              Account Balance: {balance}PLN
            </div>
          </div>
        </div>
      ))}
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
                      {x[2]}
                      <div className="positiveBalance"> {x[0]}PLN</div>
                      <button
                        transaction={x[1]}
                        moneyValue={x[0]}
                        onClick={deleteTransactionPositive}
                        className="deleteButton"
                      >
                        X
                      </button>
                    </div>
                    <div className="centreTransaction">27.12.20</div>
                    <div className="line"></div>
                  </div>
                </div>
              ))}
              <button onClick={addPositiveTransaction} className="addButton">
                +
              </button>
              <div className="endFiller"></div>
            </div>
            <div className="transactionBox">
              <div className="endFiller"></div>
              {negativeTransaction.map((x) => (
                <div className="centreText">
                  <div className="columnTransaction">
                    <div className="centreTransaction">
                      {x[2]} <div className="negativeBalance">{x[0]}PLN</div>
                      <button
                        transaction={x[1]}
                        moneyValue={x[0]}
                        onClick={deleteTransactionNegative}
                        className="deleteButton"
                      >
                        X
                      </button>
                    </div>
                    <div className="centreTransaction">27.12.20</div>
                    <div className="line"></div>
                  </div>
                </div>
              ))}
              <button onClick={addNegativeTransaction} className="addButton">
                +
              </button>
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
