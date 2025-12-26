import { useNavigate } from "react-router-dom";
import Button, { LoginButton } from "../ui/Button";

function Navbar() {
  const navigate = useNavigate();

  function navigation() {
    navigate("/");
  }

  return (
    <div className="nav">
      <h2 onClick={navigation}>Quizgame.com❓</h2>

      <div className="nav-sign">
        <LoginButton />
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
