import React from "react";
import { motion } from "framer-motion";

import work1Img from "../assets/images/work1.png";
import work2Img from "../assets/images/work2.png";
import work3Img from "../assets/images/work3.png";

// Example projects data
const projects = [
  {
    title: "Maniverse nail salon",
    link: "https://maniverse-nail-app.vercel.app/",
    image: work3Img, // replace with real image later
  },
  {
    title: "Expressway Delivery",
    link: "https://www.expresswaydelivery.xyz/",
    image: work1Img, // replace with real image later
  },
  {
    title: "Expressway Delivery",
    link: "https://www.expresswaydelivery.xyz/",
    image: work1Img, // replace with real image later
  },
  {
    title: "The Real world",
    link: "https://www.realworldapp.xyz/",
    image: work2Img, // replace with real image later
  },
];

const Work = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 0.6,
              delay: index * 0.1,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[rgb(69,228,90)] rounded-full hover:bg-[rgb(69,228,90)] transition"
              >
                View Project
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
