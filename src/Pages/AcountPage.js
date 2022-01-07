import React from "react";
import Line from "../Assets/line.svg";
import classes from "./AccountPage.module.scss";

const AccountPage = () => {
  return (
    <section className={classes.account}>
      <h1>Account</h1>
      <img src={Line} alt="line"></img>
      <div className={classes.accountDetails}>
        <div className={classes.historyPurcases}>
          <h2>History purcases</h2>
          <p>Nothing yet</p>
        </div>
        <div className={classes.changePassword}>
          <h2>Change Password</h2>
          <form>
            <label htmlFor="password">Password</label>
            <br></br>
            <input type="password" id="password" required></input>
            <br></br>
            <button type="submit">Change</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
