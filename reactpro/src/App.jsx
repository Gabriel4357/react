import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  const person = {
    name: "Jonathan",
    message: "Hello there!!",
    emoji: "🤓",
    seatNumbers: [1, 4, 7],
  };

  return (
    <div className="App">
      <Hello person={person} />
      <Fruits />
      <ConditionalComponent />
    </div>
  );
}

export default App;
