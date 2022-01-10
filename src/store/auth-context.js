import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  emailUser: "",
  isLoggedIn: false,
  cart: [],
  login: (token) => {},
  logout: () => {},
  addCartItem: (item) => {},
});

const retriveStoreToke = () => {
  const storedToken = localStorage.getItem("token");
  const storedEmail = localStorage.getItem("email");
  return {
    token: storedToken,
    email: storedEmail,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retriveStoreToke();
  let initialToken = null;
  let initialEmail = null;

  if (tokenData) {
    initialToken = tokenData.token;
    initialEmail = tokenData.email;
  }
  const [token, setToken] = useState(initialToken);
  const [emailUser, setEmailUser] = useState(initialEmail);

  const userIsLoggedIn = !!token;
  const carts = [];

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("cartItems");
  };

  const loginHandler = (token, email) => {
    setEmailUser(email);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const addCartHandler = (item) => {
    carts.push(item);
  };

  const contextValue = {
    token: token,
    emailUser: emailUser,
    isLoggedIn: userIsLoggedIn,
    cart: carts,
    login: loginHandler,
    logout: logoutHandler,
    addCartItem: addCartHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
