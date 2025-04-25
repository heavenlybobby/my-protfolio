import React from "react";

const Footer = () => {
  return (
    <div className="bg-black h-[100px] flex items-center justify-center">
      <p className="text-white">
        &copy; Copyright CodeNova {new Date().getFullYear()} | All Rights
        Reserved
      </p>
    </div>
  );
};

export default Footer;
