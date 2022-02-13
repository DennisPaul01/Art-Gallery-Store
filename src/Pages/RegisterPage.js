import React from "react";

import RegisterInput from "../Components/Inputs/RegisterInput";

import RegisterImage from "../Assets/img-register.jpg";
import RegisterImageWebp from "../Assets/img-register.webp";

import classes from "./RegisterPage.module.scss";

const RegisterPage = () => {
  return (
    <section className={classes.auth}>
      <div>
        <RegisterInput></RegisterInput>
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

export default RegisterPage;
