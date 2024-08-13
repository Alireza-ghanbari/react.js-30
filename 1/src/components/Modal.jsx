import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Modal({ handleModal }) {
  const [login, setLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="w-full h-full backdrop-blur-sm bg-slate-700/10 fixed bottom-0 left-0 z-[100] flex justify-center items-center">
      <div>
        {login ? (
          <form className="w-[320px] bg-white drop-shadow-md rounded-lg p-6 py-10 flex flex-col gap-6">
            <div
              className="fixed top-5 right-4 text-slate-700 hover:text-black duration-200 cursor-pointer"
              onClick={() => handleModal()}
            >
              <IoCloseSharp size={22} />
            </div>

            <h1 className="text-3xl text-center mb-5">Login</h1>
            <label className="flex flex-col gap-1">
              <span className="text-sm text-slate-700">Email:</span>
              <input
                type="text"
                placeholder="example@company.com"
                className="px-3 py-2 focus:rounded-md rounded-lg outline-none border-none drop-shadow-md bg-slate-200 duration-200 focus:bg-slate-100 placeholder-slate-400 placeholder:text-sm"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm text-slate-700"> Password:</span>
              <input
                type={showPass ? "text" : "password"}
                placeholder="*******"
                className="px-3 py-2 focus:rounded-md rounded-lg outline-none border-none drop-shadow-md bg-slate-200 duration-200 focus:bg-slate-100 placeholder-slate-400 placeholder:text-sm"
              />
            </label>
            <label className="flex gap-1 items-center ml-1">
              <input
                className="cursor-pointer"
                type="checkbox"
                onChange={(e) => setShowPass(e.target.checked)}
              />
              <span className="text-sm text-slate-700 tracking-tight">
                Show password
              </span>
            </label>
            <div>
              <button
                type="button"
                className="w-full bg-slate-300 py-[10px] rounded-lg font-semibold mt-7 mb-3 text-slate-700 hover:text-black hover:rounded-2xl duration-200 active:scale-95"
              >
                Sign in
              </button>
              <p className="text-sm text-slate-700">
                Don't have an account?{" "}
                <span
                  className="font-semibold text-blue-800 cursor-pointer"
                  onClick={() => setLogin(false)}
                >
                  Sign up
                </span>
              </p>
            </div>
          </form>
        ) : (
          <form className="w-[320px] bg-white drop-shadow-md rounded-lg p-6 py-10 flex flex-col gap-6">
            <div
              className="fixed top-5 right-4 text-slate-700 hover:text-black duration-200 cursor-pointer"
              onClick={() => handleModal(false)}
            >
              <IoCloseSharp size={22} />
            </div>

            <h1 className="text-3xl text-center mb-5">Sign up</h1>
            <label className="flex flex-col gap-1">
              <span className="text-sm text-slate-700">Email:</span>
              <input
                type="text"
                placeholder="example@company.com"
                className="px-3 py-2 focus:rounded-md rounded-lg outline-none border-none drop-shadow-md bg-slate-200 duration-200 focus:bg-slate-100 placeholder-slate-400 placeholder:text-sm"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm text-slate-700"> Password:</span>
              <input
                type={showPass ? "text" : "password"}
                placeholder="*******"
                className="px-3 py-2 focus:rounded-md rounded-lg outline-none border-none drop-shadow-md bg-slate-200 duration-200 focus:bg-slate-100 placeholder-slate-400 placeholder:text-sm"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm text-slate-700">Confirm Password:</span>
              <input
                type={showPass ? "text" : "password"}
                placeholder="*******"
                className="px-3 py-2 focus:rounded-md rounded-lg outline-none border-none drop-shadow-md bg-slate-200 duration-200 focus:bg-slate-100 placeholder-slate-400 placeholder:text-sm"
              />
            </label>
            <label className="flex gap-1 items-center ml-1">
              <input
                className="cursor-pointer"
                type="checkbox"
                onChange={(e) => setShowPass(e.target.checked)}
              />
              <span className="text-sm text-slate-700 tracking-tight">
                Show password
              </span>
            </label>
            <div>
              <button
                type="button"
                className="w-full bg-slate-300 py-[10px] rounded-lg font-semibold mt-7 mb-3 text-slate-700 hover:text-black hover:rounded-2xl duration-200 active:scale-95"
              >
                Sign up
              </button>
              <p className="text-sm text-slate-700">
                Have an account?{" "}
                <span
                  className="font-semibold text-blue-800 cursor-pointer"
                  onClick={() => setLogin(true)}
                >
                  Login
                </span>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
