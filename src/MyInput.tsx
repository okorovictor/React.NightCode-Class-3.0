import { useRef, useImperativeHandle, forwardRef } from "react";

export interface MyInputHandle {
  focus: () => void;
}

const MyInput = forwardRef<MyInputHandle>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));

  return (
    <input
      type="text"
      ref={inputRef}
      placeholder="Click to focus"
      className="pl-5 px-3 border border-black"
    />
  );
});

export default MyInput;
