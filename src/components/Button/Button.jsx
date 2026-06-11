import React from "react";

const Button = ({ content, onClick, type = "button", ariaLabel }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel || content}
      className="bg-gradient-to-b from-green-400 to-green-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:from-green-500 hover:to-green-600 transition-all duration-300 cursor-pointer"
    >
      {content}
    </button>
  );
};

export default Button;