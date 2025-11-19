import "./App.css";
import { useRef } from "react";
import MyInput, { type MyInputHandle } from "./MyInput";

function App() {
  const inputRef = useRef<MyInputHandle>(null);

  const handleFocusClick = () => {
    inputRef.current?.focus();
  };
  return (
    <main className="grid justify-items-center min-h-screen py-20 gap-5 bg-gray-200">
      <MyInput ref={inputRef} />
      <button
        onClick={handleFocusClick}
        className="bg-black text-white p-3 cursor-pointer text-sm mb-5 rounded-2xl"
      >
        Click me!
      </button>
    </main>
  );
}

export default App;
