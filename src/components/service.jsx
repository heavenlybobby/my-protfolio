import React from "react";
import CustomText from "./text";
import { motion } from "framer-motion";
import { Skills } from "./skills";

import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import tailwind from "../assets/images/tailwind.png";
import motionimg from "../assets/images/motion.png";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";
import Heading from "./heading";

export const Service = () => {
  return (
    <div className="min-h-[100dvh] bg-white mt-[150px] mb-[150px]">
      <Heading
        subTitle={"What I Do"}
        subtitleColor={"text-[rgb(69,228,90)]"}
        subTitleSize={"text-[30px]"}
        title={"I’ve got everything you need to launch and grow your business"}
        titleColor={"text-black"}
        titleSize={"text-[30px] lg:text-[50px]"}
        width={"w-[350px] md:w-[500px] lg:w-[1000px]"}
      />

      <div className="mt-[50px] w-[400px] lg:w-[1250px] m-auto flex flex-wrap gap-[50px]">
        <Skills
          skill={"HTML5"}
          skillDetail={
            "I use HTML to structure and organize content on the web, creating clear, accessible, and semantic layouts for websites and applications. My expertise includes crafting well-structured markup that ensures compatibility across modern browsers, enhances SEO, and forms a solid foundation for styling and interactivity. I prioritize clean, maintainable code and adhere to best practices for web standards and accessibility."
          }
          icon={html}
        />
        <Skills
          skill={"CSS3"}
          skillDetail={
            "I leverage CSS to style and visually enhance web content, creating responsive, intuitive, and engaging user interfaces. My experience covers everything from layout techniques like Flexbox and Grid to animations, transitions, and media queries, ensuring websites look great on all devices while maintaining clean, maintainable style sheets."
          }
          icon={css}
        />
        <Skills
          skill={"Tailwind CSS"}
          skillDetail={
            "I utilize Tailwind CSS to efficiently build modern, responsive interfaces using a utility-first approach. This allows me to rapidly prototype and style applications with consistency, flexibility, and minimal custom CSS. I’m experienced in structuring scalable Tailwind projects and optimizing designs for performance and clarity."
          }
          icon={tailwind}
        />
        <Skills
          skill={"Framer Motion"}
          skillDetail={
            "With Framer Motion, I add smooth, dynamic animations and micro-interactions to React applications, enhancing user engagement and experience. I’m skilled in creating animated transitions, hover effects, and component entrance/exit animations, delivering interfaces that feel fluid and interactive."
          }
          icon={motionimg}
        />
        <Skills
          skill={"JavaScript"}
          skillDetail={
            "I write clean, efficient, and scalable JavaScript to build interactive web applications. My knowledge spans core concepts like DOM manipulation, asynchronous programming, ES6+ features, and working with APIs. I focus on writing maintainable code and applying best practices for performance and readability."
          }
          icon={javascript}
        />
        <Skills
          skill={"React"}
          skillDetail={
            "I build modern, dynamic, and scalable front-end applications using React. From component-based architecture and state management to integrating third-party libraries and creating reusable UI components, I specialize in developing seamless user experiences. I also optimize React projects for performance and maintainability."
          }
          icon={react}
        />
        <Skills
          skill={"Node JS"}
          skillDetail={
            "I use Node.js to develop fast, efficient, and scalable server-side applications. I’m experienced in handling asynchronous operations, managing server-side logic, and integrating with databases and APIs, enabling the creation of full-stack web applications."
          }
          icon={node}
        />
        <Skills
          skill={"Express JS"}
          skillDetail={
            "With Express.js, I build lightweight and flexible server-side applications and RESTful APIs. I’m skilled in structuring scalable back-end systems, managing middleware, handling routing, and connecting to databases, providing a robust foundation for modern web and mobile applications."
          }
          icon={express}
        />
      </div>
    </div>
  );
};
