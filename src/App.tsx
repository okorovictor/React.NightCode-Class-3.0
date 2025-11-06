import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerll = setTimeout(() => {
      setCount(count + 3);
    }, 2000);
    return () => {
      clearTimeout(timerll);
    };
  }, [count]);

  return (
    <main className="grid justify-items-center min-h-screen py-20 gap-5 bg-gray-00">
      <h1>{count}</h1>
    </main>
  );
}

export default App;
