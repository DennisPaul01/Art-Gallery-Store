import React, { useContext, useRef, useState } from "react";

import AuthContext from "../store/auth-context";

import Line from "../Assets/line.svg";

import classes from "./AccountPage.module.scss";

const AccountPage = () => {
  const [statusChangedPassword, setStatusChangedPassword] = useState(false);
  const authCtx = useContext(AuthContext);

  const newPasswordRef = useRef();

  // Change password handler
  const changePasswordHandler = (event) => {
    event.preventDefault();
    const enteredPassword = newPasswordRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAKmRR40Z8Lddf3_umQ19JqvlPODWwn1E4",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        header: {
          Content: "aplication/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        console.log("The password was changed");
        setStatusChangedPassword(true);
        return res.json();
      } else {
        res.json().then((data) => {
          console.log(data);
        });
      }
    });
  };

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
          {!statusChangedPassword ? (
            <form onSubmit={changePasswordHandler}>
              <label htmlFor="password">Password</label>
              <br></br>
              <input
                type="password"
                id="password"
                ref={newPasswordRef}
                required
              ></input>
              <br></br>
              <button type="submit">Change</button>
            </form>
          ) : (
            <p className={classes.changedPasswordParagraph}>
              Your password has been changed
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
