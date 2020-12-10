import React, { useEffect, useCallback } from "react";
import { createGlobalState } from "react-hooks-global-state";
import "./Home.css";
import Core from "./Core/Core";

const initialState = { test: 10 };
const { useGlobalState } = createGlobalState(initialState);

function Home() {
  let [passwordStatus, setPasswordStatus] = React.useState("eye-closed");
  let [passwordValue, setPasswordValue] = React.useState("");
  let [imageChosen, setImageChosen] = React.useState(0);

  const [count, setCount] = useGlobalState("test");

  let imageList = [
    ["freedom", "Free yourself from any costs with SlightBank", 0],
    [
      "explore",
      "Explore unexplored before system of payments with SlightBank",
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
  let onInputChange = (e) => {
    setPasswordValue(e.target.value);
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
    setCount(count + 1);
    console.log(count);
  }, [imageChosen, imageList]);

  let rightClick = useCallback(() => {
    if (imageList[imageChosen + 1] === undefined) {
      setImageChosen(0);
    } else {
      setImageChosen(imageChosen + 1);
    }
  }, [imageChosen, imageList]);

  useEffect(() => {
    let cancel = setInterval(rightClick, 3000);
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
      <div className="centre">
        <div className="LoginWindow">
          <img
            className="LoginQuill"
            src={process.env.PUBLIC_URL + "/Images/quilllogin.svg"}
            alt=""
          ></img>
          <div className="Title">Slight Bank</div>
          <div className="LoginText">Username</div>
          <input className="input" />
          <div className="LoginText">Password</div>
          <input
            type={typeChange()}
            value={passwordValue}
            onChange={onInputChange}
            className="input"
          />
          <img
            onClick={changeStatus}
            className="Eye"
            src={process.env.PUBLIC_URL + "/Images/" + passwordStatus + ".svg"}
            alt=""
          ></img>
          <div className="row">
            <button className="ButtonLog">Log-in</button>
            <div className="SpaceButtons"></div>
            <button className="ButtonLog">Sign-up</button>
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
