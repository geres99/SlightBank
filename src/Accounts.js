import React from "react";
import Core from "./Core/Core";
import "./Accounts.css";

function Accounts() {
  return (
    <div>
      <Core />
      <div>
        <button className="showMoreButton">Accounts</button>
        <button className="showMoreButton">Accounts made by user</button>
      </div>
    </div>
  );
}

export default Accounts;
