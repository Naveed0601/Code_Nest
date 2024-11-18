import React from "react";
import about_us from "../../assets/about_us.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="w-full h-full pt-28 px-4 sm:px-6 md:px-8 overflow-x-hidden">
      <div className="flex flex-col md:flex-row w-full h-full space-y-8 md:space-y-0">
        {/* Image */}
        <img
          src={about_us}
          alt="about us"
          className="w-full md:w-[400px] h-auto p-2 m-2 rounded-full object-cover"
        />
        {/* Text and Button */}
        <div className="md:pr-12 pl-8 mt-8 md:mt-0 w-full md:w-1/2">
          <h1 className="font-bold tracking-wide text-3xl text-teal-400 font-noto">
            ABOUT US
          </h1>
          <h1 className="mt-2 text-3xl md:text-4xl text-blue-800 font-extrabold tracking-wide font-noto">
            Streamline Your Coding Process with CodeNest
            <p className="text-gray-400 text-sm md:text-base">
              The Ultimate Code Snippet Manager
            </p>
          </h1>
          <p className="mt-10 text-gray-50 text-justify font-noto tracking-wide font-bold text-sm md:text-base">
            CodeNest was born out of a simple need to organize, save, and
            quickly access important code snippets in one place. Whether you're
            a seasoned developer or just starting, CodeNest helps improve
            productivity and streamline your workflow.
          </p>
          <Link to={"/login"}>
            <button className="mt-10 flex justify-center items-center w-full sm:w-36 h-12 rounded-md text-base sm:text-lg text-white hover:text-blue-600 font-normal tracking-wide font-noto bg-blue-600 hover:bg-blue-200">
              Get Started <FaArrowRight className="ml-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
