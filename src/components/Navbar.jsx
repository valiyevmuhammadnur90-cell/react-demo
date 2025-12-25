import { RightOutlined } from "@ant-design/icons";

function Navbar({ dark, onClickDark }) {
  return (
    <div className={`nav ${dark ? "dark" : "light"}`}>
      <h2>Quizgame.com❓</h2>

      <div className="nav-sign">
        <button onClick={onClickDark}>{dark ? "🌑" : "☀️"}</button>
        <button>
          Sign in <RightOutlined className="icon" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
