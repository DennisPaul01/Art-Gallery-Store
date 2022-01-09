import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import logo from "../../Assets/logo.svg";
import cart from "../../Assets/cart.svg";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const history = useHistory();
  const authCtx = useContext(AuthContext);

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

  const logoutHandler = () => {
    history.replace("/login");
    return authCtx.logout();
  };

  return (
    <nav>
      <Link to="/">
        <div className={classes.logo}>
          <img className={classes.logoImage} src={logo} alt="Logo"></img>
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
              <a onClick={logoutHandler}>Logout</a>
            </li>
          )}
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
