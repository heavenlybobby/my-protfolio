import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[200px]">
      <div className="flex space-x-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-5 h-5 bg-[green] rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
