import React from "react";
import Heading from "./heading";
import CustomText from "./text";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

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
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
