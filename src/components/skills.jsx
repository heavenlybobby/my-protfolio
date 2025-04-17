import React from "react";
import CustomText from "./text";
import { motion } from "framer-motion";

export const Skills = ({ icon, skill, skillDetail }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }} // Start invisible & 50px lower
      whileInView={{ opacity: 1, y: 0 }} // When in view, fade in & slide up
      transition={{ delay: 1, duration: 1.5 }} // Animation time
      viewport={{ once: true }}
      className="w-[400px] lg:w-[600px] flex flex-col lg:flex-row p-[10px] 
     "
    >
      <img
        src={icon}
        alt={skill}
        className="justify-center align-middle ml-[40%] lg:ml-[0] mb-[20px] lg:mb-[0] w-[80px] h-[80px] mr-[20px] "
      />
      <div>
        <span className="text-center lg:text-left">
          <CustomText
            text={skill}
            textColor="text-black"
            textSize="text-[40px] lg:text-[30px]"
          />
        </span>
        <p className="text-[17px] text-[rgb(117,117,117)] font-[lora] leading-[30px]">
          {skillDetail}
        </p>
      </div>
    </motion.div>
  );
};
