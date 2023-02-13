import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

interface Persona {
  name: String;
  wiek: Number;
}

function App() {
  const [count, setCount] = useState<Persona>({
    name: "sada",
    wiek: 123,
  });

  return (
    <div className="App">
      <h1>{count.name + " " + count.wiek}</h1>
    </div>
  );
}

export default App;
