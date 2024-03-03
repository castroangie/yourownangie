import profilePic from "../assets/profilePic.png";

function Header() {
  return (
    <div className="header">
      <div className="arrow">
        <i className="icon-left"></i>
      </div>
      <div className="contact">
        <img src={profilePic} alt="Profile picture." />
        <div>
          <p>Angie Castro</p>
          <p>Active</p>
        </div>
      </div>
      <div className="more">
        <i className="icon-more"></i>
      </div>
    </div>
  );
}

export default Header;
