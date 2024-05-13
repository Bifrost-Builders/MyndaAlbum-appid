import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { LinkNames } from "@/app/lib/sharedInfo";
import { UserNavData } from "@/app/lib/sharedInfo";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({userMenu}) => (
  <motion.ul variants={variants} className="p-[25px] absolute top-[100px] right-[5px] w-[230px] ">
    {userMenu ? UserNavData.map((i, index) => (
      <MenuItem i={i.title} isUser={true} index={index} key={index} />
    )) : LinkNames.map((i, index) => (
      <MenuItem i={i} isUser={false} index={index} key={index} />
    ))}
  </motion.ul>
);
