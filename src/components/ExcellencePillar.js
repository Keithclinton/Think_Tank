import React, { useState } from "react";

const ExcellencePillar = ({ pillar }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow rounded p-6 text-center hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
      <img
        src={pillar.img}
        alt={pillar.title}
        className="h-40 mx-auto mb-4 object-cover rounded"
      />
      <h4 className="text-xl font-semibold text-black">{pillar.title}</h4>
      <p className="mt-2 text-gray-600">{pillar.desc}</p>
      {isExpanded && <p className="mt-2 text-gray-600">{pillar.moreContent}</p>}
      <button
        className="mt-4 text-yellow-500 font-semibold hover:underline"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ExcellencePillar;