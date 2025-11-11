import React, { use, useEffect, useState } from "react";
import { FaUserEdit, FaEnvelope, FaUser, FaUserCheck } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import LoadingSpinner from "./LoadingSpinner";

const Profile = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setLoading]);

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <title>Eco Track | Profile Page</title>
      <div className="bg-base-100 rounded-md shadow-xl p-8 w-full max-w-lg text-center">
        {/* Profile Image */}
        <div className="w-36 h-36 rounded-full p-1 bg-primary mx-auto">
          {" "}
          <img
            title={user?.displayName}
            alt="Profile"
            src={user?.photoURL}
            className="w-full h-full object-cover rounded-full overflow-hidden"
          />{" "}
        </div>
        <h1 className="text-3xl font-bold text-secondary mb-6 mt-3">
          My Profile
        </h1>

        <div className="text-left space-y-4">
          {/* Name */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <FaUser className="text-primary" />
            <div>
              <p className="text-gray-500 text-sm">Full Name</p>
              <h3 className="text-lg font-semibold text-secondary">
                {user?.displayName}
              </h3>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <FaEnvelope className="text-primary" />
            <div className="overflow-hidden">
              <p className="text-gray-500 text-sm">Email Address</p>
              <h5 className="text-lg font-semibold text-secondary">
                {user?.email}
              </h5>
            </div>
          </div>

          {/* photoURL */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <MdPhotoCamera className="text-primary shrink-0" size={19} />

            <div className="overflow-hidden">
              <p className="text-gray-500 text-sm">Photo URL</p>

              <h5
                className="text-lg font-semibold text-secondary truncate"
                title={user?.photoURL}
              >
                {user?.photoURL}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
