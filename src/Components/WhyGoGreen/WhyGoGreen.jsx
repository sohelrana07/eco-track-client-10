import React from "react";

const benefits = [
  { icon: "🌍", title: "Reduce your carbon footprint" },
  { icon: "⚡", title: "Save energy and natural resources" },
  { icon: "💧", title: "Promote cleaner air and water" },
  { icon: "🤝", title: "Inspire community action" },
];

const WhyGoGreen = () => {
  return (
    <section className="max-w-6xl mx-auto py-16">
      {/* heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary font-salsa">
          Why Go Green?
        </h2>
        <p className="text-accent max-w-lg mx-auto leading-relaxed">
          Learn how small sustainable actions can make a big difference for our
          planet.
        </p>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {benefits.map((item, index) => (
          <li
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <span className="text-4xl mb-4 block">{item.icon}</span>
            <p className="font-medium text-gray-700">{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyGoGreen;
