import React from "react";

const HeadingWithLine = ({ children, className }) => (
  <h2 className={`text-3xl font-bold mb-6 relative ${className}`}>
    {children}
    <span className="block h-1 w-16 bg-black mt-2 mx-auto"></span> {/* Line below heading */}
  </h2>
);

export default HeadingWithLine;