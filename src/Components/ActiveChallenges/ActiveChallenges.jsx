import React, { useState } from "react";

const ActiveChallenges = () => {
  const [challenges, setChallenges] = useState([]);

  return (
    <div className="max-w-6xl mx-auto py-16">
      {/* heading */}
      <div className="mb-10 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-3 font-salsa text-primary">
          Active Challenges
        </h3>
        <p className="text-accent max-w-2xl mx-auto px-10 leading-relaxed">
          Join ongoing challenges and track your progress to make a real impact
          on our environment.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {/* {challenges?.map((challenge) => ( */}
        <div
          // key={challenge.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
              src=''
              alt=''
            className="h-40 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{`challenge.title`}</h3>
            <p className="text-sm text-gray-500 mb-1">{`challenge.category`}</p>
            <p className="text-sm font-medium text-green-600">
              {`challenge.metric`}
            </p>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default ActiveChallenges;
