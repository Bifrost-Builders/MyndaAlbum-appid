import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../../../lib/scripts";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 260px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 260px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileSideBar = ({userMenu = false}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`absolute top-0 right-0 bottom-0 w-[100px] z-50`}
    >
      <motion.div
        className={`absolute top-0 right-0 bottom-0 ${
          isOpen ? "w-[300px]" : "hidden"
        } bg-white`}
        variants={sidebar}
      />
      <Navigation userMenu={userMenu} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
