import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import rectangle from "../../assets/Rectangle.png";
import rectangle2 from "../../assets/Rectangle1.png";
import { FaPhoneAlt } from "react-icons/fa";
import young_man2 from "../../assets/young_man2.png";
import signup from "../../assets/Sign-Up.png";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, password } = user;
    const filteredUser = { name, email, phone, password };

    try {
      const response = await fetch("http://localhost:4000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredUser),
      });
      const data = await response.json();
      if (!response.ok) {
        console.error("Error response from server:", data);
      } else {
        console.log("Successful signup:", data);
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full overflow-hidden md:px-8 lg:px-12">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start relative md:mb-0 lg:ml-20">
        <img src={signup} alt="signup" className="absolute mt-20 md:hidden" />
        <img
          src={rectangle2}
          alt="rectangle mobile"
          className="w-[100%] mb-20 max-w-[500px] h-[250px] sm:w-[400px] sm:h-[320px] md:hidden mx-auto"
        />
        <img
          src={rectangle}
          alt="rectangle desktop"
          className="hidden md:block w-[300px] h-[500px] lg:w-[310px] lg:h-[549px] lg:mt-20 md:ml-8 lg:ml-16"
        />
        <img
          src={young_man2}
          alt="young man"
          className="absolute ml-72 w-[250px] h-[280px] sm:w-[270px] sm:h-[350px] md:w-[320px] md:h-[370px] lg:w-[390px] lg:h-[400px] md:ml-56 lg:ml-72 top-[25%] transform -translate-x-1/2"
        />
      </div>

      <div className="flex flex-col items-center w-full md:w-1/2 px-4 md:px-0 lg:mr-10">
        <h1 className="text-3xl font-sora font-extrabold text-center  lg:mt-10">
          Welcome Back!!
        </h1>
        <form
          className="mt-8 md:mt-10 w-full max-w-[400px]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col relative">
            <input
              className="bg-[#FCE2CE] bg-opacity-10 border border-gray-400 rounded-full w-full h-11 pl-10 focus:outline-none focus:border-gray-500"
              placeholder="Enter your name"
              type="text"
              name="name"
              required
              value={user.name}
              autoComplete="off"
              onChange={handleInput}
            />
            <IoIosContact className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex flex-col relative mt-4 md:mt-8">
            <input
              className="bg-[#FCE2CE] bg-opacity-10 border border-gray-400 rounded-full w-full h-11 pl-10 focus:outline-none focus:border-gray-500"
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
          <div className="flex flex-col relative mt-4 md:mt-8">
            <input
              className="bg-[#FCE2CE] bg-opacity-10 border border-gray-400 rounded-full w-full h-11 pl-10 focus:outline-none focus:border-gray-500"
              placeholder="Enter your phone no"
              type="text"
              name="phone"
              required
              value={user.phone}
              onChange={handleInput}
              autoComplete="off"
            />
            <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex flex-col relative mt-4 md:mt-8">
            <input
              className="bg-[#FCE2CE] bg-opacity-10 border border-gray-400 rounded-full w-full h-11 pl-10 pr-10 focus:outline-none focus:border-gray-500"
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
          <Link to={"/login"}>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 8 }}
            >
              <button
                type="submit"
                className="bg-[#FCE2CE] dark:bg-[#F8C9A4] font-sora font-bold text-amber-900 w-full h-10 rounded-full mt-8 md:mt-10"
              >
                Create Account
              </button>
            </motion.div>
          </Link>
          <p className="text-center mt-6 text-custom-brown"> - or - </p>
          <div className="flex justify-center items-center mt-6 gap-4">
            <FcGoogle className="text-2xl mt-1" />
            <IoLogoApple className="text-2xl" />
            <RiGithubFill className="text-2xl" />
          </div>
          <p className="text-custom-brown mt-8 flex justify-center items-center mb-4">
            Do you have account ?
            <Link to={"/login"}>
              <span className="text-custom-brown2 ml-2">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
