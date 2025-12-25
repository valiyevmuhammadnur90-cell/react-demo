import { useState } from "react";
import Category from "./components/Categories";
import Navbar from "./components/Navbar";

function App() {
  const [dark, setDark] = useState(true);

  const handleDark = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "dark" : "light"}>
      <Navbar dark={dark} onClickDark={handleDark} />
      <Category />
    </div>
  );
}

export default App;
