import { useReducer } from "react";

import "./example-use-reducer.css";

const ExampleUseReducer = () => {
  const reducerDispatcher = (
    state: number,
    action: "increment" | "decrement" | "reset"
  ) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return state;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducerDispatcher, 0);

  return (
    <div className="use-reducer-container">
      <h2>Contador: {count}</h2>
      <div className="re-render-container">
        <button className="action-button" onClick={() => dispatch("increment")}>
          +
        </button>
        <button className="action-button" onClick={() => dispatch("decrement")}>
          -
        </button>
      </div>
    </div>
  );
};

export { ExampleUseReducer };
