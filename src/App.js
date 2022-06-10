import { Outlet } from "react-router";
import ArchiveCategory from "./components/ArchiveCategory";
import Header from "./components/Header";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header title="Archive" />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
