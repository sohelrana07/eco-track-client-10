import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAxios from "../../Hooks/useAxios";

const HeroBanner = () => {
  const [featured, setFeatured] = useState([]);
  const [current, setCurrent] = useState(0);
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get("/featured/challenges")
    .then((data) => {
      setFeatured(data.data);
    });
  }, [axiosInstance]);

  // Auto-play the carousel every 5 seconds
  useEffect(() => {
    if (featured.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featured]);

  const item = featured[current];

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg">
      {/* image */}
      <img
        src={item?.imageUrl}
        alt={item?.title}
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5 text-white bg-black/15">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{item?.title}</h1>
        <p className="max-w-xl mb-5 text-sm md:text-base">
          {item?.description.slice(0, 100)}...
        </p>

        <button
          onClick={() => navigate(`/challenges/${item._id}`)}
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-full"
        >
          View Challenge
        </button>
      </div>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {featured.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
