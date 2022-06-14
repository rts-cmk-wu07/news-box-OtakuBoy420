import { Outlet } from "react-router";
import Header from "./components/Header";
import { useContext, useState } from "react";
import themeContext from "./context/themeContext";
import { BsWindowSidebar } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
