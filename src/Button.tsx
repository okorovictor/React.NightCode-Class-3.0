type BtnText = {
  btnText?: string;
  btnBgColor?: string;
  handleClick?: () => void;
};

function Button({ btnText, btnBgColor = "bg-gray-500", handleClick }: BtnText) {
  return (
    <button className={`p-3 ${btnBgColor} text-white`} onClick={handleClick}>
      {btnText}
    </button>
  );
}

export default Button;
