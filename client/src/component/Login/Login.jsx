import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import rectangle from "../../assets/Rectangle.png";
import rectangle2 from "../../assets/Rectangle1.png";
import young_man from "../../assets/young_man.png";
import login from "../../assets/Login.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
      const data = await response.json();
      if (!response.ok) {
        console.error("Error response from server:", data);
      } else {
        console.log("Successful login:", data);
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full lg:px-0">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center lg:justify-end relative order-1 lg:order-2 mb-10 lg:mb-0">
        <img src={login} alt="login" className="absolute lg:mr-[180px] mt-20" />
        <img
          src={rectangle2}
          alt="rectangle mobile"
          className="w-[400px] h-[350px] md:hidden mx-auto"
        />
        <img
          src={rectangle}
          alt="rectangle desktop"
          className="hidden md:block w-[310px] h-[549px] lg:mr-28"
        />
        <img
          src={young_man}
          alt="young man"
          className="absolute ml-28 md:ml-56 lg:ml-28 mt-10 w-[180px] md:w-[220px] lg:w-[270px] top-[60%] lg:top-1/2 h-[230px] md:h-[280px] lg:h-[300px] transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center w-full md:w-1/2 order-2 lg:order-1">
        <h1 className="text-3xl font-sora font-extrabold text-center">
          Welcome Back!!
        </h1>
        <form className="mt-10" onSubmit={handleSubmit}>
          <div className="flex flex-col relative">
            <input
              className="bg-[#FCE2CE] bg-opacity-10 border border-gray-400 rounded-full w-full md:w-[400px] h-11 pl-10 focus:outline-none focus:border-gray-500"
              placeholder="email@gmail.com"
              type="text"
              name="email"
              required
              value={user.email}
              autoComplete="off"
              onChange={handleInput}
            />
            <MdOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex flex-col relative mt-10">
            <input
              className="bg-[#FCE2CE] bg-opacity-10 border border-gray-400 rounded-full w-full md:w-[400px] h-11 pl-10 pr-10 focus:outline-none focus:border-gray-500"
              placeholder="Enter Your Password"
              type="password"
              name="password"
              required
              value={user.password}
              autoComplete="off"
              onChange={handleInput}
            />
            <IoLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <FaRegEyeSlash className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <Link to={"/forgotpassword"}>
            <p className="mt-4 font-sora text-gray-700 flex justify-end items-end font-bold cursor-pointer">
              Forget Password?
            </p>
          </Link>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 8 }}
          >
            <button
              type="submit"
              className="bg-[#FCE2CE] dark:bg-[#F8C9A4] font-sora font-bold text-amber-900 w-full md:w-[400px] h-10 rounded-full mt-10"
            >
              Login
            </button>
          </motion.div>
          <p className="text-center mt-6 text-custom-brown"> - or - </p>
          <div className="flex justify-center items-center mt-6 gap-4 cursor-pointer">
            <FcGoogle className="text-2xl mt-1" />
            <IoLogoApple className="text-2xl" />
            <RiGithubFill className="text-2xl" />
          </div>
          <p className="text-custom-brown mt-8 flex justify-center items-center mb-4">
            Don’t have an account ?{" "}
            <Link to={"/signup"}>
              <span className="text-custom-brown2 ml-2">Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
