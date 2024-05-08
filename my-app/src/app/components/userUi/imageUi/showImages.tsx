"use client";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import ImageBlock from "../../imageBlock";

const gridTemplates = {
  small: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  medium: "grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
  large: "grid-cols-4 md:grid-cols-5 lg:grid-cols-6",
};

const imageVariants = [
  "col-span-2",
  "row-span-2", 
  "col-span-1 row-span-1",
];

export default function ShowImages({ files }) {
  const determineGridClass = () => {
    const imageCount = files.length;
    if (imageCount >= 10) {
      return gridTemplates.large;
    } else if (imageCount >= 6) {
      return gridTemplates.medium;
    } else {
      return gridTemplates.small; 
    }
  };

  return (
    <AnimatePresence>
      <section
        className={clsx(
          "w-full h-auto grid gap-4 p-4",
          determineGridClass(),
          "transition-all duration-500 ease-in-out"
        )}
      >
        {files.map((file, index) => {
          const variantIndex = index % imageVariants.length;
          const gridStyle = imageVariants[variantIndex];

          return (
            <motion.div
              key={file.uuid}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={clsx(
                "relative overflow-hidden rounded-[12px]", 
                gridStyle, 
                "bg-gray-200" 
              )}
            >
              <ImageBlock src={file} />
            </motion.div>
          );
        })}
      </section>
    </AnimatePresence>
  );
}
