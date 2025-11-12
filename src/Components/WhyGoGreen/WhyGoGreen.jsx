// WhyGoGreen.jsx
import React from "react";

const benefits = [
  "Reduce your carbon footprint",
  "Save energy and natural resources",
  "Promote cleaner air and water",
  "Inspire community action",
];

const WhyGoGreen = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary font-salsa">
          Why Go Green?
        </h2>
        <p className="text-accent max-w-2xl mx-auto leading-relaxed">
          Discover the benefits of sustainable living and how small actions can
          make a big difference for our planet.
        </p>
        <div className="w-24 h-1 mx-auto mt-3 bg-gradient-to-r from-green-600 to-green-700 rounded-full"></div>
      </div>

      <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {benefits.map((item, index) => (
          <li
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <span className="text-green-600 text-2xl mb-2 block">✔</span>
            <p className="font-medium text-gray-700">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyGoGreen;

