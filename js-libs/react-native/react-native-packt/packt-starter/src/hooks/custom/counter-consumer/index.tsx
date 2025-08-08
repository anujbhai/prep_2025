import { MyContext } from "../../builtin/contexts/my-context";

const CounterConsumer = () => {
  return (
    <MyContext.Consumer>
      {(value) => {
        // Ensure value is defined
        if (!value) {
          throw new Error("CounterConsumer must be used within a MyProvider");
        }

        const {count, increment, decrement} = value;

        return (
          <section>
            <h2>Using context.consumer</h2>

            <p>count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </section>
        );
      }}
    </MyContext.Consumer>
  );
};

export default CounterConsumer;

