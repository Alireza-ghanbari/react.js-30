import React, { useState } from "react";
import tomato from "/public/images.png";
import { FaSearch } from "react-icons/fa";
import { IoMdHome, IoMdMenu } from "react-icons/io";
import { IoClose, IoDocumentText } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import Modal from "./Modal";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleModal = ()=> {
    setShowModal(false)
  }
  return (
    <>
    <nav className="w-full flex items-center py-5 px-4 xs:px-12 drop-shadow-md bg-[#ffd0cc]">
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-1 items-center">
          <img src={tomato} alt="" className="w-7 h-7" />
          <h1 className="text-2xl font-semibold tracking-widest">Tomato</h1>
        </div>
        <div className="hidden lg:flex items-center gap-12 ">
          <p className="text-slate-700 hover:text-[#ff6f61] cursor-pointer font-medium text-lg">
            Home
          </p>
          <p className="text-slate-700 hover:text-[#ff6f61] cursor-pointer font-medium text-lg">
            Blog
          </p>
          <p className="text-slate-700 hover:text-[#ff6f61] cursor-pointer font-medium text-lg" onClick={()=>setShowModal(true)}>
            Login
          </p>
        </div>
        <div className="bg-[#ffb0a9] py-2 px-3 rounded-3xl hover:bg-white hover:rounded-md duration-300 hidden lg:inline-block">
          <label className="flex items-center gap-1 text-slate-700">
            <div className="hover:text-red-600 cursor-pointer duration-200">
              <FaSearch size={18} />
            </div>
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent outline-none border-none pl-2 placeholder:text-sm placeholder:text-slate-500 "
            />
          </label>
        </div>
        <div className="flex items-center lg:hidden">
          <IoMdMenu size={30} onClick={() => setMobileNav(true)} />
        </div>
      </div>

      {/* mobile */}

      <div
        className={`${
          mobileNav ? "right-0" : "-right-[301px]"
        } duration-300 min-h-screen z-[1000] fixed top-0 w-[300px] bg-slate-700/70 backdrop-blur-lg lg:hidden `}
      >
        <div className="fixed top-6 right-8 text-slate-300 hover:text-black cursor-pointer">
          <IoClose size={32} onClick={() => setMobileNav(false)} />
        </div>
        <div className="mt-32 flex flex-col gap-5 z-[1000]">
          <p className="text-slate-300 hover:text-red-600 cursor-pointer font-medium text-lg py-5 flex w-full justify-between items-center hover:bg-slate-200 px-8 duration-300">
            Home
            <IoMdHome size={28} />
          </p>
          <p className="text-slate-300 hover:text-red-600 cursor-pointer font-medium text-lg py-5 flex w-full justify-between items-center hover:bg-slate-200 px-8 duration-300">
            Blog
            <IoDocumentText size={24} />
          </p>
          <p className="text-slate-300 hover:text-red-600 cursor-pointer font-medium text-lg py-5 flex w-full justify-between items-center hover:bg-slate-200 px-8 duration-300" onClick={()=>{setShowModal(true); setMobileNav(false)}}>
            Login
            <FiLogIn size={26} />
          </p>
        </div>
      </div>
    </nav>
    {showModal&& <Modal handleModal={handleModal} />}
    </>
  );
}
