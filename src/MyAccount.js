import React from "react";
import Logo from "./Core/Logo";
import "./MyAccount.css";
import { useGlobalAccountLogged } from "./useGlobalAccountLogged";

function MyAccount() {
  let [accountLogged, setAccountLogged] = useGlobalAccountLogged("account");

  return (
    <div>
      <div className="upBarLogin">
        <button className="MenuButton MobileOnly">
          <img
            className="ProfileImg"
            src={process.env.PUBLIC_URL + "/Images/user.svg"}
            alt=""
          ></img>
        </button>
        <button className="LogOut DesktopOnly">
          Logged as: {accountLogged}
        </button>
        <Logo link={"/MyAccount"} place={"Account"} />
        <button className="MenuButton MobileOnly">
          <img
            className="LogOutImg"
            src={process.env.PUBLIC_URL + "/Images/logout.svg"}
            alt=""
          ></img>
        </button>
      </div>
      <div className="longBar"></div>
    </div>
  );
}

export default MyAccount;
