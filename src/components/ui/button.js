import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button className={`px-4 py-2 bg-gold text-white rounded ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
