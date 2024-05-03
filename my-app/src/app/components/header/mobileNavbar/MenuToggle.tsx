import React, { useState } from "react";
import { motion } from "framer-motion";

export const MenuToggle = ({ toggle }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsClicked(!isClicked);
    toggle(); 
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      onClick={handleToggle}
      className={`flex justify-center gap-3 items-center pt-2 absolute top-5 right-5 w-fit h-10 rounded-[5px] cursor-pointer px-5 py-1 ${
        isClicked ? "bg-black text-white" : "bg-white text-black"
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 4 7 H 19"
          stroke={isClicked ? "white" : "black"}
          strokeWidth="2"
        />
        <path
          d="M 4 12 H 19"
          stroke={isClicked ? "white" : "black"}
          strokeWidth="2"
        />
        <path
          d="M 4 17 H 19"
          stroke={isClicked ? "white" : "black"}
          strokeWidth="2"
        />
      </svg>
      <h1 className={`z-50 font-semibold`}>Menu</h1>
    </motion.div>
  );
};
