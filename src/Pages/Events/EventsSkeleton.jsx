import React from "react";

const EventsSkeleton = ({ count = 1 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => {
        return (
          <div
            key={i}
            className="flex flex-col gap-5 overflow-hidden bg-white/50 rounded-lg p-6"
          >
            <div className="skeleton h-4 w-[90%]"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-1 w-full"></div>
            <div className="flex justify-between items-center">
              <div className="skeleton h-4 w-[40%]"></div>
              <div className="skeleton h-4 w-[40%]"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventsSkeleton;
