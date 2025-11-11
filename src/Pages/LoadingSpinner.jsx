import React from "react";
import { HashLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <HashLoader color="#00a97e"/>
    </div>
  );
};

export default LoadingSpinner;
