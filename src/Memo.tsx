import { useState, useMemo } from "react";

function Memo() {
  const [number, setNumber] = useState(1);
  const [val, setVal] = useState(1);
  const [double, setDouble] = useState(1);

  const getDouble = useMemo(() => {
    return slowFunction(val);
  }, [val]);

  function slowFunction(number: number) {
    console.log("Calling Slow Function");
    for (let i = 0; i <= 1000000000; i++) {}
    const double = number * 2;
    return double;
  }

  return (
    <main className="justify-center items-center flex flex-col gap-5">
      <h1 className="text-3xl text-blue-500">Add Number</h1>
      <h1 className="text-3xl text-blue-500">{number}</h1>
      <button
        onClick={() => setNumber(number + 1)}
        className="bg-blue-500 text-white py-2 px-3 cursor-pointer text-lg"
      >
        Add Number
      </button>

      <h1 className="text-3xl text-blue-600">Add Double</h1>
      <h1 className="text-3xl text-blue-600">{val}</h1>
      <button
        onClick={() => setVal(val + 1)}
        className="bg-blue-600 text-white py-2 px-3 cursor-pointer text-lg"
      >
        Add Double
      </button>

      <h1 className="text-3xl text-blue-700">Get Double</h1>
      <h1 className="text-3xl text-blue-700">{double}</h1>
      <button
        onClick={() => setDouble(getDouble)}
        className="bg-blue-700 text-white py-2 px-3 cursor-pointer text-lg"
      >
        Get Double
      </button>
    </main>
  );
}
export default Memo;
