import { Outlet } from "react-router";
import { useContext, useState, useEffect } from "react";
import DarkmodeContext from "./context/DarkmodeContext";
import CategoryContext from "./context/CategoryContext";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [europeCategory, setEuropeCategory] = useState(true);

  if (!isDarkMode) {
    document.body.style.backgroundColor = "#fff";
  } else {
    document.body.style.backgroundColor = "#000";
  }
  return (
    <DarkmodeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className="App">
        <Outlet />
      </div>
    </DarkmodeContext.Provider>
  );
}

export default App;
