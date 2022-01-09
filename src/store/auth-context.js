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

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [emailUser, setEmailUser] = useState(null);

  const userIsLoggedIn = !!token;
  const carts = [];

  const loginHandler = (token, email) => {
    setEmailUser(email);
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
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
