import React from "react";

const dataCollection = [
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
    <section className="max-w-6xl mx-auto pt-16 pb-8">
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

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {dataCollection.map((data, index) => (
          <li
            key={index}
            className={`${data.bg} rounded-lg shadow-md p-6 flex flex-col items-center`}
          >
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-4 font-bold">
              {index + 1}
            </div>
            <span className="text-4xl mb-3">{data.icon}</span>
            <h3 className="font-semibold text-secondary mb-2">{data.title}</h3>
            <p className="text-gray-500 text-sm">{data.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HowItWorks;
