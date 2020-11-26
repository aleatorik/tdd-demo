import React from "react";

function App() {
  return (
    <div data-test="component-app">
      <button data-test="increment-button">Increment counter</button>
      <h1 data-test="counterDisplay">The counter is currently</h1>
    </div>
  );
}

export default App;
