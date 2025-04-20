import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const testimonials = [
  {
    name: "Grace Eze",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    testimony:
      "Working with Precious was an absolute pleasure! He delivered my project on time, with beautiful, clean code and thoughtful animations. Highly recommend!",
  },
  {
    name: "Chuka Obi",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    testimony:
      "Precious is incredibly talented and professional. He turned my idea into a fully functional, responsive web app that exceeded my expectations.",
  },
  {
    name: "Amaka Okoro",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    testimony:
      "I was impressed by Precious’s attention to detail and his ability to bring designs to life using Tailwind CSS and Framer Motion. Would definitely work with him again!",
  },
  {
    name: "David Nwachukwu",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    testimony:
      "Precious was proactive and communicated clearly throughout the project. His React and Node.js skills are top-notch — the final product works flawlessly.",
  },
  {
    name: "Chisom Umeh",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    testimony:
      "If you're looking for a developer who cares about both functionality and user experience, Precious is your guy. My app looks amazing and performs even better.",
  },
];

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1); // forward
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1); // backward
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex justify-between w-[90%] md:w-[70%] mx-auto py-[100px]">
      <button onClick={prevTestimonial} className="text-[25px]">
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </button>
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[currentIndex].name}
          initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
          transition={{ duration: 0.5 }}
          className="text-[rgb(85,85,85)] w-[70%] mx-auto"
        >
          <p className="text-[20px] md:text-[30px] text-center text-[lora] mb-4">
            "{testimonials[currentIndex].testimony}"
          </p>
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            loading="lazy"
            className="w-24 h-24 rounded-full object-cover mt-4 mx-auto"
          />
          <h4 className="font-semibold text-[20px] text-center mt-4">
            {testimonials[currentIndex].name}
          </h4>
        </motion.div>
      </AnimatePresence>
      <button onClick={nextTestimonial} className="text-[25px]">
        <FontAwesomeIcon icon={faArrowRight} size="lg" />
      </button>
    </div>
  );
};

export default Clients;
