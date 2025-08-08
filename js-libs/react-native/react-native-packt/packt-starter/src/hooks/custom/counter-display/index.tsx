import { useContext } from "react";
import { MyContext } from "../../builtin/contexts/my-context";

const CounterDisplay = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("CounterDisplay must be used within a MyProvider");
  }

  const {count, increment, decrement} = context;

  return (
    <section>
      <h2>Using context hook</h2>

      <p>count: {count}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </section>
  );
};

export default CounterDisplay;

