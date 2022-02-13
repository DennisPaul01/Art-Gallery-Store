import React, { useRef, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";

import Modal from "../UI/Modal";

import Line from "../../Assets/line.svg";

import classes from "./RegisterInput.module.scss";

const LoginInput = () => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loggedAccount, setLoggedAccount] = useState(false);

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfInputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (loggedAccount) {
        history.push("/collections");
      }
    }, [5000]);
  }, [loggedAccount, history]);

  const submitHandler = (event) => {
    event.preventDefault();

    let errorMessage;

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPasswordConf = passwordConfInputRef.current.value;

    if (enteredPassword.length < 6) {
      errorMessage = "PASSWORD_SMALL_6";
      setModalMessage(errorMessage);
      setModalDisplay(true);
      return;
    }

    if (enteredPassword !== enteredPasswordConf) {
      errorMessage = "PASSWORD_NO_THE_SAME";
      setModalMessage(errorMessage);
      setModalDisplay(true);
      return;
    }
    if (enteredEmail.length < 6) {
      errorMessage = "EMAIL_SMALL_6";
      setModalMessage(errorMessage);
      setModalDisplay(true);
      return;
    }

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKmRR40Z8Lddf3_umQ19JqvlPODWwn1E4",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          setLoggedAccount(true);
          return res.json();
        } else {
          res.json().then((data) => {
            let errorMessage = "Auth Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            setModalMessage(errorMessage);
            setModalDisplay(true);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken, data.email);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const modalHandler = () => {
    setModalDisplay(false);
  };

  return (
    <section className={classes.inputSection}>
      <h1>Login</h1>
      <img src={Line} alt="line"></img>
      {!loggedAccount ? (
        <p>Manage all your purcases form your account</p>
      ) : (
        <p>You have been logged and you'll be redirected</p>
      )}
      {!loggedAccount && (
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Your Email</label>
            <br></br>
            <input type="email" id="email" ref={emailInputRef} required></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="passwordConf">Password</label>
            <br></br>
            <input
              type="password"
              id="passwordConf"
              ref={passwordConfInputRef}
              required
            ></input>
          </div>
          <div>
            <button type="submit">Log in</button>
          </div>
        </form>
      )}
      {modalDisplay && (
        <Modal message={modalMessage} cta={modalHandler}></Modal>
      )}
    </section>
  );
};

export default LoginInput;
