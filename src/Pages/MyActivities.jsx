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


  if(loading) return <LoadingSpinner></LoadingSpinner>

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

      {loading ? (
        <ActivitySkeleton count={4}></ActivitySkeleton>
      ) : activities.length === 0 ? (
        <div className="flex flex-col justify-center items-center mt-28">
          <h3 className="text-3xl font-bold text-center mb-3 text-accent">
            No activities yet
          </h3>
          <p className="text-accent text-lg text-center">
            Join a challenge to start tracking your progress!
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
