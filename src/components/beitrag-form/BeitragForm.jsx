import React, { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";

const BeitragForm = ({ addBeitrag }) => {
  const [beitrag, setBeitrag] = useState("Max");
  // const [birthday, setBirthday] = useState("2022-12-22");
  return (
    <>
      <div>
        <label>Hier Beitrag verfassen: </label>
        <input
          type="text"
          name="beitrag"
          value={beitrag}
          onChange={(e) => setBeitrag(e.target.value)}
        ></input>
      </div>
      {/* <div>
        <label>Geburtstag</label>
        <input
          type="date"
          name="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        ></input>
      </div> */}
      <Button
        variant="outline-secondary"
        onClick={() => addBeitrag({ name: beitrag })}
      >
        Beitrag posten
      </Button>
    </>
  );
};

export default BeitragForm;
