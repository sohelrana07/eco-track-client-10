import React from "react";

const ActivitySkeleton = ({ count = 1 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => {
        return (
          <div key={i} className="flex flex-col gap-5 overflow-hidden">
            <div className="skeleton h-56 w-full rounded-t-xl rounded-b-none"></div>
            <div className="skeleton h-4 w-[65%]"></div>
            <div className="skeleton h-4 w-[50%]"></div>
            <div className="skeleton h-4 w-[75%]"></div>
            <div className="flex justify-between items-center">
              <div className="skeleton h-4 w-[80%]"></div>
              <div className="skeleton h-4 w-[10%]"></div>
            </div>
            <div className="flex justify-end items-center">
              <div className="skeleton h-10 w-full rounded-full"></div>
            </div>
            <div className="flex justify-end items-center">
              <div className="skeleton h-10 w-full rounded-full"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActivitySkeleton;
