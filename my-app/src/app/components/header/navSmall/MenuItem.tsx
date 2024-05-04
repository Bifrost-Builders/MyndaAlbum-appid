import { motion } from "framer-motion";
import Link from "next/link";
import { LinkRoutes } from "@/app/lib/sharedInfo";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i, index }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="list-none mb-[20px] cursor-pointer m-auto p-0 font-semibold"
    >
      {
        i === "Sign in" ? <span className="text-blue-600"><Link href={`/${LinkRoutes[index]}`}>{ i }</Link></span> : <Link href={`/${LinkRoutes[index]}`}>{ i }</Link>
      }
    </motion.li>
  );
};
