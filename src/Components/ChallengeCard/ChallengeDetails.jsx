import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import useAxios from "../../Hooks/useAxios";
import LoadingSpinner from "../../Pages/LoadingSpinner";

const ChallengeDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const [challengeDetails, setChallengeDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/challenges/${id}`)
      .then((data) => setChallengeDetails(data.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id, axiosInstance]);

  const {
    title,
    category,
    description,
    duration,
    participants,
    target,
    imageUrl,
  } = challengeDetails || "";

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-sm shadow-lg my-10">
      {/* image */}
      <div className="rounded-sm overflow-hidden mb-6">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-72 md:h-96 object-cover"
        />
      </div>

      {/* Title and Category */}
      <h1 className="text-3xl font-bold text-primary mb-2">{title}</h1>
      <p className="text-gray-600 mb-4">Category: {category}</p>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2.5">About this Challenge</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* others info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-700 mb-6">
        <p>
          <span className="font-semibold">Duration:</span> {duration} days
        </p>
        <p>
          <span className="font-semibold">Participants:</span> {participants}
        </p>
      </div>
        <p className="col-span-2">
          <span className="font-semibold">Target:</span> {target}
        </p>

      {/* Join Button */}
      <div className="flex justify-end">
        <Link
          to={`/challenges/join/${id}`}
          className="btn btn-primary px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-200"
        >
          Join This Challenge
        </Link>
      </div>
    </div>
  );
};

export default ChallengeDetails;
