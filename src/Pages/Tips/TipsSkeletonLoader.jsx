import React from "react";

const TipsSkeletonLoader = ({ count = 1 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => {
        return (
          <div
            key={i}
            className="flex flex-col gap-5 overflow-hidden bg-white/50 rounded-lg p-6"
          >
            <div className="skeleton h-4 w-[80%]"></div>
            <div className="flex justify-between items-center">
              <div className="skeleton h-4 w-[30%]"></div>
              <div className="skeleton h-4 w-[13%]"></div>
            </div>
            <div className="skeleton h-4 w-[90%]"></div>
            <div className="skeleton h-4 w-[35%]"></div>
          </div>
        );
      })}
    </div>
  );
};

export default TipsSkeletonLoader;
