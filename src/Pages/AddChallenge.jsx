import React, { useState, use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
import LoadingSpinner from "./LoadingSpinner";

const AddChallenge = () => {
  const { user } = use(AuthContext);
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // handle createChallenge
  const handleCreateChallenge = (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const duration = form.duration.value;
    const target = form.target.value;
    const startDate = form.startDate.value;
    const endDate = form.endDate.value;

    // add newChallenge
    const newChallenge = {
      title,
      category,
      description,
      duration,
      target,
      startDate,
      endDate,
      participants: 0,
      createdBy: user?.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setLoading(true);
    axiosInstance
      .post("/challenges", newChallenge)
      .then((data) => {
        if (data.data.insertedId) {
          e.target.reset();
          Swal.fire({
            icon: "success",
            title: "Challenge Created Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            navigate("/challenges");
          }, 2000);
        }
      })
      .finally(() => setLoading(false));
  };

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-100 rounded-sm shadow-md hover:shadow-2xl transition-shadow duration-200">
      <h1 className="text-2xl font-bold mb-6">Add New Challenge</h1>
      <form onSubmit={handleCreateChallenge} className="space-y-4">
        {/* title */}
        <div>
          <label className="font-semibold mb-1.5">Title *</label>
          <input
            type="text"
            name="title"
            className="input w-full outline-none focus:border-2 focus:border-primary"
            placeholder="Enter challenge title"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="font-semibold mb-1.5">Category *</label>
          <select
            name="category"
            className="select w-full outline-none focus:border-2 focus:border-primary"
            required
          >
            <option value="">Select category</option>
            <option value="Energy Conservation">Energy Conservation</option>
            <option value="Water Conservation">Water Conservation</option>
            <option value="Sustainable Transport">Sustainable Transport</option>
            <option value="Green Living">Green Living</option>
            <option value="Waste Reduction">Waste Reduction</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold mb-1.5">Description *</label>
          <textarea
            name="description"
            className="textarea w-full outline-none focus:border-2 focus:border-primary"
            placeholder="Enter challenge description"
            required
          />
        </div>

        {/* Duration */}
        <div>
          <label className="font-semibold mb-1.5">Duration (days) *</label>
          <input
            type="text"
            name="duration"
            className="input w-full outline-none focus:border-2 focus:border-primary"
            placeholder="Enter duration in days"
            required
          />
        </div>

        {/* Target */}
        <div>
          <label className="font-semibold mb-1.5">Target *</label>
          <input
            type="text"
            name="target"
            className="input w-full outline-none focus:border-2 focus:border-primary"
            placeholder="Enter target"
            required
          />
        </div>

        {/* Start date */}
        <div>
          <label className="font-semibold mb-1.5">Start Date *</label>
          <input
            type="date"
            name="startDate"
            className="input w-full outline-none focus:border-2 focus:border-primary"
            required
          />
        </div>

        {/* End date */}
        <div>
          <label className="font-semibold mb-1.5">End Date *</label>
          <input
            type="date"
            name="endDate"
            className="input w-full outline-none focus:border-2 focus:border-primary"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="font-semibold mb-1.5">Image URL *</label>
          <input
            type="text"
            name="imageUrl"
            className="input w-full outline-none focus:border-2 focus:border-primary"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className={
            "btn bg-primary w-full mt-4 text-white text-base py-6 hover:opacity-90"
          }
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" size={18} />
              Creating......
            </>
          ) : (
            "Create Challenge"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddChallenge;
