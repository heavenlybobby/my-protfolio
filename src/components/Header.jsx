import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div>
      <div className="bg-[url('./assets/images/hero-bg.jpg')] min-h-[100dvh] lg:h-[150dvh] bg-cover bg-no-repeat">
        <div className="bg-[rgba(0,0,0,0.5)] h-full">
          <div className="h-[100px] flex items-center ml-[20px] mr-[50px] justify-between">
            <h1 className="text-[white] text-[30px] font-bold">
              CODENOVA<span className="text-[green] text-[40px]">.</span>
            </h1>
          </div>

          <div className="ml-[20px] mt-[100px] flex justify-between md:ml-[50px] md:mt-[150px] lg:ml-[200px] lg:mt-[150px]">
            <motion.div
              initial={{ opacity: 1, y: 100 }} // Start invisible & 50px lower
              whileInView={{ opacity: 1, y: 0 }} // When in view, fade in & slide up
              transition={{ duration: 1.5 }} // Animation time
              viewport={{ once: true }}
            >
              <h3 className="text-[#FFFFFF80] text-[16px] tracking-[3px] font-bold">
                WELCOME
              </h3>
              <h1 className="text-[white] text-[30px] font-[700] mt-[10px] w-[300px] leading-relaxed lg:leading-[75px] md:text-[40px] md:w-[450px] lg:text-[63px] lg:w-[700px]">
                I am a creative Person who design influential brands and digital
                experiences.
              </h1>
              <div className="mt-[70px] flex gap-5">
                <button className="bg-transparent border-2 border-[white] text-[white] text-[16px] font-bold tracking-[2.5px] h-[54px] w-[150px] pl-[1px] pr-[1px] rounded-[5px] mt-[10px] md:w-[180px] lg:w-[215px]">
                  Start a Project
                </button>
                <button className="bg-transparent border-2 border-[white] text-[white] text-[16px] font-bold tracking-[2.5px] h-[54px] w-[150px] pl-[1px] pr-[1px] rounded-[5px] mt-[10px] md:w-[180px] lg:w-[215px]">
                  More about me
                </button>
              </div>
            </motion.div>
            <div className="text-[white] hidden lg:flex flex-col gap-5 mr-[50px] mt-[100px]">
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
  );
}
