import React, { useState } from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";

export default function App() {
  const {token} = useSelector((state) => state.user);
  
  return (
    <>
        {token ? <Home /> : <SignIn />}
    </>
  );
}
