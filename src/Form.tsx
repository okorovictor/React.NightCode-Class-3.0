import React, { useRef } from "react";

const Form: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    inputRef.current?.focus();
  }
  return (
    <section className="pb-20 my-10">
      <input
        type="text"
        ref={inputRef}
        className="border border-black px-20 py-1"
      />
      <button
        onClick={handleClick}
        className="bg-black text-white py-2 px-3 cursor-pointer text-sm"
      >
        Focus the input
      </button>
    </section>
  );
};
export default Form;
