import React from "react";

const SkeletonLoader = ({ count = 1 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => {
        return (
          <div key={i} className="flex flex-col gap-5 overflow-hidden">
            <div className="skeleton h-56 w-full rounded-t-xl rounded-b-none"></div>
            <div className="skeleton h-4 w-75"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="flex justify-between items-center">
              <div className="skeleton h-4 w-40"></div>
              <div className="skeleton h-4 w-30"></div>
            </div>
            <div className="flex justify-end items-center">
              <div className="skeleton h-10 w-35 rounded-full"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkeletonLoader;
