import "./App.css";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";
import ExampleButton from "./components/ExampleButton/ExampleButton";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <ExampleButton />
      </div>
      <div>
        <UserInput />
        <UserOutput />
      </div>
    </div>
  );
}

export default App;
