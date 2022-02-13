import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";

import logo from "../../Assets/logo.svg";
import cart from "../../Assets/cart.svg";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNavHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  const logoutHandler = () => {
    history.replace("/login");
    return authCtx.logout();
  };

  const storageCartHandler = () => {
    localStorage.setItem("cartItems", JSON.stringify(authCtx.cart));
  };

  return (
    <nav>
      <Link to="/">
        <div className={classes.logo}>
          <img
            className={classes.logoImage}
            src={logo}
            width="50"
            height="38"
            alt="Logo"
          ></img>
          <h3>Artorian Gallery</h3>
        </div>
      </Link>
      {(toggleMenu || screenWidth > 850) && (
        <ul className={classes.list}>
          <li className={classes.items}>
            <NavLink to="/collections">Collections</NavLink>
          </li>

          {!authCtx.isLoggedIn && (
            <li className={classes.items}>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          {!authCtx.isLoggedIn && (
            <li className={classes.items}>
              <NavLink to="/register">Register</NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li className={classes.items}>
              <NavLink to="/account">Account</NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li className={classes.items}>
              <Link to="/login" onClick={logoutHandler}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      )}
      <div className={classes.cart}>
        <Link to="/cart" onClick={storageCartHandler}>
          <img className={classes.icon} src={cart} alt="cart"></img>
        </Link>
      </div>
      <button onClick={toggleNavHandler} className={classes.btn}>
        <div className={classes.rotate}></div>
      </button>
    </nav>
  );
};

export default Navbar;
