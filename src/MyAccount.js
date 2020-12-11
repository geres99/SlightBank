import React from "react";
import Core from "./Core/Core";
import { useGlobalAccountLogged } from "./useGlobalAccountLogged";

function MyAccount() {
  let [accountLogged, setAccountLogged] = useGlobalAccountLogged("account");

  return (
    <div>
      <Core />
      {accountLogged}
    </div>
  );
}

export default MyAccount;
