import React from "react";
import "./BeitragList.css";
import BeitragEntry from ".//beitrag-entry/BeitragEntry";
const BeitragList = ({ name }) => {
  return (
    <div className="grid-cols-2">
      <BeitragEntry headline="Name" body={name} />
    </div>
  );
};

export default BeitragList;
