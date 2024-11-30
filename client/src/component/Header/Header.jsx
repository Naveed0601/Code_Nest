import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { CgClose, CgMenu } from "react-icons/cg";
import { cn } from "../../Utils/utils"; // Ensure this utility is correctly imported

const headerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Faq", href: "#faq" },
  { name: "Review", href: "#review" },
  { name: "Footer", href: "#footer" },
];

const icons = [
  {
    name: "Twitter",
    icon: <FaLinkedinIn size="14" />,
    href: "https://www.linkedin.com/in/naveed06/",
  },
  {
    name: "GitHub",
    icon: <FaGithub size="14" />,
    href: "https://github.com/Naveed0601",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "w-full dark:bg-zinc-950/50 backdrop-blur bg-zinc-50 -mt-14",
        "max-w-4xl rounded-full border shadow-lg dark:border-zinc-900",
        "mx-auto",
        "sticky top-6 z-50" // Add sticky positioning
      )}
    >
      <div className="flex items-center justify-between px-6 w-full gap-2">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="logo"
            className="w-[70px] h-[70px] p-2 rounded-full"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 ml-auto ">
          <ul className="flex space-x-8">
            {headerLinks.map((link, i) => (
              <li key={i}>
                {/* Ensure link.href is valid */}
                {link.href ? (
                  <Link
                    to={link.href.substring(1)}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="text-gray-500 hover:text-blue-400 cursor-pointer "
                  >
                    {link.name}
                  </Link>
                ) : (
                  <span>{link.name}</span> // Fallback if href is invalid
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-200 border border-white p-2 rounded-lg"
          >
            {menuOpen ? <CgClose /> : <CgMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="-mt-24 pt-32 h-screen md:hidden bg-gray-950 p-4 space-y-14 ">
          <ul className="flex flex-col justify-center items-center space-y-8 ">
            {headerLinks.map((link, i) => (
              <li key={i}>
                {link.href ? (
                  <Link
                    to={link.href.substring(1)}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="text-gray-100 text-lg font-bold hover:text-blue-400 cursor-pointer border border-white h-10 w-72 rounded-lg flex items-center justify-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-3 border-t pt-4 border-dashed">
            {icons.map((icon) => (
              <Link
                key={icon.name}
                to="" // Keep `to` empty as it won't scroll to any in-page element
                smooth={true}
                duration={500}
                onClick={() =>
                  window.open(icon.href, "_blank", "noopener noreferrer")
                }
                className="rounded-full text-white w-10 h-10 ml-5 flex items-center justify-center cursor-pointer"
              >
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
