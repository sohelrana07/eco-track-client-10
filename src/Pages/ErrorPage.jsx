import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-6 h-screen">
      <h3 className="text-2xl font-semibold text-secondary">404 Not Found</h3>
      <h1 className="text-5xl font-bold">Oops! Page Not Found</h1>
      <p className="text-lg text-secondary">
        The page you are looking for doesn't exist. Click <br /> button bellow
        to go to homepage.
      </p>
      <Link to="/" className="btn bg-secondary text-base-100">
        <AiOutlineHome size={19} />{" "}
        <span className="mt-0.5">Back to Homepage</span>
      </Link>
    </div>
  );
};

export default ErrorPage;
