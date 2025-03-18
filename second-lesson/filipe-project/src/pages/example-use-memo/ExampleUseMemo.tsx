import { useMemo, useState } from "react";

import "./example-use-memo.css";

const fibonacci = (n: number): number => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const ExampleUseMemo = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(40);

  const fibValue = useMemo(() => fibonacci(num), [num]);

  return (
    <div className="use-memo-container">
      <h2>
        Fibonacci of {num} is {fibValue}
      </h2>
      <div className="re-render-container">
        <input
          type="number"
          className="re-render-input"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        />
        <button
          className="re-render-button"
          onClick={() => setCount(count + 1)}
        >
          Re-render ({count})
        </button>
      </div>
    </div>
  );
};

export { ExampleUseMemo };
