import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyActivityCard = ({ activity }) => {
  const [data, setData] = useState({});
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const updateModalRef = useRef();

  useEffect(() => {
    axiosSecure.get(`/challenges/${activity.challengeId}`).then((res) => {
      setData(res.data);
    });
  }, [axiosSecure, activity]);

  const handleBidModalOpen = () => {
    updateModalRef.current.showModal();
  };

  const handleBidModalClose = () => {
    updateModalRef.current.close();
  };

  // Handle progress update
  const handleSubmit = (e) => {
    e.preventDefault();
    const progress = Number(e.target.progress.value);

    let status = "Not Started";
    if (progress === 100) status = "Completed";
    else if (progress > 0) status = "In Progress";

    const updateData = { progress, status, updated: new Date() };

    axiosSecure
      .patch(`/myActivities/${activity._id}`, updateData)
      .then((data) => {
        console.log(data.data);
        if (data.data.matchedCount) {
          Swal.fire({
            icon: "success",
            title: "Progress updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    updateModalRef.current.close();
    window.location.reload();
  };

  return (
    <div className="bg-base-100 shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-200">
      {/* image */}
      <img
        src={data.imageUrl}
        alt={data.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{data.title}</h2>
        <p className="text-sm text-primary mb-2">{data.category}</p>
        <p className="text-sm mb-2 font-medium">
          Duration: {data.duration} days |{" "}
          <span className="font-medium">Status:</span>{" "}
          <span
            className={`${
              activity.status === "Not Started"
                ? "text-red-500"
                : "text-green-500"
            } font-medium`}
          >
            {activity.status}
          </span>
        </p>

        {/* progress bar */}
        <div className="w-[91%] bg-gray-200 rounded-full h-4 mb-4 relative">
          <div
            className="bg-primary h-4 rounded-full"
            style={{ width: `${activity.progress}%` }}
          />
          <span
            className={`text-sm font-medium absolute top-0 right-0 -mr-8 -mt-0.5 ${
              activity.progress === 0 ? "text-red-500" : "text-primary"
            }`}
          >
            {activity.progress}%
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <button
            className="btn btn-outline btn-primary w-full"
            onClick={() => navigate(`/challenges/${activity.challengeId}`)}
          >
            View Details
          </button>
          <button
            className="btn btn-secondary w-full"
            onClick={handleBidModalOpen}
          >
            Update Progress
          </button>
        </div>
      </div>

      {/* Modal */}
      <dialog
        ref={updateModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Update Progress</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              min="0"
              max="100"
              name="progress"
              className="input w-full outline-none focus:border-2 focus:border-primary"
            />
            <div className="modal-action">
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-outline rounded-full hover:bg-red-500 hover:text-white"
                onClick={handleBidModalClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyActivityCard;
