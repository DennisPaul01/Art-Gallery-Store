import React from "react";

import LoginInput from "./../Components/Inputs/LoginInput";

import RegisterImage from "../Assets/img-register.jpg";
import RegisterImageWebp from "../Assets/img-register.webp";

import classes from "./RegisterPage.module.scss";

const LoginPage = () => {
  return (
    <section className={classes.auth}>
      <div>
        <LoginInput></LoginInput>
      </div>
      <picture>
        <source srcSet={RegisterImageWebp} type="image/webp" />
        <source srcSet={RegisterImage} type="image/jpeg" />
        <img
          src={RegisterImage}
          alt="Register Image for register page"
          width="669"
          height="792"
          loading="lazy"
        />
      </picture>
    </section>
  );
};

export default LoginPage;
