import ArchiveCategory from "./components/ArchiveCategory";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <ArchiveCategory categoryTitle="sport" />
      </div>
    </div>
  );
}

export default App;
