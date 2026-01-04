import React, { useState, useContext } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { AuthContext } from "../Context/AuthContext";
import LoadingSpinner from "./LoadingSpinner";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, updateUserProfile, loading, setLoading } =
    useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setLoading(true);

    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    updateUserProfile({ displayName, photoURL })
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Profile updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsEditing(false);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-base-100 flex justify-center items-center min-h-screen md:p-8">
      <title>EcoTrack | Profile Page</title>

      <div className="rounded-lg md:border md:border-primary/20 p-8 w-full max-w-lg text-center">
        {/* Profile Image */}
        <div className="w-36 h-36 rounded-full p-1 bg-primary mx-auto mb-4">
          <img
            title={user?.displayName}
            alt="Profile"
            src={
              user?.photoURL ||
              "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?auto=format&fit=crop&q=60&w=500"
            }
            className="w-full h-full object-cover rounded-full overflow-hidden"
          />
        </div>

        <h1 className="text-3xl font-bold text-secondary mb-6 mt-3">
          {isEditing ? "Edit Profile" : "My Profile"}
        </h1>

        {isEditing ? (
          <form onSubmit={handleUpdateProfile} className="space-y-4 text-left">
            <div>
              <label className="text-gray-500 text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="text-gray-500 text-sm">Photo URL</label>
              <input
                type="text"
                name="photo"
                defaultValue={user?.photoURL}
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
              />
            </div>

            <button
              type="submit"
              className="btn w-full bg-primary text-white py-3 mt-3"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="btn w-full border border-primary text-primary py-3 mt-2"
            >
              Cancel
            </button>
          </form>
        ) : (
          <div className="text-left space-y-4">
            {/* Name */}
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <FaUser className="text-primary" />
              <div>
                <p className="text-gray-500 text-sm">Full Name</p>
                <h3 className="text-sm md:text-lg font-semibold text-secondary">
                  {user?.displayName}
                </h3>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <FaEnvelope className="text-primary" />
              <div>
                <p className="text-gray-500 text-sm">Email Address</p>
                <h5 className="text-sm md:text-lg font-semibold text-secondary">
                  {user?.email}
                </h5>
              </div>
            </div>

            {/* Photo URL */}
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <MdPhotoCamera className="text-primary shrink-0" size={19} />

              <div className="overflow-hidden">
                <p className="text-gray-500 text-sm">Photo URL</p>

                <h5
                  className="text-sm md:text-lg font-semibold text-secondary truncate"
                  title={user?.photoURL}
                >
                  {user?.photoURL}
                </h5>
              </div>
            </div>

            {/* btn */}
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="btn w-full bg-primary text-white py-3 mt-4"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
