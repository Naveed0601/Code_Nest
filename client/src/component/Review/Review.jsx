import React from "react";

const Review = () => {
  const reviewData = [
    { count: "144K", label: "DOWNLOADS" },
    { count: "200K", label: "USERS" },
    { count: "50K", label: "PROJECTS" },
    { count: "10K", label: "REVIEWS" },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-full pt-16 px-4 md:px-8 space-y-6 border-b border-white pb-16 mb-12 overflow-x-hidden">
      {/* Display items in a single column for mobile and tablet, switch to row on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-screen-lg">
        {reviewData.map((item, index) => (
          <div
            key={index}
            className={`text-center text-3xl font-noto font-bold text-red-600 ${
              index < reviewData.length - 1 ? "lg:border-r-2" : ""
            } border-white flex flex-col items-center space-y-2 pb-4`}
          >
            <p className="text-red-600 text-4xl lg:text-5xl">{item.count}</p>
            <p className="text-white text-sm md:text-lg lg:text-xl mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
