import React, { useContext } from "react";
import tokenContext from "../utils/tokencontext";

export default function Home() {
  const { token, handleToken } = useContext(tokenContext);
  return (
    <div className="max-w-lg mx-auto ">
      <h1 className="text-center text-3xl mt-5">Home Page</h1>
      {token && (
        <p className="text-xs mt-5 line-clamp-1">
          <span className="font-semibold mr-2 text-lg">Token:</span>
          {token}
        </p>
      )}
      <button
        className="w-full mt-10 border-[1px] border-slate-400 hover:border-black duration-300 active:scale-95 py-2"
        onClick={() => handleToken(null)}
      >
        Logout
      </button>
    </div>
  );
}
