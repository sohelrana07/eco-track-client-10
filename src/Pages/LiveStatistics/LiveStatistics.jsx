import React, { useEffect, useState } from "react";
import { FaLeaf, FaRecycle, FaWater, FaCarSide } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";

const LiveStatistics = () => {
  const axiosInstance = useAxios();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/stats")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [axiosInstance]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-dots loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-10 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-3 font-salsa text-primary">
            Live Community Impact
          </h3>
          <p className="text-accent max-w-2xl mx-auto leading-relaxed">
            Discover how our community is saving CO₂, reducing waste, and
            promoting a greener planet together.
          </p>
          <div className="w-24 h-1 mx-auto mt-3 bg-gradient-to-r from-green-600 to-green-700 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* CO₂ saved */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:scale-105 transition-transform ease-in-out">
            <FaLeaf className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-semibold text-gray-700">
              {stats?.co2Saved ?? 0} kg
            </h3>
            <p className="text-sm text-gray-500">CO₂ Saved</p>
          </div>

          {/* Plastic reduced */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:scale-105 transition-transform ease-in-out">
            <FaRecycle className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-semibold text-gray-700">
              {stats?.plasticReduced ?? 0} kg
            </h3>
            <p className="text-sm text-gray-500">Plastic Reduced</p>
          </div>

          {/* Water saved */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:scale-105 transition-transform ease-in-out">
            <FaWater className="text-4xl text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-semibold text-gray-700">
              {stats?.waterSaved ?? 0} L
            </h3>
            <p className="text-sm text-gray-500">Water Saved</p>
          </div>

          {/* Green miles */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:scale-105 transition-transform ease-in-out">
            <FaCarSide className="text-4xl text-yellow-500 mx-auto mb-3" />
            <h3 className="text-2xl font-semibold text-gray-700">
              {stats?.greenMiles ?? 0} km
            </h3>
            <p className="text-sm text-gray-500">Green Miles Driven</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStatistics;
