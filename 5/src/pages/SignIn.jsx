import React, { useContext, useReducer, useState } from "react";
import tokenContext from "../utils/tokencontext";

export default function SignIn() {
  const [formData, setFormData] = useState({});

  const { token: tk, handleToken } = useContext(tokenContext);

  const initialState = {
    token: tk,
    loading: false,
    error: null,
  };

  const userAuth = (state, action) => {
    switch (action.type) {
      case "signIn-start":
        return {
          loading: true,
          error: null,
          token: handleToken(null),
        };
      case "signIn-success":
        return {
          loading: false,
          error: null,
          token: handleToken(action.payload),
        };
      case "signIn-fail":
        return {
          loading: false,
          error: action.payload,
          token: handleToken(null),
        };
      default:
        console.log("wrong type");
        break;
    }
  };

  const [{ loading, error }, dispatch] = useReducer(
    userAuth,
    initialState
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch({ type: "signIn-start" });
      const res = await fetch(`https://fakestoreapi.com/auth/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      dispatch({ type: "signIn-success", payload: data.token });
    } catch (error) {
      dispatch({
        type: "signIn-fail",
        payload: "username or password is incorrect",
      });
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
