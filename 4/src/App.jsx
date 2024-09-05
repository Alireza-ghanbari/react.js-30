import React from "react";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Hero from "./components/Hero";

export default function () {
  return (
    <>
      <Navbar />
      <Home />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      <ToastContainer />
    </>
  );
}
