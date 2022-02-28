import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useMessages } from "../../context/MessageContext";
import "./ChatInput.css";

export default function ChatInput() {
  const { sendMessage } = useMessages();
  const messageRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(messageRef.current.value);
    messageRef.current.value = "";
  }

  return (
    <div className="Texteingabe">
      <Form className="d-flex justify-content-evenly align-items-center p-3 w-75">
        <Form.Group
          controlId="messageInput"
          className="bg-light text-dark flex-grow-1"
        >
          <Form.Control //Texteingabefeld
            type="text"
            rows={2}
            placeholder="Beitrag eingeben..."
            autoComplete="off"
            ref={messageRef}
          />
        </Form.Group>

        <Button //Button zum posten
          as="input"
          value="Send"
          background="primary"
          size="m"
          type="submit"
          onClick={handleSubmit}
          className="rounded-0"
        />
      </Form>
    </div>
  );
}
