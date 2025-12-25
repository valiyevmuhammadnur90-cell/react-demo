import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function Navbar({ dark, onClickDark }) {
  const navigate = useNavigate();
  function navigation() {
    navigate("/login");
  }

  return (
    <div className={`nav ${dark ? "dark" : "light"}`}>
      <h2 onClick={navigation}>Quizgame.com❓</h2>

      <div className="nav-sign">
        <button onClick={onClickDark}>{dark ? "🌑" : "☀️"}</button>
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
