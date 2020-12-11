import React, { useEffect, useCallback } from "react";
import "./Home.css";
import Core from "./Core/Core";
import { useGlobalAccount } from "./useGlobalAccount";

function Home() {
  let [passwordStatus, setPasswordStatus] = React.useState("eye-closed");
  let [userValue, setUserValue] = React.useState("");
  let [passwordValue, setPasswordValue] = React.useState("");
  let [imageChosen, setImageChosen] = React.useState(0);
  let [createdAccPopUp, setCreatedAccPopUp] = React.useState([]);

  let [account, setAccount] = useGlobalAccount("array");

  let imageList = [
    ["freedom", "Free yourself from any costs with SlightBank", 0],
    [
      "explore",
      "Explore unexplored wtih the system of payments of SlightBank",
      1,
    ],
    [
      "obstacle",
      "Defeat any obstacles with new saving system with SlightBank",
      2,
    ],
  ];

  let changeStatus = () => {
    if (passwordStatus !== "eye-open") {
      setPasswordStatus("eye-open");
    } else {
      setPasswordStatus("eye-closed");
    }
  };
  let typeChange = () => {
    if (passwordStatus !== "eye-open") {
      return "password";
    } else {
      return "text";
    }
  };
  let onInputChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };
  let onInputChangeUser = (e) => {
    setUserValue(e.target.value);
  };

  let circleChanger = (x) => {
    if (x[2] === imageChosen) {
      return <div className="imageCircleDark"></div>;
    } else {
      return <div className="imageCircle"></div>;
    }
  };

  let leftClick = useCallback(() => {
    if (imageList[imageChosen - 1] === undefined) {
      setImageChosen(imageList.length - 1);
    } else {
      setImageChosen(imageChosen - 1);
    }
  }, [imageChosen, imageList]);

  let rightClick = useCallback(() => {
    if (imageList[imageChosen + 1] === undefined) {
      setImageChosen(0);
    } else {
      setImageChosen(imageChosen + 1);
    }
  }, [imageChosen, imageList]);

  let singup = () => {
    if (userValue.length >= 3 && userValue.length <= 12) {
      if (passwordValue.length >= 3 && passwordValue.length <= 12) {
        for (let i = 0; i < account.length; i++) {
          if (account[i][0].toLowerCase() === userValue.toLowerCase()) {
            setCreatedAccPopUp([
              ["yellow", "Account with this name already exist!"],
            ]);
            setTimeout(closePopUp, 5000);
            return;
          }
        }
        setAccount([...account, [userValue, passwordValue]]);
        setUserValue("");
        setPasswordValue("");
        setCreatedAccPopUp([["green", "You successfully created an account!"]]);
        setTimeout(closePopUp, 5000);
        return;
      }
    }
    setCreatedAccPopUp([
      ["red", "Account and password need to be 3-12 letters long!"],
    ]);
    setTimeout(closePopUp, 5000);
  };

  let closePopUp = () => {
    setCreatedAccPopUp([]);
  };

  let login = () => {
    for (let i = 0; i < account.length; i++) {
      if (
        account[i][0].toLowerCase() === userValue.toLowerCase() &&
        account[i][1] === passwordValue
      ) {
        setUserValue("");
        setPasswordValue("");
        setCreatedAccPopUp([
          ["green", "You successfully logged into account!"],
        ]);
        setTimeout(closePopUp, 5000);
        return;
      }
    }
    setCreatedAccPopUp([["red", "Incorrect username or password!"]]);
    setTimeout(closePopUp, 5000);
  };

  useEffect(() => {
    let cancel = setInterval(rightClick, 5000);
    return () => {
      clearInterval(cancel);
    };
  }, [rightClick]);

  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap"
        rel="stylesheet"
      />
      <Core />
      {createdAccPopUp.map((x) => (
        <div className={"CreatedAccount " + x[0]}>
          <div></div>
          <div>{x[1]}</div>
          <button onClick={closePopUp} className={"closeButton " + x[0]}>
            X
          </button>
        </div>
      ))}
      <div className="centre">
        <div className="LoginWindow">
          <img
            className="LoginQuill"
            src={process.env.PUBLIC_URL + "/Images/quilllogin.svg"}
            alt=""
          ></img>
          <div className="Title">Slight Bank</div>
          <div className="LoginText">Username</div>
          <input
            value={userValue}
            onChange={onInputChangeUser}
            className="input"
          />
          <div className="LoginText">Password</div>
          <input
            type={typeChange()}
            value={passwordValue}
            onChange={onInputChangePassword}
            className="input"
          />
          <img
            onClick={changeStatus}
            className="Eye"
            src={process.env.PUBLIC_URL + "/Images/" + passwordStatus + ".svg"}
            alt=""
          ></img>
          <div className="row">
            <button onClick={login} className="ButtonLog">
              Log-in
            </button>
            <div className="SpaceButtons"></div>
            <button onClick={singup} className="ButtonLog">
              Sign-up
            </button>
          </div>
        </div>
        <div className="space"></div>
        <div>
          <img
            width="600px"
            height="400px"
            className="ImageOnSlider"
            src={
              process.env.PUBLIC_URL +
              "/Images/" +
              imageList[imageChosen][0] +
              ".jpg"
            }
            alt=""
          ></img>
          <div className="GrayScreen">
            <div className="ImageText">{imageList[imageChosen][1]}</div>
            <button className="buttonSlider" onClick={leftClick}>
              <img
                className="left"
                width="32px"
                height="32px"
                src={process.env.PUBLIC_URL + "/Images/left-arrow.svg"}
                alt=""
              ></img>
            </button>
            <button className="buttonSlider" onClick={rightClick}>
              <img
                className="right"
                width="32px"
                height="32px"
                src={process.env.PUBLIC_URL + "/Images/right-arrow.svg"}
                alt=""
              ></img>
            </button>
          </div>
          <div className="myRow">{imageList.map((x) => circleChanger(x))}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
