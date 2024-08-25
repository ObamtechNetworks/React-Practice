import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }

  // Handle user input for setting increment value
  function handleIncrementChange(event) {
    // Parse the input as a number
    const value = parseInt(event.target.value, 10);
    // Ensure the value is a valid number and not NaN
    setIncrementBy(isNaN(value) ? 0 : value);
  }

  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>We are incrementing the value by: {incrementBy} </h1>
      <input
        type="number"
        value={incrementBy}
        onChange={handleIncrementChange}
        style={{ marginBottom: "10px" }}
      />

      {/* Optional: Buttons to manually adjust increment */}
      <button onClick={() => setIncrementBy(incrementBy + 1)}>
        Increase Increment
      </button>
      <button onClick={() => setIncrementBy(incrementBy - 1)}>
        Decrease Increment
      </button>
    </div>
  );
}
/*
export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }

  function IncreaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }

  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>We are incrementing the value by: {incrementBy} </h1>
      <button onClick={IncreaseIncrement}>Increase Increment</button>
      <button onClick={decreaseIncrement}>Decrease Increment</button>
    </div>
  );
}
*/
