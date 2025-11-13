import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaUserAlt } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router";

const RecentTips = () => {
  const axiosInstance = useAxios();
  const [recentTips, setRecentTips] = useState([]);

  useEffect(() => {
    axiosInstance.get("/recent/tips").then((data) => setRecentTips(data.data));
  }, [axiosInstance]);

  return (
    <section className="max-w-6xl mx-auto py-16">
      {/* header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary font-salsa">
          Recent Community Tips
        </h2>
        <p className="text-accent max-w-lg mx-auto leading-relaxed">
          Explore the latest eco-friendly tips shared by our amazing community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentTips.map((tip) => (
          <div
            key={tip._id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-secondary mb-3">
              {tip.title}
            </h3>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-2">
                <FaUserAlt className="text-primary" />
                <span>{tip.authorName}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaThumbsUp className="text-primary" />
                <span>{tip.upvotes}</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-1">
              {tip.content}
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <MdOutlineCalendarToday />
              <span>
                {new Date(tip.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <Link
          to="/tips"
          className="btn w-40 btn-outline outline-accent border-primary text-primary"
        >
          View All Tips
        </Link>
      </div>
    </section>
  );
};

export default RecentTips;
