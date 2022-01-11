import React from "react";

import LoginInput from "./../Components/Inputs/LoginInput";

import RegisterImage from "../Assets/img-register.jpg";

import classes from "./RegisterPage.module.scss";

const LoginPage = () => {
  return (
    <section className={classes.auth}>
      <div>
        <LoginInput></LoginInput>
      </div>
      <img src={RegisterImage} alt="Register" loading="lazy"></img>
    </section>
  );
};

export default LoginPage;
