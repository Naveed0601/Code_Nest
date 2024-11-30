import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoNotifications } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";

const HeaderDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full dark:bg-zinc-950/50 backdrop-blur bg-zinc-50 border shadow-sm dark:border-zinc-50">
      <div className="flex items-center justify-between px-6 w-full gap-2">
        {/* Left Section: Logo and Search */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="logo"
            className="w-[50px] h-[50px] p-2 rounded-full"
          />
          <FaBarsStaggered className="text-lg" />
          <div className="relative">
            <input
              className="m-2 rounded-xl border bg-gray-100 shadow-sm h-10 p-1 text-lg w-96 pl-10 font-medium"
              placeholder="Search"
            />
            <IoMdSearch className="absolute -mt-[40px] ml-[15px] text-2xl text-gray-500" />
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
