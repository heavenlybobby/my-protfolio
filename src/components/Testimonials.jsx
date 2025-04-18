import React from "react";
import Heading from "./heading";
import { Clients } from "./Clients";

export const Testimonials = () => {
  return (
    <div className="bg-[#eee] pt-[150px]">
      <Heading
        subTitle={"My Clients"}
        subTitleSize={"text-[30px]"}
        subtitleColor={"text-[rgb(57,181,74)]"}
        title={"CodeNova has been honored to partner up with these clients"}
        titleColor={"text-black"}
        titleSize={"text-[28px] md:text-[40px] lg:text-[52px]"}
        width={"w-[350px] md:w-[500px] lg:w-[1000px]"}
      />

      <Clients />
    </div>
  );
};
