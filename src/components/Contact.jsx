import React from "react";
import Heading from "./heading";
import CustomText from "./text";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="bg-[url('./assets/images/contact-bg.jpg')] bg-cover bg-no-repeat bg-center bg-fixed  min-h-[150dvh] w-[100%]">
      <div className=" h-[150%] bg-[rgba(21,21,21,0.8)] pt-[150px] pb-[150px]">
        <Heading
          subTitle={"Contact Us"}
          subtitleColor={"text-[rgb(57,181,74)]"}
          subTitleSize={"text-[30px]"}
          title={"Reach out for a new project or just say hello"}
          titleColor={"text-white"}
          titleSize={"text-[28px] md:text-[40px] lg:text-[52px]"}
          width={"w-[350px] md:w-[500px] lg:w-[1000px]"}
        />
        <div className="w-[90%] lg:w-[1000px]  mx-auto mt-[100px] flex flex-col lg:flex-row">
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
          <div className="basis-1/3 bg-black rounded-r-lg pt-[50px] pl-[20px]">
            <div className="w-[80%] mx-auto flex flex-col gap-10">
              <CustomText
                text={"Contact Info"}
                textSize={"text-[15px]"}
                textColor={"text-white"}
              />

              <div>
                <CustomText
                  text={"Email Me At"}
                  textSize={"text-[15px]"}
                  textColor={"text-[rgb(57,181,74)]"}
                />
                <p className="text-[gray] pt-5">heavenlybobby0@gmail.com</p>
                <p className="text-[gray] pt-2">heavenlybobby34@gmail.com</p>
              </div>

              <div>
                <CustomText
                  text={"Call Me At"}
                  textSize={"text-[15px]"}
                  textColor={"text-[rgb(57,181,74)]"}
                />
                <p className="text-[gray] pt-5">+234 812 437 8209</p>
                <p className="text-[gray] pt-2">+234 912 627 1756</p>
              </div>

              <div className="text-[white] flex flex-row gap-5 mt-[100px] mb-[100px]">
                <a
                  href="#"
                  className="border-2 border-[white] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[black] transition-all duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="#"
                  className="border-2 border-[white] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[black] transition-all duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="#"
                  className="border-2 border-[white] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[black] transition-all duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="#"
                  className="border-2 border-[white] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[black] transition-all duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="#"
                  className="border-2 border-[white] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[black] transition-all duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
