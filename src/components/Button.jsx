import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-foundation-blue-b-300 w-[191px] p-[10px] items-center justify-center rounded-[12px] "
    >
      {text}
    </button>
  );
};

export default Button;
