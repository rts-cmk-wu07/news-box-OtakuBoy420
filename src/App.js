import { Outlet } from "react-router";
import { useContext, useState, useEffect } from "react";
import DarkmodeContext from "./context/DarkmodeContext";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
