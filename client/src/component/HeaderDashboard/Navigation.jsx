import * as React from "react";
import { motion } from "framer-motion";
import UseMenu from "./UseMenu";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemIds = [0, 1, 2, 3, 4];

const Navigation = () => (
  <motion.ul variants={variants} className="">
    {itemIds.map((i) => (
      <div className="mt-12" key={i}>
        <UseMenu i={i} />
      </div>
    ))}
  </motion.ul>
);

export default Navigation;
