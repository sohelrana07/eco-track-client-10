import { Link } from "react-router";

const CallToAction = () => {
  return (
    <section className="max-w-6xl mx-auto pt-16 pb-8">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary font-salsa">
          Ready to Make an Impact?
        </h2>
        <p className="text-accent max-w-lg mx-auto leading-relaxed">
          Join sustainability challenges, track your progress, and contribute to
          a greener future with EcoTrack.
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <Link to="/challenges" className="btn btn-primary px-10 text-white">
          Explore Challenges
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
