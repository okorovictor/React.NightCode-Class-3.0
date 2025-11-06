import "./App.css";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);

  const handleIncreaseClick = () => {
    setIndex(index + 1);
    console.log(index);
  };

  const handleDecreaseClick = () => {
    setIndex(index - 1);
    console.log(index);
  };

  return (
    <main className="grid justify-items-center min-h-screen py-20 gap-5 bg-gray-00">
      <h1 className="text-4xl">{index}</h1>
      <button
        className="bg-blue-500 p-3 text-white cursor-pointer rounded-2xl hover:bg-blue-700"
        onClick={handleIncreaseClick}
      >
        Increase Number
      </button>
      <button
        className="bg-blue-500 p-3 text-white cursor-pointer rounded-2xl hover:bg-blue-700 "
        onClick={handleDecreaseClick}
      >
        Decrease Number
      </button>
    </main>
  );
}

export default App;
