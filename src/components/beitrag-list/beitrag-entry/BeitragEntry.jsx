import React from "react";

const BeitragEntry = ({ headline, body }) => {
  return (
    <div>
      <h2>{headline}</h2>
      <p>{body}</p>
    </div>
  );
};

export default BeitragEntry;
