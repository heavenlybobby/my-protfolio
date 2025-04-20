import React from "react";
import { Suspense, lazy } from "react";
import Heading from "./heading";
import Loader from "./Loader";
const Work = lazy(() => import("./Work"));
// import work1 from "../assets/images/work1.png";

export const Works = () => {
  return (
    <div className="">
      <div className="bg-black h-[700px] md:h-[700px] lg:h-[700px] pt-[150px]">
        <Heading
          subTitle={"Recent Works"}
          subTitleSize={"text-[20px]"}
          subtitleColor={"text-[rgb(57,181,74)]"}
          title={"I love what I do, check out some of my latest works"}
          titleColor={"text-white"}
          titleSize={"text-[35px] md:text-[40px] lg:text-[52px]"}
          width={"w-[350px] md:w-[500px] lg:w-[900px]"}
        />
      </div>
      <div className="relative top-[-200px]">
        <Suspense fallback={<Loader />}>
          <Work />
        </Suspense>
      </div>
    </div>
  );
};
