import React from "react";
import CustomText from "./text";
import { motion } from "framer-motion";
import { Count } from "./count";
import Heading from "./heading";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-[162px] pb-[100px] bg-[rgb(57,181,74)] ">
      <Heading
        subTitle={"HELLO THERE"}
        subtitleColor={"text-black"}
        subTitleSize={"text-[18px]"}
        title={"I Am CodeNova"}
        titleSize={"text-[35px] md:text-[55px] lg:text-[72px]"}
        titleColor={"text-white"}
      />

      <motion.div
        initial={{ opacity: 0, y: 70 }} // Start invisible & 50px lower
        whileInView={{ opacity: 1, y: 0 }} // When in view, fade in & slide up
        transition={{ delay: 1, duration: 1.5 }} // Animation time
        viewport={{ once: true }}
      >
        <p className="text-[black] text-[22px] font-[lora] font-[400] mt-[50px] m-auto w-[340px] md:w-[750px] lg:w-[900px] text-center leading-[35px] lg:leading-[45px]">
          My name is Precious, and I’m a passionate web and mobile application
          developer from Abia State, Nigeria. I am equipped with a strong skill
          set that includes HTML, CSS, JavaScript, React, Node.js/Express, and
          React Native. Additionally, I specialize in creating clean,
          responsive, and user-friendly interfaces using Tailwind CSS, and
          enhancing user experiences with Framer Motion for smooth, engaging
          animations. I’m committed to continuous learning and enjoy building
          modern, efficient, and scalable digital solutions. I’m always eager to
          take on new challenges and collaborate with others to create
          innovative projects that make a difference. I look forward to
          connecting with you and exploring potential opportunities together.
        </p>

        <div className="justify-center lg:justify-between align-middle grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-[50px]">
          <Count
            number={"2+"}
            title={"Years of Experince"}
            isLastelement={false}
          />
          <Count
            number={"10+"}
            title={"Projects Completed"}
            isLastelement={false}
          />
          <Count number={"10+"} title={"Happy clients"} isLastelement={false} />
          <Count number={"80+"} title={"Cups of Coffee"} isLastelement={true} />
        </div>
      </motion.div>
    </div>
  );
}
