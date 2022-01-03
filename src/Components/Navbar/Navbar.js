import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import logo from "../../Assets/logo.svg";
import cart from "../../Assets/cart.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNavHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      <Link to="/">
        <div className={classes.logo}>
          <img className={classes.logoImage} src={logo} alt="Logo"></img>
          <h3>Artorian Gallery</h3>
        </div>
      </Link>
      {(toggleMenu || screenWidth > 500) && (
        <ul className={classes.list}>
          <li className={classes.items}>
            <NavLink to="/collections">Collections</NavLink>
          </li>
          <li className={classes.items}>
            <NavLink to="/register">Contact</NavLink>
          </li>

          <li className={classes.items}>
            <NavLink to="/login">Login</NavLink>
          </li>

          <li className={classes.items}>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      )}
      <div>
        <Link to="/cart">
          <img className={classes.cart} src={cart} alt="cart"></img>
        </Link>
      </div>
      <button onClick={toggleNavHandler} className={classes.btn}>
        <div className={classes.rotate}></div>
      </button>
    </nav>
  );
};

export default Navbar;
