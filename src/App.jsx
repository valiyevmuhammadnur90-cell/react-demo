import { useState } from "react";
import Category from "./components/Categories";
import Navbar from "./components/Navbar";
import Navigation from "./components/Routes";

function App() {
  const [dark, setDark] = useState(false);

  const handleDark = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "dark" : "light"}>
      <Navbar dark={dark} onClickDark={handleDark} />
      <Category />

      <Navigation />
    </div>
  );
}

export default App;
