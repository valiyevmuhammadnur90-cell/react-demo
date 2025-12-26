import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignIn from "./components/pages/Sign-in";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      {/* ------------ Routes ------------ */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
