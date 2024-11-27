import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { LuMousePointerClick } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const text =
    " Take your coding to the next level with CodeNest - The ultimate code snippet manager.".split(
      " "
    );

  return (
    <div className="w-full h-full pt-28 px-4 sm:px-6 md:px-10 lg:px-16 overflow-x-hidden">
      {/* Title */}
      <div className="flex flex-wrap justify-center items-center">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 15,
            }}
            key={i}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-100 font-extrabold text-center tracking-wide font-noto mx-2">
              {el}
            </h1>
          </motion.span>
        ))}
      </div>

      {/* Subtitle */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 1.0 }}
        >
          <p className="p-8 pt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-extrabold text-center tracking-wide font-noto">
            Simplify your coding process and collaborate with ease using
            CodeNest - the ultimate code snippet manager for developers and
            content creators.
          </p>{" "}
        </motion.div>
      </AnimatePresence>

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
