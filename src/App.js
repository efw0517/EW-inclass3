import React, { useState } from "react";
import "./App.css";

function App() {
  // for the counter
  const [counter, setCounter] = useState(0);

  // for the plus button
  const plusOne = () => {
    setCounter(counter + 1);
  };

  // for the minus button
  const minusOne = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <header>
        <div className="center-container">
          <p>{counter}</p>

          <button onClick={minusOne}>-</button>

          <button onClick={plusOne}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
