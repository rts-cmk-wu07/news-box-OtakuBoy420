import { Outlet } from "react-router";
import Header from "./components/Header";
import { useContext, useState } from "react";
import themeContext from "./context/themeContext";
import { BsWindowSidebar } from "react-icons/bs";

function App() {
  const colors = useContext(themeContext);
  const urlSearchParams = new URLSearchParams(window.location.search);
  const [isSettings, setIsSettings] = useState(false);
  console.log(urlSearchParams);
  console.log(window.location.href);
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
