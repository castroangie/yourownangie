import { messageList } from "../assets/messageList";

function Button({ onClick }) {
  return (
    <div className="button">
      <button onClick={onClick}>New Message</button>
    </div>
  );
}

export default Button;
