import React, { use, useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import LoadingSpinner from "./LoadingSpinner";
import MyActivityCard from "../Components/MyActivityCard/MyActivityCard";
import { AuthContext } from "../Context/AuthContext";

const MyActivities = () => {
  const { user } = use(AuthContext);
  const axiosInstance = useAxios();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/myActivities?userId=${user?.email}`)
      .then((data) => {
        console.log(data.data);
        setActivities(data.data);
      })
      .finally(() => setLoading(false));
  }, [axiosInstance, user]);

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-center mb-2 text-primary font-salsa">
          My Activities
        </h2>
        <p className="text-accent text-center max-w-md mx-auto">
          Track your joined challenges, progress, and achievements here.
        </p>
      </div>

      {/* grid */}
      {activities.length === 0 ? (
        <div className="text-xl text-accent text-center font-semibold pt-20">
          <p>You haven’t joined any challenges yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <MyActivityCard
              key={activity._id}
              activity={activity}
            ></MyActivityCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyActivities;
