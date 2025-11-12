// HowItWorks.jsx
import React from "react";

// Static steps content with icons
const steps = [
  {
    icon: "📝",
    title: "Join a Challenge",
    description:
      "Pick a challenge that fits your lifestyle and sign up to start making an impact.",
    bg: "bg-green-50",
  },
  {
    icon: "📊",
    title: "Track Your Progress",
    description:
      "Monitor your activities and see how your actions contribute to the environment.",
    bg: "bg-blue-50",
  },
  {
    icon: "💡",
    title: "Share Tips",
    description:
      "Share your insights and tips with the community to inspire sustainable habits.",
    bg: "bg-yellow-50",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 relative">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary font-salsa">
          How It Works
        </h2>
        <p className="text-accent max-w-lg mx-auto leading-relaxed">
          Follow these simple steps to join the EcoTrack community and make a
          difference.
        </p>
      </div>

      {/* Steps Cards */}
      <ul className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`${step.bg} rounded-lg shadow-md p-6 flex flex-col items-center`}
          >
            {/* Step Number */}
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-4 font-bold">
              {index + 1}
            </div>
            {/* Icon */}
            <span className="text-4xl mb-3">{step.icon}</span>
            {/* Title */}
            <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
            {/* Description */}
            <p className="text-gray-600 text-sm">{step.description}</p>
          </li>
        ))}
      </ul>

      {/* Optional subtle background shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -z-10"></div>
    </section>
  );
};

export default HowItWorks;
