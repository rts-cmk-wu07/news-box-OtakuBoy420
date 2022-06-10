import ArchiveCategory from "./components/ArchiveCategory";
import Header from "./components/Header";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header title="Archive" />
        <ArchiveCategory categoryTitle="sport" />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
          out Yoga Six for hot yoga! They have…"
        />
        <ArchiveCategory categoryTitle="travel" />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
          out Yoga Six for hot yoga! They have…"
        />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
          out Yoga Six for hot yoga! They have…"
        />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
          out Yoga Six for hot yoga! They have…"
        />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
          out Yoga Six for hot yoga! They have…"
        />
      </div>
    </div>
  );
}

export default App;
