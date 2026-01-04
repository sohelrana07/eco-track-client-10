const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahim Ahmed",
      role: "Challenge Participant",
      image: "https://i.pravatar.cc/150?img=12",
      message:
        "EcoTrack helped me stay consistent with waste reduction challenges. Seeing my progress kept me motivated.",
    },
    {
      name: "Nusrat Jahan",
      role: "Community Member",
      image: "https://i.pravatar.cc/150?img=32",
      message:
        "I love how simple it is to join challenges and learn eco-friendly tips from others.",
    },
    {
      name: "Tanvir Hasan",
      role: "Green Volunteer",
      image: "https://i.pravatar.cc/150?img=56",
      message:
        "The live statistics make our collective impact visible. It truly feels like a community.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary font-salsa">
          Trusted by Our Community
        </h2>
        <p className="text-accent max-w-xl mx-auto leading-relaxed">
          Hear real stories from people actively contributing to a greener and
          sustainable future.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between h-full border border-primary/20 rounded-lg p-6 bg-base-100 hover:shadow-sm transition-all duration-300"
          >
            <p className="text-accent text-sm leading-relaxed mb-6 relative pl-4">
              <span className="text-3xl text-primary absolute -left-2 -top-2">
                “
              </span>
              {item.message}
            </p>

            <div className="border-t border-primary/10 my-4"></div>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div>
                <h4 className="font-semibold text-primary leading-none">
                  {item.name}
                </h4>
                <span className="text-xs text-accent">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
