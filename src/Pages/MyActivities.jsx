import React, { use, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import LoadingSpinner from "./LoadingSpinner";
import { AuthContext } from "../Context/AuthContext";
import MyActivityCard from "../Components/MyActivityCard/MyActivityCard";
import ActivitySkeleton from "../Components/MyActivityCard/ActivitySkeleton";

const MyActivities = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/myActivities?userId=${user?.email}`)
      .then((data) => {
        setActivities(data.data);
      })
      .finally(() => setLoading(false));
  }, [axiosSecure, user]);

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="container mx-auto md:px-4">
      {/* header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-center mb-2 text-primary font-salsa">
          My Activities
        </h2>
        <p className="text-accent text-center max-w-md mx-auto">
          Track your joined challenges, progress, and achievements here.
        </p>
      </div>

      {activities.length === 0 ? (
        <ActivitySkeleton count={activities.length}></ActivitySkeleton>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
