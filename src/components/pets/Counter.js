import { React, useState } from "react";
import classes from "./Counter.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <h2>Fed today: {counter}</h2>
      <div style={{ textAlign: "center" }} className={classes.actions}>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
