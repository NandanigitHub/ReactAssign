import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const IncrCounter = () => {
    setCount(count + 1);
  };

  const DecrCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="counterSpacing m-5" align="center">
      <div className="mb-5">
        <h1 align="center">Counter Form</h1>
      </div>
      <button onClick={DecrCounter} type="button" class="btn btn-danger">
        Decrement
      </button>
      <span className="counterSpac m-3">
        <label>{count}</label>
      </span>
      <button onClick={IncrCounter} type="button" class="btn btn-success">
        Increment
      </button>
    </div>
  );
};

export default Counter;
