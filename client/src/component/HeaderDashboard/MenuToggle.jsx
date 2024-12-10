import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    className={`focus:outline-none z-50 absolute top-[16px] left-4 ml-20 -mt-1 lg:mt-1`} // Conditionally change margin-left based on isOpen state
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" }, // Top bar
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <Path
        d="M 2 9.423 L 20 9.423" // Middle bar (fades out)
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" }, // Bottom bar
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </svg>
  </button>
);

export default MenuToggle;
