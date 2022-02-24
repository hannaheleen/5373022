import React from "react";
import ChatInput from "../components/ChatInput";
import ChatMessages from "../components/ChatMessages";

export default function Forum() {
  return (
    <main className="flex-grow-1 d-flex	flex-column bg-secondary text-light overflow-hidden">
      <ChatMessages />
      <ChatInput />
    </main>
  );
}
