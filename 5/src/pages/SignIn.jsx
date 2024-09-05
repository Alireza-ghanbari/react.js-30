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
    }
  };

  const [{ loading, error, token }, dispatch] = useReducer(
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />
      <input
        type="text"
        id="password"
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />
      <button type="submit">Sign In</button>
    </form>
  );
}
