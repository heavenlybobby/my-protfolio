import React from "react";
import CustomText from "./text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const ContactInfo = () => {
  return (
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
            href="https://www.facebook.com/profile.php?id=61572935739224"
            target="_blank"
            className="border-2 border-[white] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[black] transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://x.com/heavenly_b49271"
            target="_blank"
            className="border-2 border-[white] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[black] transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://www.instagram.com/heavenlybobby/"
            target="_blank"
            className="border-2 border-[white] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[black] transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/precious-onwukanjo-10aaa2325"
            target="_blank"
            className="border-2 border-[white] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[black] transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://wa.me/2349124271756"
            target="_blank"
            className="border-2 border-[white] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[black] transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
