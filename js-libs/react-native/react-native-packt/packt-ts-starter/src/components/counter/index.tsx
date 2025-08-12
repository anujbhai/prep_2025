import { useState, type ChangeEvent } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => {setCount(count + 1)}}>+</button>

      <hr />

      <p>{value}</p>

      <input value={value} onChange={handleChange} />
    </div>
  );
}

export default Counter;

