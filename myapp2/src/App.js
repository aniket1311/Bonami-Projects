import "./App.css";
import ParentComp from "./Components/ChildToParentComm/ParentComp";
import EventHandling from "./Components/EventHandling";
import HelloWorld from "./Components/HelloWorld";

function App() {
  return (
    <div className="App">
      <HelloWorld name="Aniket">
        <p>Hello it's here</p>
      </HelloWorld>{" "}
      <EventHandling />
      <ParentComp />
    </div>
  );
}

export default App;
