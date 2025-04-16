import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useRef, useEffect } from "react";

export const Count = ({ number, title, isLastelement }) => {
  const count = useMotionValue(0);
  const to = parseInt(number.replace("+", ""));
  const rounded = useTransform(count, (value) => Math.floor(value));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: 1.5,
        ease: "easeIn",
      });

      return controls.stop;
    }
  }, [isInView, count, to]);

  return (
    <div
      className={`flex flex-col text-center font-[montserrat] pb-[100px] w-[350px] m-auto justify-center align-middle mt-[50px] pl-[20px] pr-[20px] ${
        !isLastelement
          ? "border-b-2 lg:border-b-0 lg:border-r-2 border-[rgb(69,228,90)]"
          : ""
      }`}
    >
      <p className="text-[white] text-[84px] font-bold">
        <motion.span whileInView={{ opacity: 1, y: 0 }} ref={ref}>
          {rounded}
        </motion.span>
        +
      </p>

      <p className="font-bold text-[18px]">{title}</p>
    </div>
  );
};
