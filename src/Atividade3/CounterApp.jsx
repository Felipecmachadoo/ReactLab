import React from "react";

function Counter({ name, imageSrc, count, setCount }) {
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="counter">
      <img src={imageSrc} alt={name} />
      <div className="buttons">
        <button onClick={decrement}>−</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>{name}</div>
    </div>
  );
}

export default Counter;
