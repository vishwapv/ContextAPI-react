import logo from "./logo.svg";
import "./App.css";
import Context from "./context/Context";
import Client1 from "./components/Client1";
import Client2 from "./components/Client2";

// Create context
function App() {
  // COntext is the parent
  return (
    <Context>
      {/* // Client1 is children */}
      <Client1 />
      <Client2 />
    </Context>
  );
}

export default App;
