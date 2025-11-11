import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import ChallengeCard from "../Components/ChallengeCard/ChallengeCard";

const Challenges = () => {
  const axiosInstance = useAxios();
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    axiosInstance.get("/challenges").then((data) => {
      console.log(data.data);
      setChallenges(data.data);
    });
  }, [axiosInstance]);

  return (
    <div>
      <h3>All Challenges</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge._id}
            challenge={challenge}
          ></ChallengeCard>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
