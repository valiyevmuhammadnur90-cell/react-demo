import { Routes, Route, Router } from "react-router-dom";
import App from "../App";
import Login from "../components/pages/Sign-in";

function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Navigation;
