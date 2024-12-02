import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoNotifications } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { motion } from "framer-motion";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

const sidebarVariants = {
  open: {
    x: 0, // Slide in from the left
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    x: "-100%", // Slide out to the left
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
    <header className="relative w-full dark:bg-zinc-950/50 backdrop-blur bg-zinc-50 border shadow-sm dark:border-zinc-50">
      {/* Sidebar */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="absolute top-0 left-0 z-40 w-64 h-screen bg-zinc-50 mt-14 shadow-lg"
      >
        <Navigation />
      </motion.nav>

      {/* Toggle Button */}
      <MenuToggle toggle={toggleSidebar} isOpen={isOpen} />

      <div className="flex items-center justify-between px-6 w-full gap-2">
        {/* Left Section: Logo and Search */}
        <div className="flex items-center gap-16">
          <img
            src={logo}
            alt="logo"
            className="w-[50px] h-[50px] p-2 rounded-full"
          />
          <div className="relative">
            <input
              className="hidden sm:block m-2 rounded-xl border bg-gray-100 shadow-sm h-10 p-1 text-lg w-96 pl-10 font-medium"
              placeholder="Search"
            />
            <IoMdSearch className="hidden sm:block absolute lg:-mt-[40px] ml-[15px] text-2xl text-gray-500" />
          </div>
        </div>

        {/* Right Section: Notification Icon */}
        <div className="flex items-center gap-8 mr-2">
          <IoNotifications className="text-2xl text-gray-700 cursor-pointer" />
          <MdOutlineAccountCircle className="text-2xl text-gray-700 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
