import React from "react";
import RegisterInput from "../Components/Inputs/RegisterInput";
import RegisterImage from "../Assets/img-register.jpg";
import classes from "./RegisterPage.module.scss";

const RegisterPage = () => {
  return (
    <section className={classes.auth}>
      <div>
        <RegisterInput></RegisterInput>
      </div>
      <img src={RegisterImage} alt="Register"></img>
    </section>
  );
};

export default RegisterPage;
