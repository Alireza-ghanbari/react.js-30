import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFail,
  signInStart,
  signInSuccess,
} from "../Store/slices/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});

  const {loading, error} = useSelector((state)=> state.user)

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch(`https://fakestoreapi.com/auth/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      dispatch(signInSuccess(data.token));

    } catch (error) {
      dispatch(signInFail("Username or password is incorrect"));
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-lg mx-auto gap-5    mt-10"
    >
      <input
        type="text"
        id="username"
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
        className="border-b-[1px] border-slate-400 px-3 py-2 outline-none focus:border-black duration-200 focus:box-shadow-lg bg-transparent "
        placeholder="Enter your username"
      />
      <input
        type="text"
        id="password"
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
        className="border-b-[1px] border-slate-400 px-3 py-2 outline-none focus:border-black duration-200 focus:box-shadow-lg bg-transparent "
        placeholder="Enter your password"
      />
      <button
        type="submit"
        disabled={loading || !formData.username || !formData.password}
        className="py-2 w-full border-slate-400 border-[1px] mt-7 hover:border-black duration-300 active:scale-95 rounded-sm disabled:opacity-80 disabled:bg-gray-100 disabled:pointer-events-none"
      >
        {loading ? "Loading..." : "Sign In"}
      </button>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </form>
  );
}
