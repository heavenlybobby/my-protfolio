import React from "react";
import CustomText from "./text";

const ContactForm = () => {
  return (
    <div className="basis-2/3 bg-[rgba(0,0,0,0.2)] rounded-l-lg pt-[50px] pl-[20px] pb-[100px]">
      <form>
        <CustomText
          text={"Send Us A Message"}
          textSize={"text-[15px]"}
          textColor={"text-white"}
        />

        <div className="pt-[50px] flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="p-[10px] pb-[20px] w-[90%] border-0 border-b-[1px] bg-transparent border-b-[white] text-white placeholder:text-[gray] focus:outline-none focus:border-b-[rgb(57,181,74)]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-[10px] pb-[20px] w-[90%] border-0 border-b-[1px] bg-transparent border-b-[white] text-white placeholder:text-[gray] focus:outline-none focus:border-b-[rgb(57,181,74)]"
          />

          <input
            type="text"
            placeholder="Subject"
            className="p-[10px] pb-[20px] w-[90%] border-0 border-b-[1px] bg-transparent border-b-[white] text-white placeholder:text-[gray] focus:outline-none focus:border-b-[rgb(57,181,74)]"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-[10px] pb-[20px] w-[90%] border-0 border-b-[1px] bg-transparent border-b-[white] text-white placeholder:text-[gray] focus:outline-none focus:border-b-[rgb(57,181,74)]"
          ></textarea>

          <button className="bg-[rgb(57,181,74)] w-[90%] text-white text-[18px] p-4 cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
