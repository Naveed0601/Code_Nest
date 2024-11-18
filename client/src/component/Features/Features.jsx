import React from "react";
import { FaArrowRight, FaBolt } from "react-icons/fa6";
import { LuMousePointerClick } from "react-icons/lu";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="w-full h-full pt-28 px-4 md:px-8 overflow-x-hidden">
      <div className="w-full md:w-[600px] p-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide font-noto mb-6 text-yellow-400">
          Elevate Your Coding Game with CodeNest
        </h1>
        <p className="text-gray-100 text-justify font-bold tracking-wide mb-10 font-noto">
          Unlock Your Coding Potential with CodeNest!
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to={"/login"}>
            <button className="flex justify-center items-center w-full sm:w-36 h-12 rounded-md text-base text-white hover:text-blue-600 font-normal tracking-wide font-noto bg-blue-600 hover:bg-blue-200">
              Get Started <FaArrowRight className="ml-1" />
            </button>
          </Link>
          <Link to={"/login"}>
            <button className="flex justify-center items-center w-full sm:w-36 h-12 rounded-md text-base text-blue-600 hover:text-white font-normal tracking-wide font-noto bg-blue-200 hover:bg-blue-600">
              Book a demo <LuMousePointerClick className="ml-1" />
            </button>
          </Link>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="w-full p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-opacity-75 p-4 flex flex-col items-start text-gray-50">
    <FaBolt className="text-7xl bg-black text-blue-400 p-4 rounded-full mb-4" />
    <h2 className="text-lg font-extrabold text-yellow-400 mb-2 font-noto">
      {title}
    </h2>
    <p className="text-justify font-noto font-bold text-sm sm:text-base">
      {description}
    </p>
  </div>
);

const featuresData = [
  {
    title: "Collaborate and Code Efficiently",
    description:
      "With CodeNest, developers can easily collaborate on code snippets, making it the perfect tool for team projects. The tagging and syntax highlighting features also make it easier to organize and find specific snippets, saving valuable time for developers.",
  },
  {
    title: "Simplify Your Workflow",
    description:
      "With CodeNest, developers can easily organize and access their code snippets, saving time and streamlining their workflow. Say goodbye to searching through endless folders for that one line of code.",
  },
  {
    title: "Streamline Your Coding Process",
    description:
      "With CodeNest's advanced tagging system and syntax highlighting, developers can easily organize and find their snippets, saving valuable time and increasing productivity. Plus, the easy collaboration feature allows for seamless teamwork on projects.",
  },
  {
    title: "Enhanced Collaboration",
    description:
      "CodeNest allows developers to easily collaborate on code snippets, making it the perfect tool for team projects and remote work. With real-time updates and a built-in chat feature, working together on code has never been easier.",
  },
];

export default Features;
