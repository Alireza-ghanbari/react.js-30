import React, { useState } from "react";
import tokenContext from "./utils/tokencontext";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFoound from "./pages/NotFoound";

export default function App() {
  const [token, setToken] = useState(null);

  const handleToken = (token) => {
    setToken(token);
  };
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFoound />} />
        </Routes> */}


        <tokenContext.Provider value={{ token, handleToken }}>
          {token ? <Home /> : <SignIn />}
        </tokenContext.Provider>
      {/* </BrowserRouter> */}
    </>
  );
}
