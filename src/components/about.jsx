import React from "react";
import CustomText from "./text";
import { motion } from "framer-motion";
import { Count } from "./count";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-[162px] pb-[100px] bg-[rgb(57,181,74)] ">
      <motion.div
        initial={{ opacity: 0, y: 70 }} // Start invisible & 50px lower
        whileInView={{ opacity: 1, y: 0 }} // When in view, fade in & slide up
        transition={{ duration: 1.5 }} // Animation time
        viewport={{ once: true }}
        className="pb-[50px] border-b-2 border-[rgb(69,228,90)] w-[350px] md:w-[500px] lg:w-[650px]"
      >
        <CustomText
          text={"HELLO THERE"}
          textSize={"text-[18px]"}
          textColor={"black"}
        />
        <CustomText
          text={"I Am CodeNova"}
          textSize={"text-[35px] md:text-[55px] lg:text-[72px]"}
          textColor={"white"}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 70 }} // Start invisible & 50px lower
        whileInView={{ opacity: 1, y: 0 }} // When in view, fade in & slide up
        transition={{ delay: 0.5, duration: 1.5 }} // Animation time
        viewport={{ once: true }}
      >
        <p className="text-[black] text-[22px] font-[lora] font-[400] mt-[50px] m-auto w-[340px] md:w-[750px] lg:w-[900px] text-center leading-[35px] lg:leading-[45px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt.
        </p>

        <div className="flex flex-col justify-center lg:justify-between align-middle lg:flex-row gap-5 mt-[50px]">
          <Count
            number={"1+"}
            title={"Years of Experince"}
            isLastelement={false}
          />
          <Count
            number={"10+"}
            title={"Projects Completed"}
            isLastelement={false}
          />
          <Count number={"5+"} title={"Happy clients"} isLastelement={false} />
          <Count number={"80+"} title={"Cups of Coffee"} isLastelement={true} />
        </div>
      </motion.div>
    </div>
  );
}
