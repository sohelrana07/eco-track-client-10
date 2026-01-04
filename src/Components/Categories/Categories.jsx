const Categories = () => {
  const categories = [
    {
      title: "Waste Reduction",
      description:
        "Reduce plastic use and household waste through simple daily actions.",
    },
    {
      title: "Energy Conservation",
      description: "Save electricity and lower your carbon footprint at home.",
    },
    {
      title: "Water Conservation",
      description: "Protect water resources by adopting mindful usage habits.",
    },
    {
      title: "Green Living",
      description:
        "Choose eco-friendly products and sustainable lifestyle options.",
    },
    {
      title: "Sustainable Transport",
      description: "Walk, cycle, or use public transport to reduce emissions.",
    },
    {
      title: "Community Action",
      description:
        "Participate in local clean-ups and environmental initiatives.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto pt-16 pb-8">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary font-salsa">
          Challenge Categories
        </h2>
        <p className="text-accent max-w-lg mx-auto leading-relaxed">
          Discover sustainability challenges based on areas where you can make
          the biggest environmental impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white border border-primary/20 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {category.title}
            </h3>
            <p className="text-accent text-sm leading-relaxed">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
