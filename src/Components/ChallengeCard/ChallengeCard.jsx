import React from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const ChallengeCard = ({ challenge }) => {
  const {
    _id,
    title,
    category,
    description,
    duration,
    participants,
    imageUrl,
  } = challenge;

  return (

    <div className="group bg-base-100 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <figure className="rounded-t-xl overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="w-full h-56 object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
        />
        {/* optional overlay for effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </figure>

      {/* Card Body */}
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-primary">{title}</h2>

        <p className="text-secondary font-medium">
          Category: <span className="text-primary">{category}</span>
        </p>

        <p className="text-gray-600 text-sm line-clamp-2">
          {description || "No description available."}
        </p>

        <div className="flex items-center justify-between pt-2">
          <p className="text-secondary text-sm">
            Duration:{" "}
            <span className="text-primary font-semibold">{duration} days</span>
          </p>
          <p className="text-secondary text-sm">
            Participants:{" "}
            <span className="text-primary font-semibold">{participants}</span>
          </p>
        </div>

        {/* View Details Button */}
        <div className="flex justify-end pt-3">
          <Link
            to={`/challenges/${_id}`}
            className="btn-secondary btn-sm flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          >
            View Details <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
