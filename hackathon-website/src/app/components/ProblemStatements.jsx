"use client";
import { useState } from "react";

export default function ProblemStatements() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const problemStatements = [
    {
      title: "Smart City Solutions",
      description:
        "Propose innovative technological solutions that can help make cities smarter and more sustainable. Consider areas like energy management, public transportation, and waste management.",
    },
    {
      title: "Healthcare Innovations",
      description:
        "Design an app or platform that provides better access to healthcare services, especially in rural or underserved areas. Include features such as telemedicine, health tracking, or remote diagnosis.",
    },
    {
      title: "Educational Platforms",
      description:
        "Create a platform that can enhance remote learning, enabling students and teachers to interact more effectively. The platform should address issues such as accessibility, engagement, and feedback.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Problem Statements</h1>

        {/* Loop through problem statements */}
        {problemStatements.map((problem, index) => (
          <div
            key={index}
            className="mb-6 bg-gray-100 rounded-lg shadow-md overflow-hidden transition-all duration-300"
          >
            {/* Problem Statement Title (Card Header) */}
            <div
              onClick={() => toggleCard(index)}
              className="cursor-pointer px-6 py-4 bg-gray-200 hover:bg-gray-300 flex justify-between items-center"
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {`Problem Statement ${index + 1}: ${problem.title}`}
              </h2>
              <span>{activeCard === index ? "-" : "+"}</span>
            </div>

            {/* Problem Statement Description (Card Body) */}
            {activeCard === index && (
              <div className="px-6 py-4 text-gray-600">
                <p>{problem.description}</p>
              </div>
            )}
          </div>
        ))}

        {/* PDF Download */}
        <div className="mt-8">
          <a
            href="/problem-statements.pdf"
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-600 transition duration-300"
            download
          >
            Download Problem Statements PDF
          </a>
        </div>
      </div>
    </div>
  );
}
