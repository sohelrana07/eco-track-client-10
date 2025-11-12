import React from "react";
import { FaTasks, FaCalendarAlt, FaClock } from "react-icons/fa";

const MyActivityCard = ({ activity }) => {
  const { challengeTitle, category, status, progress, joinDate } =
    activity || "";

  return (
    <div className="card bg-white rounded-sm shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      <div className="card-body">
        {/* Title */}
        <h3 className="text-lg font-semibold text-accent mb-1">
          {challengeTitle}
        </h3>
        {/* Category */}
        <p className="text-sm text-gray-600 mb-3">
          Category:{" "}
          <span className="text-secondary font-medium">{category}</span>
        </p>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-secondary font-medium">Progress</span>
            <span className="text-primary font-semibold">{progress}%</span>
          </div>
          <progress
            className="progress progress-primary w-full"
            value={progress}
            max="100"
          ></progress>
        </div>

        {/* Status and Join Date */}
        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
          <p className="flex items-center gap-1">
            <FaTasks /> {status}
          </p>
          <p className="flex items-center gap-1">
            <FaCalendarAlt /> {new Date(joinDate).toLocaleDateString()}
          </p>
        </div>

        {/* Optional Actions */}
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-sm btn-outline btn-primary flex items-center gap-2 hover:scale-105 transition-transform duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyActivityCard;
