import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function Login({ handleModal, handleLogin }) {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch(`http://localhost:3001/users?email=${email}`);
      const data = await res.json();

      if(data.length == 0){
        setLoading(false)
        return toast.error("User not found!")
      }

      if(data[0].password !== password){
        setLoading(false)
        return toast.error("Password in incorrect")
      }

      setLoading(false)
      toast.success("login successfully!")
      handleModal(false)
      localStorage.setItem("user_email", data[0].email)

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[320px] bg-white drop-shadow-md rounded-lg p-6 py-10 flex flex-col gap-6"
    >
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
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@company.com"
          className="px-3 py-2 focus:rounded-md rounded-lg outline-none border-none drop-shadow-md bg-slate-200 duration-200 focus:bg-slate-100 placeholder-slate-400 placeholder:text-sm"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm text-slate-700"> Password:</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
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
          type="submit"
          className="w-full disabled:opacity-60 bg-slate-300 py-[10px] rounded-lg font-semibold mt-7 mb-3 text-slate-700 hover:text-black hover:rounded-2xl duration-200 active:scale-95"
          disabled={loading || !email || !password}
          >
            {loading ? <BeatLoader size={8} /> : "Sign In"}
        </button>
        <p className="text-sm text-slate-700">
          Don't have an account?{" "}
          <span
            className="font-semibold text-blue-800 cursor-pointer"
            onClick={() => handleLogin(false)}
          >
            Sign up
          </span>
        </p>
      </div>
    </form>
  );
}
