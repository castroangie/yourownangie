import Canvas from "./components/Canvas.jsx";
import Header from "./components/Header.jsx";
import Message from "./components/Message.jsx";
import Button from "./components/Button.jsx";
import { useState } from "react";
import { messageList } from "./assets/messageList.js";

function App() {
  let [messages, setMessage] = useState([]);

  function handleClick() {
    const i = Math.floor(Math.random() * messageList.length);
    const newMessage = messageList[i];

    if (!Array.isArray(newMessage)) {
      setMessage((prevMessages) => {
        return [...prevMessages, <Message content={newMessage} />];
      });
    } else {
      let j = 0;
      function messageSequence() {
        if (j < newMessage.length) {
          setMessage((prevMessages) => {
            return [...prevMessages, <Message content={newMessage[j]} />];
          });
          setTimeout(() => j++, 500);
          console.log(j);
          console.log(newMessage[j]);
          setTimeout(messageSequence, 1500);
        }
      }
      messageSequence();
    }
  }

  return (
    <div className="app">
      <Header />
      <Canvas display={messages.map((message) => message)}></Canvas>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
