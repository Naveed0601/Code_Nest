import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-950 z-50 p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" className="w-[70px] h-auto" />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex ml-10 space-x-8">
            {[
              "Home",
              "About",
              "Features",
              "Testimonials",
              "Faq",
              "Review",
              "Footer",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="text-gray-500 hover:text-blue-400 cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-950 p-4 space-y-4">
          <ul className="flex flex-col justify-center items-center space-y-4">
            {[
              "Home",
              "About",
              "Features",
              "Testimonials",
              "Faq",
              "Review",
              "Footer",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="text-gray-500 hover:text-blue-400 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
