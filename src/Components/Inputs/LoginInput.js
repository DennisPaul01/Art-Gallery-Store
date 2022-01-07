import React from "react";
import Line from "../../Assets/line.svg";
import classes from "./RegisterInput.module.scss";

const LoginInput = () => {
  return (
    <section className={classes.inputSection}>
      <h1>Login</h1>
      <img src={Line} alt="line"></img>
      <p>Manage all your purcases form your account</p>
      <form>
        <div>
          <label htmlFor="email">Your Email</label>
          <br></br>
          <input type="email" id="email" required></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br></br>
          <input type="password" id="password" required></input>
        </div>
        <div>
          <label htmlFor="passwordConf">Password</label>
          <br></br>
          <input type="password" id="passwordConf" required></input>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </section>
  );
};

export default LoginInput;
