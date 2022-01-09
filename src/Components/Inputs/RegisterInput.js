import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Line from "../../Assets/line.svg";
import Modal from "../UI/Modal";
import classes from "./RegisterInput.module.scss";

const RegisterInput = () => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loggedAccount, setLoggedAccount] = useState(false);
  const history = useHistory();

  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfInputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (loggedAccount) {
        history.push("/login");
      }
    }, [5000]);
  }, [loggedAccount, history]);

  const submitHandler = (event) => {
    event.preventDefault();

    let errorMessage;

    const enteredUser = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPasswordConf = passwordConfInputRef.current.value;

    if (enteredPassword !== enteredPasswordConf) {
      errorMessage = "PASSWORD_NO_THE_SAME";
      setModalMessage(errorMessage);
      setModalDisplay(true);
      return;
    }

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKmRR40Z8Lddf3_umQ19JqvlPODWwn1E4",
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
    ).then((res) => {
      if (res.ok) {
        console.log("Account Logged");
        setLoggedAccount(true);
        return res.json();
      } else {
        res.json().then((data) => {
          console.log(data);
          let errorMessage = "Auth Failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          console.log(errorMessage);
          setModalMessage(errorMessage);
          setModalDisplay(true);
        });
      }
    });
  };

  const modalHandler = () => {
    setModalDisplay(false);
  };

  return (
    <section className={classes.inputSection}>
      <h1>Register</h1>
      <img src={Line} alt="line"></img>
      <p>Manage all your purcases form your account</p>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Full Name</label>
          <br></br>
          <input type="text" id="name" ref={usernameInputRef} required></input>
        </div>
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
          <button type="submit">Create Account</button>
        </div>
      </form>
      {modalDisplay && (
        <Modal message={modalMessage} cta={modalHandler}></Modal>
      )}
    </section>
  );
};

export default RegisterInput;
