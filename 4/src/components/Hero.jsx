import React from "react";
import tomatoBanner from "../../public/Tomato_1200x628-facebook.avif";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="xs:px-8 mx-auto relative pb-2 flex xl:flex-row flex-col items-center xl:justify-end z-[-1]">
      <motion.img
        initial={{ opacity: 0, x: 300, rotate: 120 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        src={tomatoBanner}
        alt="tomato"
        className="w-2/3 xl:pt-20 z-0 mt-10 xs:mt-0"
      />
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, x: 0 }}
        className="xl:absolute top-10 left-20 flex items-center xl:items-start justify-center flex-col gap-5 pb-20 xl:pb-0"
      >
        <h2 className="text-2xl xs:text-3xl sm:text-4xl xl:text-5xl tracking-widest xl:leading-snug xl:text-start text-center mt-5">
          Find something intresting <br /> about{" "}
          <span className="text-white font-bold">Tomato</span> here
        </h2>
        <p className="xl:w-1/3 w-3/4 sm:mt-5 leading-normal text-slate-800 tracking-tight xl:text-start text-justify xs:text-[16px] text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          voluptatibus itaque error illo consequatur sapiente possimus
          distinctio fugiat alias, laudantium earum ducimus magnam officiis
          similique?
        </p>
        <div className=" w-[250px] xs:w-[320px] rounded-full flex items-center justify-between mt-4 sm:mt-10 border-[1px] border-black pl-5">
          <p className="flex items-center gap-3 text-sm xs:text-[16px] sm:text-lg font-semibold">
            READ MORE{" "}
            <FaArrowAltCircleRight
              size={26}
              className="xs:inline-block hidden"
            />
          </p>
          <button className="sm:py-5 py-3 px-8 bg-black text-white rounded-full hover:opacity-80 duration-200 flex items-center gap-1 ">
            READ
          </button>
        </div>
      </motion.div>
    </div>
  );
}
