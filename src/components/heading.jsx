import React from "react";
import CustomText from "./text";
import { motion } from "framer-motion";

export default function Heading({
  subTitle,
  subtitleColor,
  subTitleSize,
  title,
  titleSize,
  titleColor,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }} // Start invisible & 50px lower
      whileInView={{ opacity: 1, y: 0 }} // When in view, fade in & slide up
      transition={{ delay: 0.5, duration: 1.5 }} // Animation time
      viewport={{ once: true }}
      className="pb-[50px] border-b-2 border-[rgb(69,228,90)] m-auto w-[350px] md:w-[500px] lg:w-[1000px]"
    >
      <CustomText
        text={subTitle}
        textSize={subTitleSize}
        textColor={subtitleColor}
        centerText={true}
      />
      <CustomText
        text={title}
        textSize={titleSize}
        textColor={titleColor}
        centerText={true}
      />
      <span className="border-b-1 border-[#eee] lg:w-[600px] m-auto mt-[20px]"></span>
    </motion.div>
  );
}
