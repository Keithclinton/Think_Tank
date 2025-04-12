import React, { useState } from "react";

function ServiceCard({ title, description, moreContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow rounded p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="text-gray-700 mt-4">{description}</p>
      {isExpanded && <p className="text-gray-700 mt-4">{moreContent}</p>}
      <button
        className="mt-4 text-yellow-500 font-semibold hover:underline"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default ServiceCard;