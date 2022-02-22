import React, { Component } from "react";
import "./forum_section_two.css";
import { InputGroup, Button, FormControl } from "react-bootstrap";

export default class Forum_section_two extends Component {
  render() {
    return (
      <div className="footer">
        {/* <h4>hier kommt das Texteingabefeld hin</h4> */}
        <>
          <InputGroup>
            <FormControl
              placeholder="Schreib deinen Beitrag..."
              aria-label="Recipient's username with two button addons"
            />
            <Button variant="outline-secondary">Hier klicken zum Posten</Button>
          </InputGroup>
        </>
      </div>
    );
  }
}
