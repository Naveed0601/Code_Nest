import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { LuMousePointerClick } from "react-icons/lu";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full pt-28 px-4 sm:px-6 md:px-10 lg:px-16 overflow-x-hidden">
      {/* Title */}
      <h1 className="p-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-100 font-extrabold text-center tracking-wide font-noto">
        Take your coding to the next level with CodeNest - The ultimate code
        snippet manager.
      </h1>

      {/* Subtitle */}
      <p className="p-8 pt-1 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-extrabold text-center tracking-wide font-noto">
        Simplify your coding process and collaborate with ease using CodeNest -
        the ultimate code snippet manager for developers and content creators.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
        <Link to={"/login"}>
          <button className="flex justify-center items-center w-full sm:w-36 p-2 h-12 rounded-md text-base sm:text-lg text-white hover:text-blue-600 font-normal tracking-wide font-noto bg-blue-600 hover:bg-blue-200">
            Get Started <FaArrowRight className="ml-1" />
          </button>
        </Link>
        <Link to={"/login"}>
          <button className="flex justify-center items-center w-full sm:w-36 h-12 rounded-md text-base sm:text-lg text-blue-600 hover:text-white font-normal tracking-wide font-noto bg-blue-200 hover:bg-blue-600">
            Book a demo <LuMousePointerClick className="ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
