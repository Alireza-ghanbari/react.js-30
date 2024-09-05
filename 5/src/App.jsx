import React, { useState } from 'react'
import tokenContext from './utils/tokencontext';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

export default function App() {
  const [token, setToken] = useState(null);

  const handleToken = (token) => {
    setToken(token)
  }
  return (
    <>
      <tokenContext.Provider value={{ token, handleToken}}>
          {token? <Home /> : <SignIn />}
      </tokenContext.Provider>  
    </>
  )
}
