import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";
import LoadingSpinner from "../LoadingSpinner";

const Events = () => {
  const axiosInstance = useAxios();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/events")
      .then((data) => setEvents(data.data))
      .finally(() => setLoading(false));
  }, [axiosInstance]);

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <section className="max-w-6xl mx-auto">
      {/* header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary font-salsa">
          All Community Events
        </h2>
        <p className="text-accent max-w-lg mx-auto leading-relaxed">
          Explore all eco-friendly events organized by our community and see how
          you can get involved.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-lg shadow-md border border-primary hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {event.description.slice(0, 80)}...
              </p>
            </div>

            <div className="flex justify-between items-center text-xs text-accent mt-3 border-t pt-3">
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt />
                <span title={event.location}>
                  {event.location.slice(0, 15)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
