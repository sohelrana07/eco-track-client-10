import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";
import { useNavigate } from "react-router";

const HeroBanner = () => {
  const [featured, setFeatured] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeatured = () => {
      axiosInstance
        .get("/featured/challenges")
        .then((data) => setFeatured(data.data));
    };
    fetchFeatured();
  }, [axiosInstance]);

  const currentSlide = featured[currentIndex];
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
      <figure>
        <img
          src={currentSlide?.imageUrl}
          alt={currentSlide?.title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="absolute inset-0 bg-black/35 flex flex-col justify-center items-start px-6 md:px-16 text-white">
        <div className="ml-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {currentSlide?.title}
          </h2>
          <p className="max-w-xl text-sm md:text-lg mb-6">
            {currentSlide?.description}
          </p>
          <button
            onClick={() => navigate(`/challenges/${currentSlide?._id}`)}
            className="bg-primary px-6 py-3 rounded-md text-white font-semibold hover:bg-opacity-90 transition"
          >
            View Challenge
          </button>
        </div>
      </div>

      {/* arrow btn */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 text-gray-800 p-3 rounded-full z-20"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 text-gray-800 p-3 rounded-full z-20"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default HeroBanner;
