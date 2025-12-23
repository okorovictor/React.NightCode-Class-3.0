import "./App.css";
import { useReducer } from "react";

type State = {
  count: number;
};
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-5 bg-gray-200">
      <h3 className="text-4xl">{state.count}</h3>
      <button
        className="bg-blue-400 text-3xl text-white px-12 py-3 cursor-pointer"
        onClick={handleIncrement}
      >
        +
      </button>
      <button
        className="bg-blue-400 text-3xl text-white px-13 py-3 cursor-pointer"
        onClick={handleDecrement}
      >
        -
      </button>
      <button
        className="bg-blue-400 text-3xl text-white px-5 py-3 cursor-pointer"
        onClick={handleReset}
      >
        Reset
      </button>
    </main>
  );
}

export default App;
