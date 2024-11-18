import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start px-4 sm:px-8 py-8 ">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:w-1/2 space-y-4 sm:space-y-0 sm:space-x-8">
        <img src={logo} alt="logo" className="rounded-full w-20 h-20 mx-8" />
        <h1 className="text-3xl text-fuchsia-600 font-noto text-center sm:text-left">
          CodeNest
          <p className="text-base text-white text-center sm:text-left">
            Elevate your coding game with CodeNest's intuitive snippet
            manager...
          </p>
        </h1>
      </div>

      <div className="lg:pl-52 text-center sm:text-left sm:w-1/2 text-fuchsia-600 font-noto mt-4 sm:mt-0">
        <p className="text-white">© 2022 CodeNest. All rights reserved.</p>
        <div className="flex justify-center sm:justify-start space-x-6 mt-4">
          <AiFillTwitterCircle className="text-gray-100 text-4xl hover:text-blue-600 cursor-pointer" />
          <AiOutlineGithub className="text-gray-100 text-4xl hover:text-yellow-400 cursor-pointer" />
          <FaFacebook className="text-gray-100 text-4xl hover:text-blue-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
