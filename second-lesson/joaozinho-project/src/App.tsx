import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import './App.css'

interface Message {
  text: string;
  sender: "user" | "other";
}


function App() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá! Como vai?", sender: "other" },
    { text: "Oi! Tudo bem e você?", sender: "user" },
    { text: "Estou bem também, e como você tem passado?", sender: "other" }
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() == "") return;
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");
  };

  return (
    <>
      <div className="chat-container">
        <div className="chat-header">Zapinho</div>
        <div className="chat-messages">
          {messages.map((msg) => (
            <div
              className={`message ${msg.sender === "user" ? "user-message" : "other-message"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Digite uma mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="chat-send-button"
            onClick={sendMessage}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App
