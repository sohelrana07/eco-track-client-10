import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import ChallengeCard from "../Components/ChallengeCard/ChallengeCard";
import SkeletonLoader from "./SkeletonLoader";

const Challenges = () => {
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(false);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    setLoading(true);

    axiosInstance
      .get("/challenges")
      .then((data) => {
        setChallenges(data.data);
      })
      .finally(() => setLoading(false));
  }, [axiosInstance]);

  return (
    <div>
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-3 text-primary font-salsa">
          All Challenges
        </h3>
        <p className="text-accent text-center max-w-2xl mx-auto leading-relaxed">
          Explore our eco-friendly challenges and start making a positive impact
          today. Join, track your progress, and be part of the green community.
        </p>
      </div>

      {loading ? (
        <SkeletonLoader count={12}></SkeletonLoader>
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
