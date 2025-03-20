import { FC, useContext, useState } from "react";
import { Send } from "@mynaui/icons-react";

import sample from "./dialog-sample.json";

import "./dialog.css";
import { Message, IMessage } from "../../components/message/Message";

const Dialog: FC = () => {
  const [messages, setMessages] = useState<IMessage[]>(
    sample.messages as IMessage[]
  );

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, { text: message, author: "current_user" }]);
    setMessage("");
  };

  return (
    <div className="dialog-page-container">
      <div className="dialog-container">
        {messages.map((x, i) => (
          <Message {...x} key={i} />
        ))}
      </div>
      <div className="message-input-container">
        <div className="message-input-button-wrapper">
          <input
            type="text"
            className="message-input"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
            onKeyDown={({ key }) => {
              if (key != "Enter") return;
              sendMessage();
            }}
          />
          <button className="message-send-button" onClick={sendMessage}>
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export { Dialog };
