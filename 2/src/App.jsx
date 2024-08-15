// export default function App() {
//   return (
//     <div className="flex flex-col gap-6 justify-center mt-5">
//       <div className="flex gap-10 justify-center">
//         <div className="w-10 h-10 bg-purple-400 rounded-lg"></div>
//         <div className="w-10 h-10 bg-purple-500 rounded-tr-xl rounded-bl-xl"></div>
//         <div className="w-10 h-10 bg-purple-600 border-b-4 border-pink-500"></div>
//       </div>
//       <div className=" flex flex-col items-center">
//         <p className="text-xs py-3 font-bold text-red-600">body text</p>
//         <p className="text-sm py-3">body text</p>
//         <p className="text-md py-3 underline">body text</p>
//         <p className="text-lg py-3 tracking-tight">body text</p>
//         <p className="text-xl py-3 tracking-widest">body text</p>
//       </div>
//       <div className="flex gap-10 justify-center">
//         <div className="w-10 h-10 bg-[#222222] rounded-lg"></div>
//         <div className="w-10 h-10 bg-purple-500 rounded-tr-xl rounded-bl-xl shadow-lg shadow-blue-500"></div>
//         <div className="w-10 h-10 bg-purple-600 border-b-4 border-pink-500"></div>
//       </div>
//       <div className=" flex flex-col items-center">
//         <p className="text-xs py-3 font-bold text-red-600">body text</p>
//         <p className="text-sm py-3 text-[46px] ">body text</p>
//         <p className="text-md py-3 underline">body text</p>
//         <p className="text-lg py-3 tracking-tight">body text</p>
//         <p className="text-xl py-3 tracking-widest fixed top-0 right-0">body text</p>
//       </div>
//       <div className="flex gap-10 justify-center pb-20 ">
//         <div className="w-10 h-10 bg-purple-400 hover:bg-purple-700 duration-300 hover:rounded-lg cursor-pointer"></div>
//         <div className="w-10 h-10 bg-purple-500 "></div>
//         <div className="w-10 h-10 bg-purple-600 "></div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export default function () {
  return (
    <>
      <Navbar />

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
