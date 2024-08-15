import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Modal({ handleModal }) {
  const [login, setLogin] = useState(true);

  const handleLogin = (x)=>{
    setLogin(x)
  }

  return (
    <div className="w-full h-full backdrop-blur-sm bg-slate-700/10 fixed bottom-0 left-0 z-[100] flex justify-center items-center">
      <div>
        {login ? (
          <Login handleModal={handleModal} handleLogin={handleLogin} />
        ) : (
          <SignUp handleModal={handleModal} handleLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}
