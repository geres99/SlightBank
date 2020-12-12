import React from "react";
import Logo from "./Core/Logo";
import "./MyAccount.css";
import { useGlobalAccountLogged } from "./useGlobalAccountLogged";

function MyAccount() {
  let [accountLogged, setAccountLogged] = useGlobalAccountLogged("account");

  return (
    <div>
      <div className="upBarLogin">
        <div>Yieks</div>
        <Logo link={"/MyAccount"} place={"Account"} />
        <div>Yieks</div>
      </div>
      {accountLogged}
    </div>
  );
}

export default MyAccount;
