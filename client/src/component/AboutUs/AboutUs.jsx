import React from "react";
import about_us from "../../assets/about_us.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";

const AboutUs = () => {
  // Animation for the text
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full h-full pt-28 px-4 sm:px-6 md:px-8 overflow-x-hidden">
      <div className="flex flex-col md:flex-row w-full h-full space-y-8 md:space-y-0 items-center">
        {/* Image */}
        <motion.img
          src={about_us}
          alt="about us"
          className="w-full md:w-[400px] h-auto p-2 m-2 rounded-full object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Text and Button */}
        <div
          ref={ref}
          className="md:ml-12 lg:ml-36 mt-8 md:mt-0 w-full md:w-1/2"
        >
          {/* Animated Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h1 className="font-bold tracking-wide text-3xl text-teal-400 font-noto text-center md:text-left">
              ABOUT US
            </h1>
            <h2 className="mt-4 text-3xl md:text-4xl text-blue-800 font-extrabold tracking-wide font-noto text-center md:text-left">
              Streamline Your Coding Process with CodeNest
            </h2>
            <p className="mt-2 text-gray-400 text-center md:text-left text-sm md:text-base">
              The Ultimate Code Snippet Manager
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-10 text-gray-50 text-justify font-noto tracking-wide font-bold text-sm md:text-base"
          >
            CodeNest was born out of a simple need to organize, save, and
            quickly access important code snippets in one place. Whether you're
            a seasoned developer or just starting, CodeNest helps improve
            productivity and streamline your workflow.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link to={"/login"}>
              <button className="mt-10 flex justify-center items-center w-full sm:w-36 h-12 rounded-md text-base sm:text-lg text-white hover:text-blue-600 font-normal tracking-wide font-noto bg-blue-600 hover:bg-blue-200">
                Get Started <FaArrowRight className="ml-1" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
