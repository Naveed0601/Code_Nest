import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoNotifications } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { motion } from "framer-motion";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import LineBar from "../Chart/LineBar";
import MultipleBar from "../Chart/MultipleBar";
import Visitor from "../Chart/Visitor";
import ToolKit from "../Chart/ToolKit";
import SessionsByCountry from "../Chart/SessionByCountry";

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const HeaderDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className="bg-zinc-800 min-h-screen">
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 bg-black/50 sm:hidden"
        ></div>
      )}

      {/* Header */}
      <header
        className={`relative w-full ${
          isOpen ? "h-screen" : "h-auto"
        } dark:bg-zinc-950/50 backdrop-blur bg-zinc-50 border shadow-sm dark:border-zinc-50 sm:h-auto`}
      >
        {/* Sidebar */}
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={sidebarVariants}
          className="absolute top-0 left-0 z-40 w-64 sm:w-72 h-[500vh] mt-16 p-4 bg-zinc-50 dark:bg-zinc-950/50 backdrop-blur rounded-lg sm:h-auto"
        >
          <Navigation />
        </motion.nav>

        {/* Toggle Button */}
        <MenuToggle toggle={toggleSidebar} isOpen={isOpen} />

        {/* Content */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-4 sm:gap-8">
            <img
              src={logo}
              alt="logo"
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] p-2 rounded-full mt-1"
            />
            <div className="relative hidden sm:block">
              <input
                className="m-2 rounded-xl border bg-gray-100 shadow-sm h-10 p-1 text-lg w-72 lg:w-96 pl-10 font-medium"
                placeholder="Search"
              />
              <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-gray-500" />
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-8">
            <IoMdSearch className="block sm:hidden text-2xl text-gray-700 cursor-pointer" />
            <IoNotifications className="text-2xl text-gray-700 cursor-pointer" />
            <MdOutlineAccountCircle className="text-2xl text-gray-700 cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className={`transition-all ${isOpen ? "ml-72" : ""}`}>
        <LineBar />
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <MultipleBar />
          <Visitor />
          <ToolKit />
        </div>
        <SessionsByCountry />
      </div>
    </div>
  );
};

export default HeaderDashboard;
