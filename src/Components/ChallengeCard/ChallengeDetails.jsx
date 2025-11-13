import React, { use, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";

import LoadingSpinner from "../../Pages/LoadingSpinner";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

const ChallengeDetails = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const axiosInstance = useAxios();
  const [challengeDetails, setChallengeDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  // challenge details
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/challenges/${id}`)
      .then((data) => {
        setChallengeDetails(data.data);
      })
      .finally(() => setLoading(false));
  }, [id, axiosInstance, refresh]);

  const {
    title,
    category,
    description,
    duration,
    participants,
    target,
    imageUrl,
  } = challengeDetails || "";

  // join challenge
  const handleJoinChallenge = () => {
    const newJoinData = {
      userId: user?.email,
      challengeId: id,
      status: "Not Started",
      progress: 0,
      joinDate: new Date(),
    };

    if (!user?.email) return;

    axiosInstance
      .post(`/challenge/join/${id}`, newJoinData)
      .then((data) => {
        if (data.data.result.insertedId) {
          // sweetAlert
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You've successfully joined this challenge!",
            showConfirmButton: false,
            timer: 1500,
          });
          setRefresh(!refresh);
        }
      })
      .catch((error) => {
        if (error.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have already joined this challenge!",
          });
        }
      });
  };

  // handle delete challenge
  const handleDeleteChallenge = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/challenges/${id}`)
          .then((data) => {
            if (data.data.deletedCount) {
              // sweetAlert
              Swal.fire({
                title: "Deleted!",
                text: "Your challenge has been deleted!",
                icon: "success",
              });
              navigate("/challenges");
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="group max-w-4xl mx-auto p-6 bg-base-100 rounded-sm shadow-md hover:shadow-2xl transition-shadow duration-200">
      {/* image */}
      <figure className="rounded-sm overflow-hidden mb-6 relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-72 md:h-96 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </figure>

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

      {/* update, delete ,join button */}
      <div
        className={`flex justify-between items-center mt-6 ${
          challengeDetails.createdBy === user?.email || "justify-end mt-0"
        }`}
      >
        {challengeDetails.createdBy === user?.email && (
          <>
            <Link
              to={`/update/${id}`}
              className="btn btn-primary px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-200"
            >
              Update This Challenge
            </Link>
            <button
              onClick={handleDeleteChallenge}
              className="btn btn-primary px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-200"
            >
              Delete This Challenge
            </button>
          </>
        )}

        <button
          onClick={handleJoinChallenge}
          className="btn btn-primary px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-200"
        >
          Join This Challenge
        </button>
      </div>
    </div>
  );
};

export default ChallengeDetails;
