import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {!isMenuOpen ? (
        <button
          className="text-[green] text-[20px] font-bold flex gap-5 cursor-pointer bg-black fixed top-[20px] right-[20px] rounded-[5px] pl-[10px] pr-[10px] pt-[5px] pb-[5px] shadow-lg hover:text-[white] transition-all duration-500 ease-in-out z-[1000]"
          onClick={toggleMenu}
        >
          Menu{" "}
          <span className="text-[white] text-[25px]">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>
      ) : (
        ""
      )}

      <div
        className={`fixed right-0 top-[1px] bottom-0 w-[250px] flex flex-col gap-5 text-[white] bg-black text-[16px] font-bold tracking-[2.5px] pl-[20px] pt-[20px] pb-[20px] rounded-l-[10px] shadow-lg transition-transform duration-300 ease-in-out z-[1000] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mr-5 mt-5 mb-5">
          <h3 className="text-green-500">Navigation</h3>

          <button
            className="font-bold text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            x
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <a href="#" className="font-[montserrat] hover:text-green-500">
            Home
          </a>
          <a
            href="#"
            className="font-[montserrat] font-[18px] hover:text-green-500"
          >
            About
          </a>
          <a
            href="#"
            className="font-[montserrat] font-[18px] hover:text-green-500"
          >
            Services
          </a>
          <a
            href="#"
            className="font-[montserrat] font-[18px] hover:text-green-500"
          >
            Works
          </a>
          <a
            href="#clients"
            className="font-[montserrat] font-[18px] hover:text-green-500"
          >
            Clients
          </a>
          <a
            href="#"
            className="font-[montserrat] font-[18px] hover:text-green-500"
          >
            Contact
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="bg-black opacity-[0.7] z-[800] fixed top-0 left-0 right-0 bottom-0"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}
