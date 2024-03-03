import profilePic from "../assets/profilePic.png";
import Button from "./Button";

function Message(props) {
  return (
    <div className="message">
      <img src={profilePic} alt="Profile picture." />
      <div>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Message;
