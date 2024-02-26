import { useState } from "react";
import "./App.css";

function App() {
  // useState is a hook that allows us to create state variables in functional components
  // Always use useState hook within a functional component not outside
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h1>Count Me : {count}</h1>
      <div>
        <button onClick={increment}>Incerment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <button onClick={increment}>Incerment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <button onClick={increment}>Incerment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
