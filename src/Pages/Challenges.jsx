import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import ChallengeCard from "../Components/ChallengeCard/ChallengeCard";
import SkeletonLoader from "./SkeletonLoader";
import LoadingSpinner from "./LoadingSpinner";

const Challenges = () => {
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(false);
  const [challenges, setChallenges] = useState([]);

  const fetchChallenges = (filters = {}) => {
    setLoading(true);

    const query = filters
      ? `?filter=${encodeURIComponent(JSON.stringify(filters))}`
      : "";

    axiosInstance
      .get(`/challenges${query}`)
      .then((data) => setChallenges(data.data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchChallenges();
  }, []);

  // Handle filters
  const handleFiltersChallenge = (e) => {
    e.preventDefault();

    const form = e.target;

    const category = form.category.value;
    const Participants = form.Participants.value;

    const filters = {
      category,
      Participants,
    };

    fetchChallenges(filters);
  };

  console.log(challenges);
  return (
    <div>
      {/* header */}
      <div className="mb-10">
        <h3 className="text-3xl font-bold text-center mb-3 text-primary font-salsa">
          All Challenges
        </h3>
        <p className="text-accent text-center max-w-2xl mx-auto leading-relaxed">
          Explore our eco-friendly challenges and start making a positive impact
          today. Join, track your progress, and be part of the green community.
        </p>
      </div>

      {/* filter */}
      <form
        onSubmit={handleFiltersChallenge}
        className="mb-20 max-w-2xl mx-auto flex flex-col md:flex-row justify-center gap-4"
      >
        <select
          name="category"
          className="select w-full outline-none border-primary focus:border-2 focus:border-primary"
        >
          <option value="">Select category</option>
          <option value="Energy Conservation">Energy Conservation</option>
          <option value="Water Conservation">Water Conservation</option>
          <option value="Sustainable Transport">Sustainable Transport</option>
          <option value="Green Living">Green Living</option>
          <option value="Waste Reduction">Waste Reduction</option>
        </select>

        <input
          type="text"
          name="Participants"
          placeholder="Search Participants"
          className="input w-full outline-none border-primary focus:border-2 focus:border-primary"
        />

        <button
          type="submit"
          className="btn btn-outline outline-accent border-primary text-primary px-10"
        >
          Filter
        </button>
      </form>

      {loading ? (
        <SkeletonLoader count={12}></SkeletonLoader>
      ) : challenges.length === 0 ? (
        <div className="flex flex-col justify-center items-center mt-28">
          <h3 className="text-3xl font-bold text-center mb-3 text-accent">
            No data available
          </h3>
          <p className="text-accent text-xl font-medium">Try now</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <ChallengeCard
              key={challenge._id}
              challenge={challenge}
            ></ChallengeCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Challenges;
